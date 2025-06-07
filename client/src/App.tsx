import { RouterProvider } from "react-router-dom";
import { useRoutes } from "./routes/routes";
import { SkeletonTheme } from "react-loading-skeleton";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
function App() {
  const routes = useRoutes();
  const queryClient = new QueryClient();

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor="#f3f3f3">
          <RouterProvider router={routes} />
          <ReactQueryDevtools initialIsOpen={false} />
        </SkeletonTheme>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
