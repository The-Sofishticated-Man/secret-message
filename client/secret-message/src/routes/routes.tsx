import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./Register/RegisterPage";
import LoginPage from "./Login/LoginPage";
import SendMessage from "./SendMessage/SendMessage";
import useAuth from "../hooks/useAuth";
import UserHome from "./UserHome/UserHome";
import RequireAuth from "../util/RequireAuth";
import MessageBoard from "./MessageBoard/MessageBoard";
import Footer from "../components/Footer/index";
import { getUsername } from "../services/apiClients";

export function useRoutes() {
  const { authState } = useAuth();
  const isLoggedIn = !!authState.user;
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route
          index
          element={isLoggedIn ? <Navigate to="/home" /> : <HomePage />}
        />
        <Route
          path="register"
          element={isLoggedIn ? <Navigate to="/home" /> : <RegisterPage />}
        />
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/send/:userId"
          element={<SendMessage />}
          loader={async ({ params: { userId } }) => {
            return (await getUsername(userId as string)).data.username;
          }}
          errorElement={<Navigate to="/404" />}
        />
        <Route
          path="home"
          element={
            <RequireAuth>
              <UserHome />
            </RequireAuth>
          }
        />
        <Route
          path="messages"
          element={
            <RequireAuth>
              <MessageBoard />
            </RequireAuth>
          }
        />
      </Route>
    ),
    { basename: "/secret-message/" }
  );

  return routes;
}
