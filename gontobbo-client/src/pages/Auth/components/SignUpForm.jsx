import SocialLogin from "./SocialLogin";

const SignUpForm = () => {
  return (
    <form className="flex-1 bg-base-200 border-base-300 border rounded-box   w-fit   p-4">
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign Up Now
      </h2>
      <fieldset className="w-xs p-4 fieldset">
        <input type="text" className="input" />
      </fieldset>
      <SocialLogin />
    </form>
  );
};

export default SignUpForm;
