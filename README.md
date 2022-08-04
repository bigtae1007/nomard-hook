### usetitle 훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
export const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    const titleTag = document.querySelector("title");
    if (titleTag) {
      titleTag.innerText = title;
    }
  }, [title]);
  return setTitle;
};
```


사용

```ts
//tab.js
export default function PracTitle() {
  const updateTitle = useTitle("Loading...");
  return <div>PracTitle</div>;
}
```
useEffect를 이용하여 html 타이틀을 변경하는 훅

**작성한 tab 훅에서는 1가지 인자를 받는다.**
1. 변경하고 싶은 타이틀 문자열



<br/>

내가 만든 프로젝트에서도 그렇고 아마 대부분 halmet을 이용해서 변경하는게 많을 것이다. 
강의에서도 useEffect를 배우기 위해 간단하게 작성한 것이라 하니.... 그렇다고 하자 !

<br/>

**type**

딱히 typescript라서 어려워진 부분은 없는 것 같다. 
```ts
 if (titleTag) {
      titleTag.innerText = title;
    }
```

이렇게 조건만 추가하면 다 동작하는데, 더 다이나믹한 방법은 없을 까 .... 
  
