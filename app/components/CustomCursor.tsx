import React, { useEffect, useRef } from "react";

interface CustomCursorProps {
  gifSrc?: string | string[]; // Allow string or array
  size?: number;
}

const DEFAULT_GIFS = ["guraDance-4x.gif", "guraDance-4x.gif", "guraDance-4x.gif"];

const CustomCursor: React.FC<CustomCursorProps> = ({
  gifSrc,
  size = 48,
}) => {
  const cursorRef = useRef<HTMLImageElement>(null);
  const gifList = Array.isArray(gifSrc) ? gifSrc : gifSrc ? [gifSrc] : DEFAULT_GIFS;
  const gifCount = gifList.length;
  const gifIndex = useRef(0);

  // Change GIF on click (or you can use any other event)
  useEffect(() => {
    if (gifCount <= 1) return;
    const handleClick = () => {
      gifIndex.current = (gifIndex.current + 1) % gifCount;
      if (cursorRef.current) {
        cursorRef.current.src = gifList[gifIndex.current];
      }
    };
    window.addEventListener("pointerdown", handleClick);
    return () => window.removeEventListener("pointerdown", handleClick);
  }, [gifCount, gifList]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - size / 2}px, ${e.clientY - size / 2}px, 0)`;
      }
    };
    document.addEventListener("mousemove", moveCursor, { passive: true });
    return () => document.removeEventListener("mousemove", moveCursor);
  }, [size]);

  // Hide on touch devices
  useEffect(() => {
    const setVisibility = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = window.matchMedia("(pointer: coarse)").matches ? "none" : "unset";
      }
    };
    setVisibility();
    window.addEventListener("resize", setVisibility);
    return () => window.removeEventListener("resize", setVisibility);
  }, []);

  // Memoize style for performance
  const cursorStyle = React.useMemo(() => ({
    position: "fixed" as const,
    left: 0,
    top: 0,
    width: size,
    height: size,
    pointerEvents: "none" as const,
    zIndex: 9999,
    userSelect: "none" as const,
    transition: "transform 0.05s linear",
    mixBlendMode: "normal" as const,
  }), [size]);

  return (
    <img
      ref={cursorRef}
      src={gifList[0]}
      alt="custom cursor"
      aria-hidden="true"
      style={cursorStyle}
      draggable={false}
    />
  );
};

export default CustomCursor;
