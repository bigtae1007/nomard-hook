import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PracInput from "./PracHook/PracInput";
import PracTabls from "./PracHook/PracTabls";
import PracTitle from "./PracHook/PracTitle";

function App() {
  return (
    <div className="App">
      <PracInput />
      <PracTabls />
      <PracTitle />
    </div>
  );
}

export default App;
