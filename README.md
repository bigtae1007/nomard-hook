### useNetwork  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
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
```


사용

```ts
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

```
useState를 이용하여 네트워크 상태를 관리하고, navigator.onLine을 이용하여 네트워크 상태를 추적한다.

**작성한 network 훅에서는 1가지 인자를 받는다.**
1. 변경시 진행 할 함수

인자로 넘겨주는 방법도 이상적이지만, 지금 머릿속으로는 실행함수를 변경해야 하는 상황이 얼마 없을 것 같다는 생각이 든다.



<br/>

**type**

<br/>

navigator.onLine은 현재 네트워크를 true/false로 반환해준다. 따라서 boolean값으로 받았다.
