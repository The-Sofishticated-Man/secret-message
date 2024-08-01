// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthContextProvider from "./context/AuthContext.tsx";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SkeletonTheme } from "react-loading-skeleton";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <SkeletonTheme baseColor="#f3f3f3">
      <App />
    </SkeletonTheme>
  </AuthContextProvider>
);
