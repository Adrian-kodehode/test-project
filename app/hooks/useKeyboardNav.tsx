import { useEffect } from "react";

interface KeyboardNavConfig {
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
}

export const useKeyboardNav = (config: KeyboardNavConfig) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          config.onArrowLeft?.();
          break;
        case "ArrowRight":
          config.onArrowRight?.();
          break;
        case "ArrowUp":
          config.onArrowUp?.();
          break;
        case "ArrowDown":
          config.onArrowDown?.();
          break;
        case "Enter":
          config.onEnter?.();
          break;
        case "Escape":
          config.onEscape?.();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [config]);
};
