You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/Auth
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `Auth_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved Auth version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client
├── bun.lock
├── demo.mp4
├── eslint.config.js
├── index.html
├── package.json
├── public
│   ├── CNAME
│   └── vite.svg
├── README2.md
├── readmeGenerateAdvanced.md
├── readmeGenerateFull.md
├── readmeGeneratePrev.md
├── README.md
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── assets
│   │   ├── Brands
│   │   │   ├── 1panel.svg
│   │   │   ├── abbott.svg
│   │   │   ├── activision.svg
│   │   │   ├── index.js
│   │   │   ├── logmein.svg
│   │   │   ├── nike.svg
│   │   │   ├── openjsfoundation.svg
│   │   │   └── tech.svg
│   │   ├── images
│   │   │   ├── a-delivery-bike-speeding-through-a-vibrant-bangladesh.jpg
│   │   │   ├── bgDesign.jpg
│   │   │   ├── finalLogo.png
│   │   │   ├── footerBg.jpg
│   │   │   ├── index.js
│   │   │   ├── location.jpg
│   │   │   ├── locationRounded.png
│   │   │   ├── locationRounded-removebg.png
│   │   │   ├── logoCircle2.png
│   │   │   ├── logoCircle.png
│   │   │   ├── logoFull.jpg
│   │   │   ├── logoFull-modified.png
│   │   │   ├── logo.jpg
│   │   │   ├── preview
│   │   │   │   ├── Desktop
│   │   │   │   │   ├── Create
│   │   │   │   │   │   └── CreateParcel3.png
│   │   │   │   │   └── Home
│   │   │   │   │       ├── Hompage1.png
│   │   │   │   │       └── updatePage2.png
│   │   │   │   ├── Laptop
│   │   │   │   │   ├── Create
│   │   │   │   │   │   └── CreateParcel3.png
│   │   │   │   │   ├── Home
│   │   │   │   │   │   └── laptopPreview1.png
│   │   │   │   │   └── Update
│   │   │   │   │       └── updatePage2.png
│   │   │   │   └── Mobile
│   │   │   │       ├── CreateParcel3.png
│   │   │   │       ├── mobilePreview1.png
│   │   │   │       └── updatePage2.png
│   │   │   └── profile.jpg
│   │   ├── react.svg
│   │   └── screenshots
│   │       ├── fullpage.png
│   │       ├── mobileviewFullpage.png
│   │       ├── preview
│   │       │   ├── desktopPreview.pdf
│   │       │   ├── desktopPreview.png
│   │       │   ├── laptopPreview.pdf
│   │       │   ├── laptopPreview.png
│   │       │   ├── mobilePreview.pdf
│   │       │   └── mobilePreview.png
│   │       ├── ss-10-18-55-AM_28-06-25.png
│   │       ├── ss-10-19-51-AM_28-06-25.png
│   │       ├── ss-10-24-03-AM_28-06-25.png
│   │       ├── ss-10-24-25-AM_28-06-25.png
│   │       ├── ss-10-24-49-AM_28-06-25.png
│   │       ├── ss-10-25-39-AM_28-06-25.png
│   │       ├── ss-10-27-08-AM_28-06-25.png
│   │       ├── ss-10-38-51-AM_28-06-25.png
│   │       ├── ss-10-39-17-AM_28-06-25.png
│   │       ├── ss-10-39-34-AM_28-06-25.png
│   │       ├── ss-10-40-55-AM_28-06-25.png
│   │       ├── ss-10-41-19-AM_28-06-25.png
│   │       ├── ss-10-46-00-AM_28-06-25.png
│   │       ├── ss-10-46-22-AM_28-06-25.png
│   │       ├── ss-10-46-48-AM_28-06-25.png
│   │       ├── ss-10-47-08-AM_28-06-25.png
│   │       ├── ss-10-47-26-AM_28-06-25.png
│   │       ├── ss-10-47-44-AM_28-06-25.png
│   │       ├── ss-11-26-15-AM_28-06-25.png
│   │       ├── ss-11-26-35-AM_28-06-25.png
│   │       ├── ss-11-26-58-AM_28-06-25.png
│   │       ├── ss-11-27-22-AM_28-06-25.png
│   │       └── ss-11-27-45-AM_28-06-25.png
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── GeminiChatBox.jsx
│   │   ├── useAuth.jsx
│   │   ├── useHelmet.jsx
│   │   └── useParcelForm.js
│   ├── index.css
│   ├── layout
│   │   ├── AuthLayout.jsx
│   │   └── RootLayout.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── components
│   │   │   │   ├── AuthSidebar.jsx
│   │   │   │   ├── constant.js
│   │   │   │   ├── SideBarCard.jsx
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   ├── SignUpPasswordInputs.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── index.js
│   │   │   ├── pages
│   │   │   │   ├── ForgotPass.jsx
│   │   │   │   ├── Signin.jsx
│   │   │   │   └── SignUp.jsx
│   │   │   └── refractorAuthPrompt.md
│   │   ├── Authentication
│   │   │   ├── Login
│   │   │   │   └── Login.jsx
│   │   │   └── Register
│   │   │       └── Register.jsx
│   │   ├── gontobboZones
│   │   │   ├── components
│   │   │   │   ├── BangladeshMap.jsx
│   │   │   │   ├── GontobboInfoPopup.jsx
│   │   │   │   ├── GontobboSearchBox.jsx
│   │   │   │   └── ZoneCard.jsx
│   │   │   ├── gontobbo.constants.js
│   │   │   └── GontobboZones.jsx
│   │   ├── Home
│   │   │   ├── Banner
│   │   │   │   ├── banner.constant.js
│   │   │   │   └── Banner.jsx
│   │   │   ├── Benefits
│   │   │   │   ├── BenefitCard.jsx
│   │   │   │   ├── benefit.constant.js
│   │   │   │   └── Benefits.jsx
│   │   │   ├── ClientLogosMarquee
│   │   │   │   └── ClientLogosMarquee.jsx
│   │   │   ├── Home
│   │   │   │   ├── BeMerchant
│   │   │   │   │   └── BeMerchant.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   └── import.jsx
│   │   │   └── Services
│   │   │       ├── ServiceCard.jsx
│   │   │       ├── ServiceIntro.jsx
│   │   │       ├── services.constant.js
│   │   │       └── Services.jsx
│   │   ├── rebuild-sendparcel.sh
│   │   ├── SendParcel
│   │   │   ├── components
│   │   │   │   ├── FormInput.jsx
│   │   │   │   ├── FormSelect.jsx
│   │   │   │   ├── FormTextarea.jsx
│   │   │   │   ├── ParcelInfo.jsx
│   │   │   │   ├── RecieverInfo.jsx
│   │   │   │   ├── SenderInfo.jsx
│   │   │   │   ├── SendParcelForm.jsx
│   │   │   │   └── SendParcleFormRadioGroup.jsx
│   │   │   ├── SendParcel.jsx
│   │   │   └── sendpercel.constant.js
│   │   └── shared
│   │       ├── BrandLogo
│   │       │   └── BrandLogo.jsx
│   │       ├── Footer
│   │       │   └── Footer.jsx
│   │       ├── Navbar
│   │       │   ├── navbar.constant.jsx
│   │       │   ├── NavbarEnd.jsx
│   │       │   ├── Navbar.jsx
│   │       │   ├── NavbarMiddle.jsx
│   │       │   ├── NavbarStart.jsx
│   │       │   └── TopNav.jsx
│   │       └── Spinner.jsx
│   ├── router
│   │   ├── authRouter.jsx
│   │   └── router.jsx
│   └── utils
│       ├── costCalculator.js
│       └── formValidations.js
├── structure.md
└── vite.config.js

47 directories, 152 files
```

