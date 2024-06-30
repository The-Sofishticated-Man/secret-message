import NavBar from "./components/NavBar/Index";
import Footer from "./components/Footer/Index";
import HomePage from "./routes/HomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
