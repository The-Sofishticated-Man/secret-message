import NavBar from "./components/NavBar/Index";
import Footer from "./components/Footer/Index";
import HomePage from "./routes/HomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./routes/Register/RegisterPage";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
