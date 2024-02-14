import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { Router } from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
