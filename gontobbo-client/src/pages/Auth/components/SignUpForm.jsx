import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const [error, setError] = useState("");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_ ]+$/;
  const { registerUser, updateProfile } = useAuth();
  console.log(registerUser, "SignUpForm.jsx", 8);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data, "SignUpForm.jsx", 14);
    if (!passwordRegex.test(data?.password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      );
      return;
    }
    if (data?.password !== data?.confirmPassword) {
      setError("Password does not match");
      return;
    }

    try {
      const res = await registerUser(data?.email, data?.password);
      console.log(res, "SignUpForm.jsx", 16);
      if (res?.user) {
        await updateProfile(res.user, {
          displayName: data?.name,
          photoURL: data?.photoUrl,
        });
        // customAlert({
        //   text: "Sign Up Successful",
        // });
        setError("");
        setTimeout(() => {
          navigate("/");
        }, 2000);
        return;
      }
    } catch (error) {
      setError(error?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 bg-base-200 rounded-box  p-4 "
    >
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign Up Now
      </h2>
      <fieldset className="w-full  p-4 fieldset block">
        <input
          label="Name"
          placeholder="Write your name"
          className="mb-2  w-full sm:min-w-[400px] input input-info rounded-full"
          name="name"
          required
          minLength={3}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full"
          name="email"
          required
        />
        {/* password input */}
        <SignUpPasswordInputs
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          confirmShowPassword={confirmShowPassword}
          setConfirmShowPassword={setConfirmShowPassword}
        />

        <Input
          type="url"
          label="Photo Url"
          placeholder="Give your photo url"
          className=" w-full sm:min-w-[400px] rounded-full input-info"
          name="photoUrl"
        />
        <Button
          type="submit"
          className="btn-block btn-info rounded-full mt-3"
          variant="info"
        >
          Sign Up
        </Button>
        <p className="mt-3">
          Already a member? <Link to="/auth/signin">Sign In</Link>
        </p>
        {error && <p className="text-red-500 font-semibold ">{error}</p>}
        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
