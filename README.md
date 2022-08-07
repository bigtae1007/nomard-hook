### useFadeIn  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
export const useFadeIn = (dur: number = 1, delay: number = 0) => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (element.current) {
      element.current.style.transition = `opacity ${dur}s ease-in-out ${delay}s`;
      element.current.style.opacity = `1`;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};
```


사용

```ts
export default function PracFadeIn() {
  const element = useFadeIn(2, 2);
  return (
    <div>
      <div {...element}>hello world</div>
    </div>
  );
}
```
useEffect 훅을 이용하여 렌더링 후 화면에 보이기

**작성한 fadein 훅에서는 2가지 인자를 받는다.**
1. duration
2. delay

위 예제는 2개를 작성했지만, 예시일 뿐 상황에 따라 자유롭게 변경이 가능하다.


<br/>

약간 머리를 한대 맞은 기분 ? 
JavaScript를 사용하면서 그리고 Jquery를 사용하면서 DOM 요소를 가져와 style을 변경하는 건 많이 했었다. 
react를 배우기 시작하면서 저 방법은 좋은 방법이 아니라는 생각? useState를 사용하여 styled-component에 변수를 할당하는 방법만 있다는 착각에 빠진 것 같다. 
아직 뭐가 좋은지는 모르겠다. CSS만으로도 구현할 수 있는 기능이다. 다만 animation을 쓰는건 그리는데 많은 크기를 차지한다고 들었기 때문에 이런 간단한 animation은 hook으로 작성하던지 코드로 구현하는게 좋을 것 같다.

<br/>

**type**

<br/>

이번에는 typescript라서 특별한 건 없는 것 같다. 
받을 인자를 number로 작성했지만, 코드를 보면 ``에 묵여있기 때문에 결국 문자열로 적용하게 된다. 따라서 문자열로 받아도 큰 문제가 없다. 타입만 변경하면 될 뿐 

또한 숫자만 받았지만, CSS 자체를 받는 것도 가능하기는 하겠다. 다만 그럴만한 상황은 잘 그려지지 않는다. 
