import React from "react";

export const useNotification = (title: string, option: {}) => {
  // Notification이 있는지 확인 먼저
  if (!("Notification" in window)) {
    return;
  }
  const fireNotfication = () => {
    // Notification.permission  >> 현재 알림 상태
    if (Notification.permission !== "granted") {
      // 알림 요청 권유
      Notification.requestPermission().then((permission) => {
        //알림을 받으면
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          // 거부하면
          return;
        }
      });
    } else {
      // 이미 허용을 했다면
      new Notification(title, option);
    }
  };
  return fireNotfication;
};

export default function PracNotification() {
  const notification = useNotification("title", {
    body: "테스트코드",
    icon: "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
  });
  return (
    <div>
      <button onClick={notification}>눌러보세요</button>
    </div>
  );
}
