import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { INITIAL_STATE } from "./initialState";

ReactDOM.render(<App {...INITIAL_STATE}/>, document.getElementById("root"));