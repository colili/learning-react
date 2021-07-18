import React from "react";
import ReactDOM from "react-dom";
import CallbackExample from "./CallbackExample";
import ContextExample from "./ContextExample";
import CustomizeHook from "./CustomizeHook";
import MemoExample from "./MemoExample";
import ReducerExample from "./ReducerExample";
import RefExample from "./RefExample";
import StateExample from "./StateExample";

ReactDOM.render(
  <React.StrictMode>
    <StateExample />
    <hr />
    <ContextExample />
    <hr />
    <ReducerExample />
    <hr />
    <RefExample />
    <hr />
    <MemoExample />
    <hr />
    <CallbackExample />
    <hr />
    {/* <EffectExample/> */}
    <hr />
    {/* <CustomizeHook /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
