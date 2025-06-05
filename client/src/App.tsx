import { RouterProvider } from "react-router-dom";
import { useRoutes } from "./routes/routes";
import { SkeletonTheme } from "react-loading-skeleton";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const routes = useRoutes();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor="#f3f3f3">
        <AuthContextProvider>
          <RouterProvider router={routes} />
        </AuthContextProvider>
      </SkeletonTheme>
    </QueryClientProvider>
  );
}

export default App;
