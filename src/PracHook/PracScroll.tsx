import React, { useEffect, useState } from "react";

export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const scroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return state;
};

export default function PracScroll() {
  const { x, y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>
        hello World
      </h1>
    </div>
  );
}
