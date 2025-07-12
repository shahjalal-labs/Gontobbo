You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/hooks
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `hooks_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved hooks version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client
├── bun.lock
├── demo.mp4
├── eslint.config.js
├── frontend.json
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
│   ├── console
│   │   ├── error.json
│   │   └── log.json
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
│   │   └── useParcelForm
│   │       ├── index.js
│   │       ├── parcelSubmitHandler.js
│   │       ├── renderParcelSummaryHtml.js
│   │       ├── useParcelFormCore.js
│   │       └── useParcelKeyShortcut.js
│   ├── index.css
│   ├── layout
│   │   ├── AuthLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── RootLayout.jsx
│   ├── loggerClient.js
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
│   │   ├── dashboard
│   │   ├── gontobboZones
│   │   │   ├── components
│   │   │   │   ├── BangladeshMap.jsx
│   │   │   │   ├── GontobboInfoPopup.jsx
│   │   │   │   ├── GontobboSearchBox.jsx
│   │   │   │   └── ZoneCard.jsx
│   │   │   ├── gontobbo.constants.js
│   │   │   ├── GontobboZones.jsx
│   │   │   └── refractorGontobboZonesPrompt.md
│   │   ├── gontobboZones_refactored
│   │   │   ├── components
│   │   │   │   ├── BangladeshMap.jsx
│   │   │   │   ├── GontobboSearchBox.jsx
│   │   │   │   └── InfoPopup.jsx
│   │   │   ├── constants
│   │   │   │   └── zones.js
│   │   │   ├── GontobboZones.jsx
│   │   │   ├── hooks
│   │   │   │   └── useZoneFilter.js
│   │   │   └── utils
│   │   │       └── string.js
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
│   │   │   ├── refractorSendParcelPrompt.md
│   │   │   ├── SendParcel.jsx
│   │   │   ├── sendpercel.constant.js
│   │   │   └── setup_sendparcel_refactor.sh
│   │   ├── SendParcel_refactored
│   │   │   ├── components
│   │   │   │   ├── FormInput.jsx
│   │   │   │   ├── FormRadioGroup.jsx
│   │   │   │   ├── FormSelect.jsx
│   │   │   │   ├── FormTextarea.jsx
│   │   │   │   ├── ParcelInfo.jsx
│   │   │   │   ├── ReceiverInfo.jsx
│   │   │   │   ├── SenderInfo.jsx
│   │   │   │   └── SendParcelForm.jsx
│   │   │   ├── constants
│   │   │   │   └── sendParcel.testData.js
│   │   │   ├── hooks
│   │   │   │   └── useSendParcel.js
│   │   │   ├── SendParcel.jsx
│   │   │   ├── services
│   │   │   │   └── parcelService.js
│   │   │   └── utils
│   │   │       └── regionUtils.js
│   │   ├── setup_gontobboZones_refactor.sh
│   │   ├── setup_sendparcel_refactor.sh
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
├── vite.config.js
└── vite.logger.plugin.js

47 directories, 124 files
```

## 📁 Target Module Tree (hooks)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/hooks
├── GeminiChatBox.jsx
├── useAuth.jsx
├── useHelmet.jsx
└── useParcelForm
    ├── index.js
    ├── parcelSubmitHandler.js
    ├── renderParcelSummaryHtml.js
    ├── useParcelFormCore.js
    └── useParcelKeyShortcut.js

2 directories, 8 files
```

## 📄 Module Files & Contents

### `GeminiChatBox.jsx`
```javascript
import { useState } from "react";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log(GEMINI_API_KEY, "GeminiChatBox.jsx", 4);

