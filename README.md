### useConfirm  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
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
```


사용

```ts
export default function PracPreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>적용</button>
      <button onClick={disablePrevent}>미적용</button>
    </div>
  );
}

```
beforeunload 이벤트를 통해 새로고침 및 페이지 이탈 방지 훅 작성

<br/>

흔히 노션을 보면 적용되어 있는 기능이다. 작성 중 새로고침 시 내용이 날아가기 때문에 실수로 눌렀을 상황을 대비하여, 동작해 놓으면 좋다. 
물론 이것도 라이브러리가 있지만, 이것까지 이쁘게 꾸며야 하나? 굳이 라이브러리가 아니더라도 브라우저를 멈추고 동작하게 할 수 있으니 유용하게 사용 할 수 있을 것 같다. 

<br/>

**type**

<br/>

매개변수 e type을 any로 작성했다. 보통 input이나 div 등 태그에 직접 달 경우 <HTMLInputElement>를 사용했는데, 이 방식에 경우 어떻게 작성해야할 지 모르겠다. 
더 찾아보고 수정해보자 
