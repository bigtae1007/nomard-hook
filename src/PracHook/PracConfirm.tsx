import React from "react";

export const useConfirm = (
  message: string,
  res: () => void,
  rej: () => void
) => {
  const confirm = () => {
    if (window.confirm(message)) {
      res();
    } else {
      rej();
    }
  };
  return confirm;
};

export default function PracConfirm() {
  const success = () => console.log("확인");
  const error = () => console.log("실패");
  const pracConfirm = useConfirm("테스트입니다", success, error);
  return <button onClick={pracConfirm}>눌러보세요</button>;
}
