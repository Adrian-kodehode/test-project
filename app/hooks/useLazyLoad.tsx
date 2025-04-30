import { useState, useEffect, useCallback } from "react";

export const useLazyLoad = (imgRef: React.RefObject<HTMLImageElement>) => {
  const [isInView, setIsInView] = useState(false);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "50px",
      threshold: 0.1,
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [imgRef, onIntersect]);

  return isInView;
};
