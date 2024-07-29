import NavBar from "./components/NavBar/Index";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage/HomePage";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Register from "./routes/Register/RegisterPage";
import Login from "./routes/Login/LoginPage";
import useAuth from "./hooks/useAuth";
import MessageBoard from "./routes/MessageBoard/MessageBoard";
import SendMessage from "./routes/SendMessage/SendMessage";
import RequireAuth from "./util/RequireAuth";
import Page404 from "./components/Page404/Page404";
import UserHome from "./routes/UserHome/UserHome";
import { getUsername } from "./services/apiClients";
function App() {
  const { authState } = useAuth();
  const { pathname } = useLocation();
  const { userId } = useParams();
  console.log("the app's current user is ", authState.user);
  console.log("is Authenticated", !!authState.user);

  return (
    <>
      {!(pathname == "/") && <NavBar />}
      <Routes>
        <Route
          path="/"
          element={!authState.user ? <HomePage /> : <Navigate to="/home" />}
        />
        <Route path="/users">
          <Route
            path="register"
            element={!authState.user ? <Register /> : <Navigate to="/home" />}
          />
          <Route
            path="login"
            element={!authState.user ? <Login /> : <Navigate to="/home" />}
          />
        </Route>
        <Route path="send">
          <Route
            path=":userId"
            element={<SendMessage />}
            loader={() => {
              return getUsername(userId!);
            }}
          />
        </Route>
        {/* Protected routes */}
        <Route
          path="messages"
          element={
            <RequireAuth>
              <MessageBoard />
            </RequireAuth>
          }
        />
        <Route
          path="home"
          element={
            <RequireAuth>
              <UserHome />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
