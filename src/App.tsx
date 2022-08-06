import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PracInput from "./PracHook/PracInput";
import PracTabls from "./PracHook/PracTabls";
import PracTitle from "./PracHook/PracTitle";
import PracConfirm from "./PracHook/PracConfirm";
import PracPreventLeave from "./PracHook/PracPreventLeave";
import PracBeforeLeave from "./PracHook/PracBeforeLeave";

function App() {
  return (
    <div className="App">
      <PracInput />
      <PracTabls />
      <PracTitle />
      <PracConfirm />
      <PracPreventLeave />
      <PracBeforeLeave />
    </div>
  );
}

export default App;
