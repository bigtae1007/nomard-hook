### useScroll  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const scroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return state;
};
```


사용

```ts
export default function PracScroll() {
  const { x, y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>
        hello World
      </h1>
    </div>
  );
}
```
window.scroll을 이용하여 위치 변경 시 CSS 색 변경





<br/>

무한 스크롤을 사용할 때 사용한 적 있는 것 같다. 훅으로 만들 생각은 없었지만, 만일 여러 페이지에서 무한 스크롤을 구현할 생각이 있다면, 이걸 훅으로 만들어 사용하면 편할 것 같다.
API 요청을 보낼 수 있는 함수를 넘겨 받는다면 코드가 확 줄어 들것 같은 이 느낌 !

<br/>

