import React from "react";
import ReactDOM from "react-dom";

import StateExample from "./StateExample";
import ContextExample from "./ContextExample";
import ReducerExample from "./ReducerExample";
import RefExample from "./RefExample";
import MemoExample from "./MemoExample";
import CallbackExample from "./CallbackExample";
import EffectExample from "./EffectExample";
import CustomizeHook from "./CustomizeHook";

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
    <CustomizeHook />
  </React.StrictMode>,
  document.getElementById("root")
);
