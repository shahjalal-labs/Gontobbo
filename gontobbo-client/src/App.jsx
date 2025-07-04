import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import router from "./router/router";

const App = () => {
  return (
    <AuthProvider>
      <div className=" text-gray-500 font-roboto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
