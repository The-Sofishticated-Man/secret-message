import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.tsx";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
