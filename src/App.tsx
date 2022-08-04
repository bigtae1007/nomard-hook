import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PracInput from "./PracHook/PracInput";
import PracTabls from "./PracHook/PracTabls";

function App() {
  return (
    <div className="App">
      <PracInput />
      <PracTabls />
    </div>
  );
}

export default App;
