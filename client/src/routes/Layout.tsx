import style from "./Layout.module.css";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className={style.layoutRoot}>
    <NavBar />
    <div className={style.layoutContent}>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