const GeminiChatBox = ({
  title = "💬 Ask Gemini",
  placeholder = "Ask anything...",
  buttonText = "Ask",
  className = "",
}) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        },
      );

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setResponse(reply || "No response received.");
    } catch (err) {
      console.error("Gemini API Error:", err);
      setResponse("❌ Failed to get response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full max-w-2xl mx-auto p-6 rounded-xl shadow-md bg-white ${className}`}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <textarea
        className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={4}
        placeholder={placeholder}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
      >
        {loading ? "Loading..." : buttonText}
      </button>

      {response && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md whitespace-pre-wrap border border-gray-200">
          <strong className="text-gray-700">Gemini Response:</strong>
          <p className="mt-2 text-gray-800">{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiChatBox;
```

### `useAuth.jsx`
```javascript
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuth;
```

### `useHelmet.jsx`
```javascript
import { Helmet } from "react-helmet-async";

const UseHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || Gontobbo</title>
    </Helmet>
  );
};

export default UseHelmet;
```

### `useParcelForm/index.js`
```javascript
import { useParcelFormCore } from "./useParcelFormCore";
import { useParcelKeyShortcut } from "./useParcelKeyShortcut";
import { handleParcelSubmit } from "./parcelSubmitHandler";
import { defaultTestData } from "../../pages/SendParcel_refactored/constants/sendParcel.testData";
import useAuth from "../useAuth";

export function useParcelForm() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useParcelFormCore();

  useParcelKeyShortcut(reset, defaultTestData);

  const onSubmit = (data) => handleParcelSubmit(data, reset, user);

  return { register, handleSubmit, watch, reset, errors, onSubmit };
}
```

### `useParcelForm/parcelSubmitHandler.js`
```javascript
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  calculateCostWithBreakdown,
  generateTrackingId,
} from "../../utils/costCalculator";
import { renderParcelSummaryHtml } from "./renderParcelSummaryHtml";

const MySwal = withReactContent(Swal);

export const handleParcelSubmit = async (data, reset, user) => {
  const cost = calculateCostWithBreakdown(data);
  const trackingId = generateTrackingId();

  const confirm = await MySwal.fire({
    title: "📦 Confirm Parcel Details",
    html: renderParcelSummaryHtml(data, trackingId, cost),
    showCancelButton: true,
    confirmButtonText: "Confirm & Submit",
  });

  if (confirm.isConfirmed) {
    reset();

    const newParcel = {
      ...data,
      cost: cost.total,
      created_by: user?.email,
      payment_status: "unpaid",
      delivery_status: "not_collected",
      creation_date: new Date().toISOString(),
      trackingId,
    };
    console.log(newParcel, "new parcel parcelSubmitHandler.js", 26);
  }
};
```

### `useParcelForm/renderParcelSummaryHtml.js`
```javascript
export function renderParcelSummaryHtml(data, trackingId, cost) {
  const { baseCost, weightCost, perKgRate, weight, isNonDocument, total } =
    cost;

  return `
    <div class="text-left text-sm leading-relaxed space-y-1">
      <strong>Parcel:</strong> ${data.title} (${data.type})<br/>
      <strong>Sender:</strong> ${data.sender_name} (${data.sender_contact})<br/>
      <strong>Receiver:</strong> ${data.receiver_name} (${data.receiver_contact})<br/>
      <strong>Tracking ID:</strong> ${trackingId}<br/>
      <hr class="my-2"/>
      <strong>📊 Cost Breakdown:</strong><br/>
      🔹 Base Cost: ৳${baseCost}<br/>
      ${
        isNonDocument
          ? `🔹 Weight Cost: ${weight}kg × ৳${perKgRate} = ৳${weightCost}<br/>`
          : `🔹 Weight Cost: N/A (Document type)<br/>`
      }
      <hr class="my-2"/>
      <strong>💰 Total Cost: ৳${total}</strong>
    </div>
  `;
}
```

### `useParcelForm/useParcelFormCore.js`
```javascript
import { useForm } from "react-hook-form";

export const useParcelFormCore = () => useForm({ mode: "onBlur" });
```

### `useParcelForm/useParcelKeyShortcut.js`
```javascript
import { useEffect } from "react";

export const useParcelKeyShortcut = (reset, testData) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        reset(testData);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [reset, testData]);
};
```
