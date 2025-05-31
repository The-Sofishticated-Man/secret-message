import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className={style.layoutRoot}>
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
