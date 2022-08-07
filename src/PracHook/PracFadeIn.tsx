import React, { useEffect, useRef } from "react";

export const useFadeIn = (dur: number = 1, delay: number = 0) => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (element.current) {
      element.current.style.transition = `opacity ${dur}s ease-in-out ${delay}s`;
      element.current.style.opacity = `1`;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default function PracFadeIn() {
  const element = useFadeIn(2, 2);
  return (
    <div>
      <div {...element}>hello world</div>
    </div>
  );
}
