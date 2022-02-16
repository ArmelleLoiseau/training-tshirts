import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TshirtProvider from "./context/TshirtProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TshirtProvider>
        <App />
      </TshirtProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
