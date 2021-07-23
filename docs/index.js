import React from "./snowpack/pkg/react.js";
import ReactDOM from "./snowpack/pkg/react-dom.js";
import App from "./App.js";
import "./index.css.proxy.js";
const mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(App, null), /* @__PURE__ */ React.createElement("p", {
  className: "text-blue-50"
}, "Hola")), mountNode);
