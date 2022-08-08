### useFullscreen  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
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
```


사용

```ts
export default function PracFullscreen() {
  const { element, triggerFullscreen, noTriggerFullscreen } = useFullscreen();
  return (
    <div ref={element}>
      <img src="...." />
      <button onClick={triggerFullscreen}>full</button>
      <button onClick={noTriggerFullscreen}>notFull</button>
    </div>
  );
}

```
requestFullscreen 을 이용한 전체화면

전체화면과 종료 두개의 버튼이 있다.


<br/>

예제는 Div에 걸고 했지만, 전체화면이라 하믄 영상정도에서 사용 할 수 있을 것 같고, 그 외에는 전체 html body를 키우는 방법이 있지 않을 까 싶다.
특정 요소만 전체화면하는 경우는 그렇게 많지는 않았는데, 모바일에서 사진 클릭정도는 이용 할 수도 있을 것 같다.

<br/>

**type**

<br/>
미완성인 이유는 typescript 컴파일이 불가능하다. 
우선 Ref에서 any로 둔 이유 ! 
HTMLDivElement로 설정할 경우 requestFullscreen을 찾을 수 없다는 에러가 발생한다. 

주석으로 처리한 부분 ! 
브라우저마다 사용 코드가 다른데 document에 프로퍼티가 다 없다고 한다.......
우선 과정을 끝내고 실험을 해보자 ! 