## 📁 Target Module Tree (Auth)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/Auth
├── AuthLayout.jsx
├── components
│   ├── AuthSidebar.jsx
│   ├── constant.js
│   ├── SideBarCard.jsx
│   ├── SigninForm.jsx
│   ├── Signout.jsx
│   ├── SignUpForm.jsx
│   ├── SignUpPasswordInputs.jsx
│   └── SocialLogin.jsx
├── index.js
├── pages
│   ├── ForgotPass.jsx
│   ├── Signin.jsx
│   └── SignUp.jsx
└── refractorAuthPrompt.md

3 directories, 14 files
```

## 📄 Module Files & Contents

### `AuthLayout.jsx`
```javascript
import { Outlet } from "react-router";
import AuthSidebar from "./components/AuthSidebar";
import Navbar from "../shared/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="mx-auto max-w-[1800px] p-4">
      <Navbar />
      <div className="xl:grid grid-cols-12 gap-10 order">
        <div className="col-span-9">
          <Outlet />
        </div>
        <div className="max-xl:hidden col-span-3 order border-red-500 mt-10 sticky top-[7rem] max-h-[calc(100vh-9rem)] overflow-y-auto">
          <AuthSidebar />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
```

### `components/AuthSidebar.jsx`
```javascript
import { sidebarDatas } from "./constant";
import SideBarCard from "./SideBarCard";

