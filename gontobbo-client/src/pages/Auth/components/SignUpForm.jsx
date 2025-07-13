import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import SignUpPasswordInputs from "./SignUpPasswordInputs";
import SocialLogin from "./SocialLogin";
import { isStrongPassword } from "../../../contexts/AuthContext/auth.helpers";

console.log(import.meta.env.VITE_image_upload_key, "imgbb apikey");
const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const { registerUser, updateUserProfile } = useAuth();

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
    const res = await axios.post(uploadUrl, formData);
    return res?.data?.data?.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUploading(true);

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    const photoFile = form.get("photo");

    if (!isStrongPassword(password)) {
      setError(
        "Password must include uppercase, lowercase, number, and special character",
      );
      setUploading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setUploading(false);
      return;
    }

    try {
      let photoURL = "";
      if (photoFile && photoFile.size > 0) {
        photoURL = await handleImageUpload(photoFile);
      }

      const res = await registerUser(email, password);
      if (res?.user) {
        await updateUserProfile(res.user, {
          displayName: name,
          photoURL,
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setError(err?.message || "Registration failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 bg-base-200 rounded-box p-4"
    >
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign Up Now
      </h2>
      <fieldset className="w-full p-4 fieldset block">
        <label className="label text-base mt-2 mb-1">Name</label>
        <input
          name="name"
          placeholder="Write your name"
          required
          minLength={3}
          className="mb-2 w-full sm:min-w-[400px] input input-info rounded-full"
        />

        <label className="label text-base mt-2 mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Write your email"
          required
          className="mb-2 w-full sm:min-w-[400px] input input-info rounded-full"
        />

        <SignUpPasswordInputs
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          confirmShowPassword={confirmShowPassword}
          setConfirmShowPassword={setConfirmShowPassword}
        />

        <label className="label text-base mt-2 mb-1">Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          className="w-full sm:min-w-[400px] rounded-full file-input file-input-info"
        />

        <button
          type="submit"
          className="btn btn-block btn-info rounded-full mt-3"
          disabled={uploading}
        >
          {uploading ? "Signing Up..." : "Sign Up"}
        </button>

        <p className="mt-3 text-sm">
          Already a member?{" "}
          <Link className="link link-primary" to="/auth/signin">
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
