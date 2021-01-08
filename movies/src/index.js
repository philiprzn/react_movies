import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { INITIAL_STATE } from "./initialState";

import { ModalContextProvider, ContextConsumer } from './components/ModalContextProvider/ModalContextProvider';

// ReactDOM.render(<App {...INITIAL_STATE}/>, document.getElementById("root"));
ReactDOM.render(<ModalContextProvider ><App /></ModalContextProvider>, document.getElementById("root"));