import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Register from "./routes/Register/RegisterPage";
import Login from "./routes/Login/LoginPage";
import useAuth from "./hooks/useAuth";
import MessageBoard from "./routes/MessageBoard/MessageBoard";
import SendMessage from "./routes/SendMessage/SendMessage";
import RequireAuth from "./util/RequireAuth";
function App() {
  const { authState } = useAuth();
  console.log("the app's current user is ", authState.user);
  console.log("is Authenticated", !!authState.user);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users">
          <Route
            path="register"
            element={
              !authState.user ? <Register /> : <Navigate to="/messages" />
            }
          />
          <Route
            path="login"
            element={!authState.user ? <Login /> : <Navigate to="/messages" />}
          />
        </Route>
        <Route path="send">
          <Route path=":userId" element={<SendMessage />} />
        </Route>
        {/* Protected routes */}
        <Route path="messages" element={<Outlet />}>
          <Route
            index
            element={
              <RequireAuth>
                <MessageBoard />
              </RequireAuth>
            }
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
