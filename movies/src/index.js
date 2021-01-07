import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { INITIAL_STATE } from "./initialState";

import { ContextProvider, ContextConsumer } from './components/ContextProvider/ContextProvider';

// ReactDOM.render(<App {...INITIAL_STATE}/>, document.getElementById("root"));
ReactDOM.render(<ContextProvider ><App /></ContextProvider>, document.getElementById("root"));