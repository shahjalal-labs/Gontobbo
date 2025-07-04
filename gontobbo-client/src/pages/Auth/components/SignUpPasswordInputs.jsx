import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";

const SignUpPasswordInputs = ({
  showPassword,
  setShowPassword,
  confirmShowPassword,
  setConfirmShowPassword,
}) => {
  return (
    <>
      <div>
        <label className="label text-base mb-1">Password</label>
        <div className="flex items-center input w-full sm:min-w-[400px] rounded-full input-info">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Write your password"
            minLength={6}
            name="password"
            required
          />
          <Link onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <Eye className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            ) : (
              <EyeOff className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            )}
          </Link>
        </div>
      </div>
      {/* password confirmation input */}
      <div>
        <label className="label text-base mb-1">Confirm Password</label>
        <div className="flex items-center input w-full sm:min-w-[400px] rounded-full input-info">
          <input
            type={confirmShowPassword ? "text" : "password"}
            placeholder=" Re write your password"
            minLength={6}
            name="confirmPassword"
            required
          />
          <Link onClick={() => setConfirmShowPassword(!confirmShowPassword)}>
            {!confirmShowPassword ? (
              <Eye className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            ) : (
              <EyeOff className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPasswordInputs;
