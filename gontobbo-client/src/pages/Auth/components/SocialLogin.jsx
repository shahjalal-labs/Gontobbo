import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Facebook, Github } from "lucide-react";
import { axiosInstance } from "../../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { googleSignIn, user } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign in Success!",
        text: "You have successfully signed in",
        showConfirmButton: false,
        timer: 2000,
      });
      const userInfo = {
        email: user?.email,
        role: "user", // default role
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };
      const response = await axiosInstance.post("/users", userInfo);
      console.log(response?.data, "SocialLogin.jsx", 33);
      setTimeout(() => {
        navigate(from, {
          replace: true,
        });
      }, 3000);
    } catch (error) {
      console.log(`Google Sign In Failed!`, error);
    }
  };
  return (
    <div>
      <div className="divider mt-5">Or continue with</div>
      <div className="flex justify-center max-sm:flex-col gap-3 *:btn-accen *:rounded-full gap-5">
        <button
          className="btn bg-white text-black border-[#e5e5e5]"
          onClick={handleGoogleSignIn}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Google
        </button>
        <button className="btn btn-neutral">
          <Github /> Github
        </button>
        <button className="btn btn-info">
          <Facebook /> Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
