// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
