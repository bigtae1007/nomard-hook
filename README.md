### usetab 훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
export const useTabs = (
  initialTab: number,
  allTabs?: { tab: string; content: string }[]
) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return {};
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: (num: number) => {
      setCurrentIndex(num);
    },
  };
};
```
사용
```ts
//tab.js
export default function PracTabls() {
  const content = [
    {
      tab: "Section 1",
      content: "content1",
    },
    {
      tab: "Section 2",
      content: "content 2",
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <WrapTabls>
      {content.map((section, l) => (
        <button
          key={section.tab}
          onClick={() => {
            if (changeItem) {
              changeItem(l);
            }
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem?.content}</div>
    </WrapTabls>
  );
}
```

버튼을 누르면 해당 content가 보이는 코드 
이 예제는 자주 사용해본적은 없지만, useState를 이용한 다른 hook이며, 인덱스 번호를 통해 배열의 내용을 끄집어 낼 수 있는 형태에서 사용했다.

**작성한 tab 훅에서는 2가지 인자를 받는다.**
1. 인덱스
2. 인덱스로 값을 꺼낼 전체 배열

초기값으로 보여질 인덱스를 작성하고, 해당 인덱스로 값을 꺼내올 배열을 넘겨준다.

<br/>

지금 형태는 배열안에 객체를 두고 content를 보여지는 형태이다. hook 함수의 반환값으로는 해당 인덱스의 값과, 인덱스를 변화시키는 함수 2가지를 반환하고, 그 함수를 통해 인덱스 번호를 조절할 수 있다.

<br/>

**type**

전체 배열 코드에서는 ```allTabs?: { tab: string; content: string }[]``` 에서 ?가 들어간 이유는 꼭 배열을 넣지 않아도 동작 할 수 있는 상황을 만들기 위함이며, 이는 프로젝트에서 상황에 맞게 조절해 사용하면 된다. 

<br/>

해당 훅 함수 코드를 보면 ``` if (!allTabs || !Array.isArray(allTabs)) ```  조건이 있는데, 이는 받은 배열이 없거나, 배열이 아닌 상황에서는 컴파일에서 에러가 발생하게 되 코드를 실행할 수 없지만, 빈 객체를 반환함으로써 동작할 수 있게 하는 일종에 확인 조건이다.

<br/>

**더 자세히 정리하자면** 코드에서 allTabs를 있을 수도 없을 수도 있는 인자로 설정했기 때문에, undefined일 경우 

```ts
return {
    currentItem: allTabs[currentIndex],
    changeItem: (num: number) => {
      setCurrentIndex(num);
    },
  };
```
코드가 동작하지 않는다. 
따라서 ?를 제거하여 있어야만 실행이 가능한 hook으로 만들 수 있고, if를 통해 undefined가 아닐 경우에만 실행하도록 조건을 추가할 수 있다.
  
