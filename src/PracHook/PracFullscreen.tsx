import React, { useRef } from "react";

export const useFullscreen = () => {
  const element = useRef<any>(null);

  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
    }
  };
  const noTriggerFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    // else if (document.mozCancelFullscreen) {
    //   document.mozExitFullscreen();
    // } else if (document.webkitExitFullscreen) {
    //   document.webkitExitFullscreen();
    // } else if (document.msExitFullscreen) {
    //   document.msExitFullscreen();
    // }
  };
  return { element, triggerFullscreen, noTriggerFullscreen };
};

export default function PracFullscreen() {
  const { element, triggerFullscreen, noTriggerFullscreen } = useFullscreen();
  return (
    <div ref={element}>
      <img src="data:image/png;base64,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" />
      <button onClick={triggerFullscreen}>full</button>
      <button onClick={noTriggerFullscreen}>notFull</button>
    </div>
  );
}
