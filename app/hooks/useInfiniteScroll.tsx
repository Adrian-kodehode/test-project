import { useState, useEffect, useCallback } from "react";

interface UseInfiniteScrollOptions {
  threshold?: number;
  loadMore: () => Promise<void>;
}

export const useInfiniteScroll = ({
  threshold = 100,
  loadMore,
}: UseInfiniteScrollOptions) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = useCallback(async () => {
    if (isLoading) return;

    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      setIsLoading(true);
      try {
        await loadMore();
      } finally {
        setIsLoading(false);
      }
    }
  }, [isLoading, loadMore, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isLoading };
};
