import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import "./index.css.proxy.js";
import {BrowserRouter} from "./_snowpack/pkg/react-router-dom.js";
import App3 from "./App4.js";
const mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(App3, null))), mountNode);
