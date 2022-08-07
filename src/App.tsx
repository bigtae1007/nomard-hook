import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PracInput from "./PracHook/PracInput";
import PracTabls from "./PracHook/PracTabls";
import PracTitle from "./PracHook/PracTitle";
import PracConfirm from "./PracHook/PracConfirm";
import PracPreventLeave from "./PracHook/PracPreventLeave";
import PracBeforeLeave from "./PracHook/PracBeforeLeave";
import PracFadeIn from "./PracHook/PracFadeIn";
import styled from "styled-components";
import PracNetwork from "./PracHook/PracNetwork";

function App() {
  return (
    <AppDiv className="App">
      <PracInput />
      <PracTabls />
      <PracTitle />
      <PracConfirm />
      <PracPreventLeave />
      <PracBeforeLeave />
      <PracFadeIn />
      <PracNetwork />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 500px;
    height: 500px;
    border: 1px solid #000;
  }
`;
