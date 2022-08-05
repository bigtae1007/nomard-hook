### useConfirm  훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
export const useConfirm = (
  message: string,
  res: () => void,
  rej: () => void
) => {
  const confirm = () => {
    if (window.confirm(message)) {
      res();
    } else {
      rej();
    }
  };
  return confirm;
};
```


사용

```ts
export default function PracConfirm() {
  const success = () => console.log("확인");
  const error = () => console.log("실패");
  const pracConfirm = useConfirm("테스트입니다", success, error);
  return <button onClick={pracConfirm}>눌러보세요</button>;
}
```
window.confirm 을 이용해서 확인 / 취소 선택 시 해당 명령 수행 

**작성한 confirm 훅에서는 3가지 인자를 받는다.**
1. confirm에 입력할 message
2. 확인 시 함수
3. 취소 시 함수 

위 예제는 3개를 작성했지만, 취소 함수는 작성하지 않아도 될 것 같다. 


<br/>

이 부분은 만들어 놓으면 편하게 사용할 수는 있을 것 같다. 이번 프로젝트에서는 confirm을 대신해 sweetalert 2 라이브러리를 이용했는데, 
기본 동작하는 흐름은 비슷하니 자주 사용한다면 사용 편이성을 높일 수 있을 것 같다.

<br/>

**type**

<br/>

이번에는 typescript라서 특별한 건 없는 것 같다. 
다만 typescript를 연습하면서 생각을 더 깊게 해야한다는 생각이 드는 것 같다. 

인자를 받아도 안받아도 그만인 것은 ?:를 통해 타입을 지정하게 되고 이럴 경우 조건문에 한번 확인을 거치는 작업이 필요하다. 
편하게 다 ?:로 받고 조건문을 돌리면 그만이겠지만, 그럴꺼면 type을 안쓰겠지 ?..... 
훅을 만들 때에는 여러 상황을 고려하고 유지 보수가 편한 방법을 선택하는 것도 좋을 것 같다. 
