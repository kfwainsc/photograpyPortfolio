import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
//bootstrap *******************************/
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App/App";
import {Hero} from "./components/Hero/Hero";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
