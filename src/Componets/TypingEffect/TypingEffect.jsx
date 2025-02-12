import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

const TypingEffect = ({ text, speed = 100, delay = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    let timeout;

    if (!isMobile && isHovered) {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, delay);
      }
    } else if (isMobile) {
      setDisplayedText(text);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, delay, isHovered, isMobile]);

  return (
    <h1
      className="font-bold cursor-pointer"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
          setDisplayedText("");
          setIndex(0);
        }
      }}
    >
      {displayedText}
      {!isMobile && <span className="animate-blink">|</span>}
    </h1>
  );
};

export default TypingEffect;
