import { authLottie } from "../../../animation";
import LottieAnimation from "../../../animation/LottieAnimation";
import {
  leftToRight,
  rightToLeft,
  topToBottom,
} from "../../../animation/motion";
// import UseHelmet from "../../../hooks/useHelmet";
import { motion } from "motion/react";
import SigninForm from "../components/SigninForm";
const Signin = () => {
  return (
    <div className="min-h-[80vh] mt-10 bg-gray-100 py-10 rounded-lg shadow">
      {/* <UseHelmet title="Sign in" /> */}
      <motion.div className="max-lg:max-w-[490px] mx-auto" {...topToBottom}>
        <h2 className="text-center text-xl sm:text-3xl font-semibold font-kaushan text-purple-700">
          Gontobbo connects talent with opportunity.
        </h2>
        <p className="text-center text-gray-500 ext-sm mb-10 mt-2">
          Log in to access thousands of jobs, connect with employers, and take
          control of your career.
        </p>
      </motion.div>
      <div className="lg:grid grid-cols-2 justify-center  max-2xl:gap-7  mt-5 *:mx-auto">
        <motion.div className="max-w-[480px] max-lg:mb-5" {...rightToLeft}>
          <SigninForm />
        </motion.div>

        <motion.div
          className="max-w-[480px]  bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98 "
          {...leftToRight}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;
