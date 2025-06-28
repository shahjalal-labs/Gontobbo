// import AuthLayout from "../layout/AuthLayout";
import AuthLayout from "../pages/Auth/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";

const authRouter = {
  path: "/auth",
  Component: AuthLayout,
  children: [
    {
      path: "signin",
      Component: Login,
    },
    {
      path: "signup",
      Component: Register,
    },
  ],
};

export default authRouter;
