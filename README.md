### useNotification  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
xport const useNotification = (
  title: string,
  option: { body: string; icon: string }
) => {
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
```


사용

```ts
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
```
Notification을 알림 보내기

**작성한 Notification을 훅에서는 2가지 인자를 받는다.**
1. 알림에 글 title
2. 아이콘 이미지


위 예제는 2개를 작성했지만 MDN 문서를 보면 다양한 state가 있다.


<br/>

알림 기능 좋은 것 같다. 굳이 알아보진 않았었지만 궁금했었던 내용이랄까? 아마 웹이 구동된 상태에서만 가능 할 것 같은데, eletronic 프레임 워크를 이용해서 어플리케이션처럼 개발한다면 종료해도 남아있을 수 있게 할 수 있을 것 같다. 그럼 다양한 알림을 보낼 수 있을 것 같다. ex) 뉴스 구독형 알림 서비스?

<br/>

