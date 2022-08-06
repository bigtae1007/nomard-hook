import React, { useEffect } from "react";

export const useBeforeLeave = (onBefore: () => void) => {
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

export default function PracBeforeLeave() {
  useBeforeLeave(() => {
    console.log("화면밖을 벗어났습니다.");
  });
  return <div>PracBeforeLeave</div>;
}