const AuthSidebar = () => {
  return (
    <div className="bg-base-200 p-3 flex flex-col gap-8 rounded-md mb-5">
      <h2 className="text-xl font-bold text-purple-900 text-center">
        Why Sign In to Gontobbo?
      </h2>

      {sidebarDatas.map((sidebar, idx) => (
        <SideBarCard sideBar={sidebar} key={idx} />
      ))}
    </div>
  );
};

export default AuthSidebar;
```

### `components/constant.js`
```javascript
export const sidebarDatas = [
  {
    title: "🎯 Smart Job Matches",
    description:
      "Get personalized job recommendations based on your skills, interests, and career goals — no more random listings.",
  },
  {
    title: "📊 Track Your Applications",
    description:
      "Stay on top of every opportunity. Monitor your application status from applied to hired, all in one dashboard.",
  },
  {
    title: "⚡ Apply in One Click",
    description:
      "Save time with your stored profile and resume — apply to jobs instantly with just one click.",
  },
  {
    title: "🌟 Build & Optimize Your Profile",
    description:
      "Create a comprehensive professional profile that highlights your strengths and attracts top employers.",
  },
  {
    title: "🔔 Get Job Alerts",
    description:
      "Receive instant notifications for new job postings that match your criteria, so you never miss an opportunity.",
  },
  {
    title: "💬 Connect with Employers",
    description:
      "Directly communicate with recruiters and hiring managers through our secure messaging system.",
  },
  {
    title: "📚 Access Career Resources",
    description:
      "Explore articles, guides, and tips to refine your resume, excel in interviews, and advance your career.",
  },
  {
    title: "💼 Discover Company Insights",
    description:
      "Research potential employers, read reviews, and get insights into company culture before you apply.",
  },
  {
    title: "📈 Get Salary Insights",
    description:
      "Understand salary benchmarks for your target roles and industries, empowering you to negotiate confidently.",
  },
  {
    title: "🎓 Upskill Your Career",
    description:
      "Access curated learning paths and resources to develop new skills and stay competitive in the job market.",
  },
];
```

### `components/SideBarCard.jsx`
```javascript
const SideBarCard = ({ sideBar }) => {
  const { title, description } = sideBar;
  return (
    <div className="card shadow-sm bg-gradient-to-l from-sky-200 via-cyan-50 to-purple-100 shadow-sm bg-base-100">
      <div className="card-body">
        <h3 className="card-title text-lg text-primary">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SideBarCard;
```

### `components/SigninForm.jsx`
```javascript
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";

const SigninForm = () => {
  return (
    <form
      className="flex-1 bg-base-200 border-base-300 border rounded-box   w-fit   p-4
      max-sm:max-w-[300px]      "
    >
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign In Now
      </h2>
      <fieldset className="p-4 fieldset">
        <input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input input-info rounded-full max-sm:w-"
        />
        <input
          type="email"
          label="Password"
          placeholder="Write your password"
          className="mb- w-full sm:min-w-[400px] rounded-full input input-info"
        />
        <p className="mb-3 text-gray-500">
          <Link to="/auth/forgot-pass">Forgot your password?</Link>
        </p>

        <button className="btn btn-block btn-info rounded-full" variant="info">
          Sign In
        </button>
        <p className="mt-3">
          Not a member? <Link to="/auth/signup">Sign Up</Link>
        </p>
        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SigninForm;
```

### `components/Signout.jsx`
```javascript
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    await signoutUser();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Sign out Success!",
      text: "You have successfully signed out",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div onClick={handleSignout}>
      {children || <button className="btn">Sign Out</button>}
    </div>
  );
};

export default Signout;
```

### `components/SignUpForm.jsx`
```javascript
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SignUpPasswordInputs from "./SignUpPasswordInputs";
import SocialLogin from "./SocialLogin";

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
        <label htmlFor="photoUrl" className="label text-base mt-2 mb-1">
          Name
        </label>
        <input
          label="Name"
          placeholder="Write your name"
          className="mb-2  w-full sm:min-w-[400px] input input-info rounded-full"
          name="name"
          required
          minLength={3}
        />
        <label htmlFor="photoUrl" className="label text-base mt-2 mb-1">
          Email
        </label>
        <input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input input-info rounded-full"
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
        <label htmlFor="photoUrl" className="label text-base mt-2 mb-1">
          Photo Url
        </label>
        <input
          type="url"
          label="Photo Url"
          placeholder="Give your photo url"
          className=" w-full sm:min-w-[400px] rounded-full input input-info"
          name="photoUrl"
        />
        <button
          type="submit"
          className="btn btn-block btn-info rounded-full mt-3"
          variant="info"
        >
          Sign Up
        </button>
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
```

### `components/SignUpPasswordInputs.jsx`
```javascript
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
```

### `components/SocialLogin.jsx`
```javascript
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Facebook, Github } from "lucide-react";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const user = await googleSignIn();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sign in Success!",
      text: "You have successfully signed in",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div>
      <div className="divider mt-5">Or continue with</div>
      <div className="flex justify-center gap-3 *:btn-accen *:rounded-full gap-5">
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
```

### `index.js`
```javascript
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import SocialLogin from "./components/SocialLogin";
import AuthSidebar from "./components/AuthSidebar";
import SigninForm from "./components/SigninForm";
import AuthLayoout from "./AuthLayout";
export { Signin, SignUp, SocialLogin, AuthSidebar, SigninForm, AuthLayoout };
```

### `pages/ForgotPass.jsx`
```javascript
import { motion } from "motion/react";
import { Link } from "react-router";
import { Input } from "../../shared/ui";
import { useMediaQuery } from "react-responsive";
import { animate } from "motion";
import { leftToRight, rightToLeft } from "../../../animation/motion";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 gap-15 max-lg:flex-col-reverse">
      <motion.div className="flex-1 max-w-[400px]" {...leftToRight}>
        <img
          className="rounded-lg shadow-lg"
          src="https://images.deepai.org/art-image/3a37098281184deeb6636ac5c7b47257/a-calm-and-hopeful-scene-of-a-person-sitting-at-a-des.jpg"
        />
      </motion.div>
      <motion.div
        className="flex justify-center  rounded py-7 px-2"
        {...rightToLeft}
      >
        <form className="flex-1 card w-full max-w-sm h-fit hadow-sm bg-gray-50 sm:p-8 max-sm:p-4 ">
          <h2 className=" text-2xl max-sm:text-xl font-semibold mb-4 text-center">
            Forgot Password?
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          {/* Email Input Field */}
          <Input
            label="Email"
            // In a real component, these would be connected to state:
            // value={''}
            // onChange={() => {}}
            // error={''}
            required
          />

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary"
              // In a real component, this would be disabled based on loading state:
              // disabled={false}
            >
              Send Reset Link
            </button>
          </div>

          {/* Back to Sign In Link */}
          <p className="text-center mt-6 text-sm">
            Remember your password?{" "}
            {/* Use Link component if you are using React Router */}
            {/* <Link to="/signin" className="link link-primary">Sign In</Link> */}
            <Link to="/auth/signin" className="link link-primary">
              Sign In
            </Link>
            {/* Fallback if not using Link */}
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
```

### `pages/Signin.jsx`
```javascript
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
      <div className="flex  flex-col-reverse lg:flex-row items-center justify-around *:flex-1 gap-7  mt-5">
        <motion.div
          className="lg:max-w-[480px]  order bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98"
          {...leftToRight}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>
        <motion.div className="max-w-[480px]" {...rightToLeft}>
          <SigninForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;
```

### `pages/SignUp.jsx`
```javascript
import { authLottie } from "../../../animation";
import LottieAnimation from "../../../animation/LottieAnimation";
import SignUpForm from "../components/SignUpForm";
import UseHelmet from "../../../hooks/useHelmet";
import { leftToRight, rightToLeft } from "../../../animation/motion";
import { motion } from "motion/react";

const SignUp = () => {
  return (
    <div className="min-h-[80vh] mt-10 bg-gray-100 py-10 rounded-lg shadow">
      <UseHelmet title="Sign up" />
      <div className="max-lg:max-w-[490px] mx-auto">
        <h2
          className="text-center text-xl sm:text-3xl font-semibold font-kaushan 
          "
        >
          Gontobbo connects talent with opportunity.
        </h2>
        <p className="text-center text-gray-500 ext-sm mb-10 mt-2">
          Sign up to access thousands of jobs, connect with employers, and take
          control of your career.
        </p>
      </div>
      <div className="flex  flex-col-reverse lg:flex-row items-center justify-around *:flex-1 gap-7  mt-5">
        <motion.div
          className="lg:max-w-[480px]  order bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98"
          {...leftToRight}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>
        <motion.div className="max-w-[480px]" {...rightToLeft}>
          <SignUpForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
```

### `refractorAuthPrompt.md`
```md

```
