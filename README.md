### useClick 훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
export const useClick = (onClick?: () => void) => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
```


사용

```ts
export default function PracClick() {
  const onClick = () => {
    console.log("hello world");
  };
  const title = useClick(onClick);

  return <div ref={title}>sdasd</div>;
}
```
useEffect를 이용하여 onClick 이벤트를 등록하고 해제하는 훅

**작성한 tab 훅에서는 1가지 인자를 받는다.**
1. onClick 시 실행 할 함수를 받는다.



<br/>

강의에 있으니 정리하면서 연습을 했지만.... 이걸 훅으로 만들까 ?
결국 컴포넌트에 작성해야하는 건 onClick시 발생 할 함수인데..... 그냥 요소에다 바로 onClick 이벤트를 다는게 더 편리하지 않을 까? 생각이 든다.... 
유지 보수가 편해질려나 ....

<br/>

**type**

<br/>

useRef에 type을 안에 들어가는 값 \<number\> ... 으로 선언이 가능하고 
요소에 접근을 한다면 \<HTMLDivElement\>로 선언할 수 있다. 

아직 자세하게 들여다보지는 못했지만, Ref에 선언 방식은 사용 용도에 따라서 달라지는 것 같다. 
다음 프로젝트를 type으로 사용하면서 사용하게 된다면 정리를 해보자 

