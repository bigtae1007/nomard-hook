### useInput 훅 만들기 with. typescript

#### 노마드 코더를 보며 typescript 버전으로 정리한 내용 
**tpyescript 이해도가 부족해 완벽한 내용은 아닐 수 있습니다**

<br>

훅
```ts
export  const  useInput = (	initialValue: string,validator?: ((value: string) =>  boolean) | any => {
	const [value, setValue] = useState(initialValue);
	const  onChange = (	event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		let  willUpdate = true;
		if (typeof  validator === "function") {
		willUpdate = validator(value);
		}//else { ..... 함수가 아닌 다른 조건을 원한다면 더 추가 할 수 있다.
	if (willUpdate) {
	setValue(event.target.value);
	}
};
return { value, onChange };
};
```
사용
```ts
//input.js
export  default  function  PracInput() {
const  maxLen = (value: string) => {
return  value.length < 6;
};
// const { value, onChange } = useInput("btae", maxLen);
const  name = useInput("btae", maxLen);
// 사용가능한 여러 방식
return 
<div>
<h3>hello</h3>
{/* <input type="text" placeholder="name" value={value} onChange={onChange} /> */}
<input  type="text"  placeholder="name"  {...name}  />
<input
type="text"
placeholder="name"
value={name.value}
onChange={name.onChange}
/>
</div>
);
}
```

나는 input과 textarea를 같이 사용 할 수 있는 훅으로 변경해봤다. 
코드 내용은 흔히 코드에서 사용하는 input을 onChange로 관리하는 것을 커스텀 훅으로 만든 것 이다. 
여기서 onChange함수를 useCallback으로 묶는 예제를 많이 봤는데, 아직 useCallback에 대해 알고는 있지만, 사용처에 적절함을 찾지 못해 사용하지는 않았다. 

**작성한 input 훅에서는 2가지 인자를 받는다.**
1. 값
2. 유효성 검사 등의 함수

값은 말 그대로 input이나 textarea에서 작성되는 값을 뜻하며, 유효성 검사는 위 예제에는 길이를 사용했지만, 특정 문자 검사 등 다양한 조건을 추가로 작성 할 수 있다. 
사용하는 프로젝트 상황에 맞게 더 추가할 수 있을 것 같다.

<br/>

**여러 사용법** 

훅을 사용하는데 있어서 기본적이지만 다양한 사용법이 있다. 바로 ```input.js```에서 주석 처리된 부분 
전개 구문으로 변수를 받을 수 있고, key값을 통해 사용할 수 있다. 또한 훅에 반환 값을 모두 사용한다면,   ```{...name}```처럼 코드를 더 줄여 작성 할 수 있다. 

<br/>

**type**

훅에 첫 줄에 타입을 any로 작성했는데, 당연히 좋은 방법은 아니다. 이건 상황에 맞게 변경하면 될 것 같다. 함수가 아닌 boolean을 넣는다면 any 대신 boolean을 사용하면 될 것 같다. 

```event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>```에 type을 두개 작성했는데, 보이듯 textarea에서도 사용할 수 있게 하기 위함이다. 

