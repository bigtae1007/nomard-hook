import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

export default function PracInput() {
  // const { value, onChange } = useInput("btae");
  const name = useInput("btae");

  // 사용가능한 여러 방식
  return (
    <WrapInput>
      <h3>hello</h3>
      {/* <input type="text" placeholder="name" value={value} onChange={onChange} /> */}

      <input type="text" placeholder="name" {...name} />
      <input
        type="text"
        placeholder="name"
        value={name.value}
        onChange={name.onChange}
      />
    </WrapInput>
  );
}

const WrapInput = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #000;
`;
