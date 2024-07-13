import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./routes/Register/RegisterPage";
import Login from "./routes/Login/LoginPage";
import useAuth from "./hooks/useAuth";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavBar loggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
