import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import router from "./router/router";

import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (




    <HelmetProvider>
      <AuthProvider>
        <div className=" text-gray-500 font-roboto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
