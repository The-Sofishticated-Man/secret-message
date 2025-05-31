import React from "react";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <NavBar />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
