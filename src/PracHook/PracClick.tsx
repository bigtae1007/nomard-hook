import React, { MutableRefObject, useEffect, useRef } from "react";

export const useClick = (onClick?: () => void) => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function PracClick() {
  const onClick = () => {
    console.log("hello world");
  };
  const title = useClick(onClick);

  return <div ref={title}>sdasd</div>;
}
