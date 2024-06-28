import NavBar from "./components/NavBar/Index";
import Footer from "./components/Footer/Index";
import HomePage from "./routes/HomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
