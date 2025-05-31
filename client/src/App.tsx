import { RouterProvider } from "react-router-dom";
import { useRoutes } from "./routes/routes";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
function App() {
  const routes = useRoutes();
  // Initialize axios private client to handle token refresh and authorization headers
  useAxiosPrivate();
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
