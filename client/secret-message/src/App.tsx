import NavBar from "./components/NavBar/Index";
import Footer from "./components/Footer/Index";
import HomePage from "./routes/HomePage";
import { Routes, Route } from "react-router-dom";
import RegisterAndLogin from "./routes/RegisterAndLogin/RegisterAndLogin";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterAndLogin newUser={true} />} />
        <Route path="/login" element={<RegisterAndLogin newUser={false} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
