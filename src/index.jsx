import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// eslint-disable-next-line no-unused-vars
import './index.css';


const mountNode = document.getElementById("app");
ReactDOM.render(
    <>
      <App/>
        <p className="text-blue-50">Hola</p>
    </>
    , mountNode);
