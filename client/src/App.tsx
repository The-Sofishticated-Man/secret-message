import { RouterProvider } from "react-router-dom";
import { useRoutes } from "./routes/routes";
function App() {
  const routes = useRoutes();
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
