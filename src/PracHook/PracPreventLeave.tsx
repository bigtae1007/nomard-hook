import React from "react";

export const usePreventLeave = () => {
  const lisner = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", lisner);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", lisner);
  };
  return { enablePrevent, disablePrevent };
};

export default function PracPreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>적용</button>
      <button onClick={disablePrevent}>미적용</button>
    </div>
  );
}
