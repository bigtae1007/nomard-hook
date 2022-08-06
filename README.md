### useBeforeLeave  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
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
```


사용

```ts
export default function PracBeforeLeave() {
  useBeforeLeave(() => {
    console.log("화면밖을 벗어났습니다.");
  });
  return <div>PracBeforeLeave</div>;
}
```
mouseleave 이벤트를 이용해서 마우스가 벗어났을 때 이벤트 실행 훅

**작성한 useBeforeLeave 훅에서는 1가지 인자를 받는다.**
1. 벗어났을 때 실행 할 함수




<br/>

설명으로는 벗어나는 동작을 보고 페이지를 나간다 생각해 팝업 등 다른 행동일 할 수 있다고 한다. 
내가 생각하는 방법으로는 흔히 시험을 보면 검색을 막기 위해 특정 key를 막거나 마우스가 화면 밖으로 벗어나면 꺼지는 기능이 있었는데, 
전체 화면으로 전환 후 마우스가 벗어날 경우 setTimeOut과 clearTimeOut을 이용해서 지속적으로 벗어 날 경우 혹은 몇 초 이상 벗어나면 시험이 종료되는 기능을 추가 할 수 있을 것 같다.

<br/>
