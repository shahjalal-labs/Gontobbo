// import AuthLayout from "../layout/AuthLayout";
import AuthLayout from "../pages/Auth/AuthLayout";
import Signin from "../pages/Auth/pages/Signin";
import SignUp from "../pages/Auth/pages/SignUp";

const authRouter = {
  path: "/auth",
  Component: AuthLayout,
  children: [
    {
      path: "signin",
      Component: Signin,
    },
    {
      path: "signup",
      Component: SignUp,
    },
  ],
};

export default authRouter;
