import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// MobileProjects: stable DOM, index-rotation Tinder-like stack
// Props: cards = [{ id, src, title, description }]
export default function MobileProjects({ cards = [] }) {
  const cardsRef = useRef(cards.slice());
  const [startIndex, setStartIndex] = useState(0);
  const [counts, setCounts] = useState(() => {
    try {
      const raw = localStorage.getItem('mobileProjectVotes');
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      return {};
    }
  });
  const cardNodes = useRef(new Map());
  const pointer = useRef({ dragging: false, startX: 0, startY: 0, id: null });
  const visibleCount = 6;

  useEffect(() => {
    cardsRef.current = cards.slice();
    setStartIndex(0);
  }, [cards]);

  useEffect(() => {
    const onMove = (e) => {
      if (!pointer.current.dragging) return;
      const node = cardNodes.current.get(pointer.current.id);
      if (!node) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = clientX - pointer.current.startX;
      const dy = clientY - pointer.current.startY;
      const rot = dx / 12;
      gsap.set(node, { x: dx, y: dy, rotation: rot, force3D: true });

      const opacity = Math.min(1, Math.abs(dx) / 120);
      const like = node.querySelector('.like-badge');
      const nope = node.querySelector('.dislike-badge');
      if (dx > 0) {
        if (like) gsap.set(like, { opacity });
        if (nope) gsap.set(nope, { opacity: 0 });
      } else {
        if (nope) gsap.set(nope, { opacity });
        if (like) gsap.set(like, { opacity: 0 });
      }
    };

    const onUp = (e) => {
      if (!pointer.current.dragging) return;
      const node = cardNodes.current.get(pointer.current.id);
      // we'll clear dragging after we read movement to detect taps
      if (!node) return;
      const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
      const dx = clientX - pointer.current.startX;
      const dy = clientY - pointer.current.startY;
      const threshold = 80;
      const like = node.querySelector('.like-badge');
      const nope = node.querySelector('.dislike-badge');

      // detect a quick tap/click (small movement) and treat as open-link
      const clickThreshold = 10;
      if (Math.abs(dx) < clickThreshold && Math.abs(dy) < clickThreshold) {
        // find the card data and open the link if present
        const cardData = cardsRef.current.find((c) => c.id === pointer.current.id);
        pointer.current.dragging = false;
        if (cardData && cardData.link) {
          // also record this as a 'visit' if you want; currently just opens link
          window.open(cardData.link, '_blank', 'noopener');
        }
        return;
      }

      pointer.current.dragging = false;

      if (Math.abs(dx) > threshold) {
        const dir = dx > 0 ? 1 : -1;
        // capture card id now because pointer may be cleared later
        const cardId = pointer.current.id;
        gsap.to(node, {
          x: dir * 1000,
          y: 0,
          rotation: dir * 30,
          duration: 0.45,
          ease: 'power2.out',
          onComplete: () => {
            // increment stored counts
            try {
              setCounts((prev) => {
                const next = { ...(prev || {}) };
                if (!next[cardId]) next[cardId] = { like: 0, dislike: 0 };
                if (dir > 0) next[cardId].like = (next[cardId].like || 0) + 1;
                else next[cardId].dislike = (next[cardId].dislike || 0) + 1;
                localStorage.setItem('mobileProjectVotes', JSON.stringify(next));
                return next;
              });
            } catch (err) {
              // ignore storage errors
            }

            setStartIndex((s) => (s + 1) % Math.max(1, cardsRef.current.length));
            gsap.set(node, { x: 0, y: 0, rotation: 0 });
            if (like) gsap.set(like, { opacity: 0 });
            if (nope) gsap.set(nope, { opacity: 0 });
          }
        });
      } else {
        gsap.to(node, { x: 0, y: 0, rotation: 0, duration: 0.45, ease: 'elastic.out(1,0.6)' });
        if (like) gsap.to(like, { opacity: 0, duration: 0.2 });
        if (nope) gsap.to(nope, { opacity: 0, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  const handleDown = (e, id) => {
    const node = cardNodes.current.get(id);
    if (!node) return;
    if (e.touches) e.preventDefault();
    pointer.current.dragging = true;
    pointer.current.id = id;
    pointer.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
    pointer.current.startY = e.touches ? e.touches[0].clientY : e.clientY;
    const like = node.querySelector('.like-badge');
    const nope = node.querySelector('.dislike-badge');
    if (like) gsap.set(like, { opacity: 0 });
    if (nope) gsap.set(nope, { opacity: 0 });
  };

  const data = cardsRef.current;
  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">No more projects</h2>
          <p className="mt-2 text-sm text-gray-300">Check back later — more work coming soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] p-4">
      <div className="w-full max-w-sm relative" style={{ height: '70vh' }}>
        {data.map((card, idx) => {
          const len = data.length;
          const pos = (idx - startIndex + len) % len; // 0 = top
          if (pos >= visibleCount) return null;

          const zIndex = 200 - pos;
          const translateY = pos * 12;
          const scale = 1 - pos * 0.03;
          const isTop = pos === 0;

          return (
            <div
              key={card.id}
              ref={(el) => (el ? cardNodes.current.set(card.id, el) : cardNodes.current.delete(card.id))}
              onMouseDown={isTop ? (e) => handleDown(e, card.id) : undefined}
              onTouchStart={isTop ? (e) => handleDown(e, card.id) : undefined}
              className={`absolute left-0 right-0 mx-auto rounded-xl overflow-hidden bg-black/60 shadow-2xl cursor-grab touch-pan-y`}
              style={{
                height: '100%',
                zIndex,
                transform: `translateY(${translateY}px) scale(${scale})`,
                transition: 'transform 300ms ease, box-shadow 250ms ease'
              }}
            >
              <img src={card.src} alt={card.title} className="w-full h-full object-cover brightness-75" />

              <div className="absolute inset-0 flex items-start justify-between p-4 pointer-events-none">
                <div className="like-badge bg-white text-teal-600 font-bold px-3 py-1 rounded-md opacity-0">LIKE</div>
                <div className="dislike-badge bg-white text-rose-600 font-bold px-3 py-1 rounded-md opacity-0">NOPE</div>
              </div>

              {/* dislike count (stored) */}
              <div className="absolute top-4 left-4 z-40 px-2 py-1 rounded-md bg-white/10 text-white text-xs pointer-events-none">
                {counts[card.id]?.dislike || 0}
              </div>

              {/* like button: open project's link in new tab and increment like count */}
              <button
                className="absolute top-4 right-4 z-50 flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                onClick={(ev) => {
                  ev.stopPropagation();
                  // prevent starting a drag when clicking the button
                  ev.preventDefault();
                  try {
                    // optimistic increment
                    setCounts((prev) => {
                      const next = { ...(prev || {}) };
                      if (!next[card.id]) next[card.id] = { like: 0, dislike: 0 };
                      next[card.id].like = (next[card.id].like || 0) + 1;
                      localStorage.setItem('mobileProjectVotes', JSON.stringify(next));
                      return next;
                    });
                  } catch (err) {}
                  if (card.link) window.open(card.link, '_blank', 'noopener');
                }}
                aria-label={`Open ${card.title} link`}
                style={{ pointerEvents: 'auto' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path>
                </svg>
                <span className="text-xs">{counts[card.id]?.like || 0}</span>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="text-xs text-gray-200 mt-1">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
