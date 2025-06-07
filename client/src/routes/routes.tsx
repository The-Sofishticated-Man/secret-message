import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./Register/RegisterPage";
import LoginPage from "./Login/LoginPage";
import SendMessage from "./SendMessage/SendMessage";
import UserHome from "./UserHome/UserHome";
import RequireAuth from "../util/RequireAuth";
import RequireNotAuth from "../util/RequireNotAuth";
import MessageBoard from "./MessageBoard/MessageBoard";
import Page404 from "./Page404/Page404";
import PersistLogin from "../util/PersistLogin";
import Layout from "./Layout";
import getUsernameFromID from "../util/getUsernameFromID";

export function useRoutes() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route element={<PersistLogin />}>
          {/* Public routes that do not require authentication */}
          <Route element={<RequireNotAuth />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route
            path="send/:userId"
            element={<SendMessage />}
            loader={getUsernameFromID}
            errorElement={<Navigate to="/404" replace />}
          />
        </Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="home" element={<UserHome />} />
            <Route path="messages" element={<MessageBoard />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<Page404 />}></Route>
      </Route>
    )
  );

  return routes;
}
