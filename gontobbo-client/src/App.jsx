import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import router from "./router/router";

import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <div className=" text-gray-500 font-roboto">
            <RouterProvider router={router} />
          </div>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
