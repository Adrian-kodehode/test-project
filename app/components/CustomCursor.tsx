import React, { useEffect, useRef } from "react";

interface CustomCursorProps {
  gifSrc?: string;
  size?: number;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  gifSrc = ["guraDance-4x.gif", "guraDance-4x.gif", "guraDance-4x.gif"], // Accepts array or string
  size = 48,
}) => {
  const cursorRef = useRef<HTMLImageElement>(null);
  const gifList = Array.isArray(gifSrc) ? gifSrc : [gifSrc];
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
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [gifCount, gifList]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${
          e.clientX - size / 2
        }px, ${e.clientY - size / 2}px, 0)`;
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, [size]);

  // Hide on touch devices
  useEffect(() => {
    const setVisibility = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = window.matchMedia("(pointer: coarse)")
          .matches
          ? "none"
          : "block";
      }
    };
    setVisibility();
    window.addEventListener("resize", setVisibility);
    return () => window.removeEventListener("resize", setVisibility);
  }, []);

  return (
    <img
      ref={cursorRef}
      src={gifList[0]}
      alt="custom cursor"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        userSelect: "none",
        transition: "transform 0.05s linear",
        mixBlendMode: "normal",
      }}
      draggable={false}
    />
  );
};

export default CustomCursor;
