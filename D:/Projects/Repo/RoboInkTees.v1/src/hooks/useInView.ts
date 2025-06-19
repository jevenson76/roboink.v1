import { useState, useEffect, useRef } from 'react';

type UseInViewOptions = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

export const useInView = (options?: UseInViewOptions) => {
  const { threshold = 0, root = null, rootMargin = '0px', triggerOnce = false } = options || {};
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!triggerOnce) {
            setInView(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, inView] as const;
}; 