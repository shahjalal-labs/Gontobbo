import AuthLayout from "../layout/AuthLayout";

const authRouter = {
  path: "/auth",
  Component: AuthLayout,
  children: [
    {
      path: "signin",
      // Component: SignIn,
    },
    {
      path: "signup",
      // Component: SignUp,
    },
  ],
};

export default authRouter;
