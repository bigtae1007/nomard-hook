import React, { useEffect, useState } from "react";

export const useNetwork = (onChange?: (state: boolean) => void) => {
  const [statuse, setStatus] = useState(navigator.onLine);
  const changeNetwork = () => {
    if (onChange) {
      onChange(navigator.onLine);
    }

    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", changeNetwork);
    window.addEventListener("offline", changeNetwork);
    return () => {
      window.removeEventListener("online", changeNetwork);
      window.removeEventListener("offline", changeNetwork);
    };
  }, []);
  return statuse;
};

export default function PracNetwork() {
  const changeNetwork = (state: boolean) => {
    console.log(state ? "온라인" : "오프라인");
  };
  const network = useNetwork(changeNetwork);

  return (
    <div>
      <div>{network ? "OnLine" : "OffLine"}</div>
    </div>
  );
}
