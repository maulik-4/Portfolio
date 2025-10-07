import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function Loader() {
  const loaderRef = useRef(null);
  const timelineRef = useRef(null);
  const barRef = useRef(null);
  const percentLabelRef = useRef(null);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const loadedCountRef = useRef(0);
  const [totalCount, setTotalCount] = useState(0);
  const [percent, setPercent] = useState(0);
  const minimumLoaderTime = 3; // seconds

  // Text splitter (idempotent)
  function textSplitter(element) {
    if (!element) return;
    if (element.querySelectorAll('span').length > 0) return;
    const content = element.textContent || '';
    element.innerHTML = '';
    content.split('').forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      element.appendChild(span);
    });
  }

  // small wait
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  // Attach loaders for assets and update progress for each resolved asset
  useEffect(() => {
    let mounted = true;

    const scanAssets = () => {
      // reset counters
      loadedCountRef.current = 0;
      setLoadedCount(0);
      setPercent(0);

      const imgs = Array.from(document.images || []);
      const videos = Array.from(document.querySelectorAll('video'));
      const countFonts = (document.fonts ? 1 : 0);
      const countDoc = 1; // document load event

      const totalAssets = imgs.length + videos.length + countFonts + countDoc;
      setTotalCount(totalAssets);

      let completionTimer = null;
      let fallback = null;

      const markLoaded = () => {
        if (!mounted) return;
        loadedCountRef.current += 1;
        const next = loadedCountRef.current;
        setLoadedCount(next);
        const pct = totalAssets > 0 ? Math.round((next / totalAssets) * 100) : 100;
        setPercent(pct);

        if (totalAssets > 0 && next >= totalAssets) {
          if (fallback) clearTimeout(fallback);
          if (completionTimer) clearTimeout(completionTimer);
          completionTimer = setTimeout(() => { if (mounted) setResourcesLoaded(true); }, 40);
        }
      };

      imgs.forEach((img) => {
        if (img.complete) markLoaded();
        else {
          const onLoad = () => { cleanup(); markLoaded(); };
          const onErr = () => { cleanup(); markLoaded(); };
          function cleanup() { img.removeEventListener('load', onLoad); img.removeEventListener('error', onErr); }
          img.addEventListener('load', onLoad);
          img.addEventListener('error', onErr);
        }
      });

      videos.forEach((video) => {
        if (video.readyState >= 3) markLoaded();
        else {
          const onCan = () => { cleanup(); markLoaded(); };
          const onErr = () => { cleanup(); markLoaded(); };
          function cleanup() { video.removeEventListener('canplay', onCan); video.removeEventListener('error', onErr); }
          video.addEventListener('canplay', onCan);
          video.addEventListener('error', onErr);
        }
      });

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => markLoaded()).catch(() => markLoaded());
      }

      if (document.readyState === 'complete') markLoaded();
      else {
        const onLoad = () => { window.removeEventListener('load', onLoad); markLoaded(); };
        window.addEventListener('load', onLoad);
      }

      // minimum show time
      const minDelay = wait(minimumLoaderTime * 1000);

      // fallback
      fallback = setTimeout(() => { if (mounted) setResourcesLoaded(true); }, 12000);

      // return a cleanup function for this scan
      return () => { mounted = false; clearTimeout(fallback); if (completionTimer) clearTimeout(completionTimer); };
    };

    // Start an initial scan on mount
    const cleanupScan = scanAssets();

    // When the app requests navigation, show loader immediately and wait for 'app:navigated'
    const onNavigateRequest = (e) => {
      // show loader immediately
      setAnimationComplete(false);
      setResourcesLoaded(false);
      setPercent(0);
      setLoadedCount(0);
      setTotalCount(0);
      // allow navigation to proceed immediately while loader remains visible
      window.dispatchEvent(new CustomEvent('app:loader-ready'));
      // when navigation completed, rescan assets and let the loader hide when done
      const onNavigated = () => {
        window.removeEventListener('app:navigated', onNavigated);
        // scan again for new page assets
        if (cleanupScan) cleanupScan();
        scanAssets();
        // once the loader determines the new page is ready it will dispatch app:loader-ready
      };
      window.addEventListener('app:navigated', onNavigated, { once: true });
    };

    window.addEventListener('app:navigate-request', onNavigateRequest);

    return () => {
      window.removeEventListener('app:navigate-request', onNavigateRequest);
      if (cleanupScan) cleanupScan();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update percent when loadedCount or totalCount changes
  useEffect(() => {
    if (totalCount > 0) {
      setPercent(Math.round((loadedCount / totalCount) * 100));
    } else if (resourcesLoaded) {
      setPercent(100);
    }
  }, [loadedCount, totalCount, resourcesLoaded]);

  // Animation setup and spinner integration
  useEffect(() => {
    document.body.classList.add('loader-active');
    if (loaderRef.current) textSplitter(loaderRef.current);

  const spansSelector = '.loader h1 span';
  const barSelector = '.loader-bar';
  const percentSelector = '.loader-percent';

    timelineRef.current = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'power1.out' } });
    timelineRef.current.fromTo(spansSelector, { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.45 });
    timelineRef.current.to(spansSelector, { y: -10, scale: 1.02, stagger: 0.06, duration: 0.55 }, '+=0.12');
  // subtle bar pulse and percent bounce
  timelineRef.current.to(barSelector, { scaleX: 1.02, duration: 0.6, yoyo: true, repeat: -1, transformOrigin: '0% 50%' }, 0);
  timelineRef.current.to(percentSelector, { y: -4, duration: 0.45, yoyo: true, repeat: -1, ease: 'sine.inOut' }, 0);

    if (resourcesLoaded) {
      // signal any waiting navigation that loader finished scanning
      window.dispatchEvent(new CustomEvent('app:loader-ready'));

      if (timelineRef.current) timelineRef.current.pause();

      gsap.to('.loader', {
        y: '-100%',
        opacity: 0,
        duration: 1.05,
        delay: 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          setAnimationComplete(true);
          window.loaderCompleteTime = new Date().getTime();
          document.body.classList.remove('loader-active');
          window.dispatchEvent(new CustomEvent('loaderComplete'));
        }
      });
    }

    return () => {
      document.body.classList.remove('loader-active');
      if (timelineRef.current) {
        try { timelineRef.current.kill(); } catch (e) {}
      }
    };
  }, [resourcesLoaded]);

  return (
    <section
      className={`loader z-50 fixed inset-0 bg-black text-white flex items-center justify-center ${animationComplete ? 'hidden' : ''}`}
      aria-hidden={animationComplete}
    >
      <div className="flex flex-col items-center justify-center gap-6 px-6">
        <h1 ref={loaderRef} className="text-3xl sm:text-4xl md:text-[5vw] font-extrabold tracking-tight text-center leading-tight">
          Great Thing Coming
        </h1>

        <div className="w-full max-w-md px-2">
          <div className="mb-3 text-center sm:text-left text-sm text-gray-300">Loading</div>

          <div className="relative w-full" style={{ height: 40 }}>
            {/* percent label above the bar - clamp so it doesn't overflow */}
            {
              (() => {
                const clampPercent = Math.max(4, Math.min(96, percent));
                const labelLeft = `${clampPercent}%`;
                const labelText = `${percent}%`;
                return (
                  <div
                    ref={percentLabelRef}
                    className="absolute text-xs font-semibold px-2 py-1 rounded-md shadow-md bg-white text-black"
                    style={{ left: labelLeft, top: 0, transform: 'translate(-50%, -100%)', whiteSpace: 'nowrap' }}
                  >
                    {labelText}
                  </div>
                );
              })()
            }

            <div className="absolute left-0 top-8 w-full bg-gray-800 rounded-lg overflow-hidden" style={{ height: 18 }}>
              {/* progress fill with gradient and shadow */}
              <div
                ref={barRef}
                className="absolute left-0 top-0 h-full loader-bar"
                style={{
                  width: `${percent}%`,
                  transition: 'width 300ms linear',
                  background: 'linear-gradient(90deg,#06b6d4,#60a5fa)',
                  boxShadow: '0 6px 18px rgba(96,165,250,0.12)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loader;
