You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/SendParcel
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility
- ✅ 100% programmatical
- ✅ give in a way so I can view what are you modifying what should change to what
- ✅ first give in copy code block
- ✅ if then i consent then you will give me the nameMathced.sh file also give the command to create the file

👉 Output the refactored code to a new folder: `gontobboZones_refactored`

Also return a `.sh` script that will:

- it will give when i consent
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved gontobboZones version`

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
│   │   │   ├── SendParcel.jsx
│   │   │   └── sendpercel.constant.js
│   │   ├── setup_gontobboZones_refactor.sh
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

38 directories, 98 files
```

## 📁 Target Module Tree (SendParcel)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/SendParcel
├── components
│   ├── FormInput.jsx
│   ├── FormSelect.jsx
│   ├── FormTextarea.jsx
│   ├── ParcelInfo.jsx
│   ├── RecieverInfo.jsx
│   ├── SenderInfo.jsx
│   ├── SendParcelForm.jsx
│   └── SendParcleFormRadioGroup.jsx
├── SendParcel.jsx
└── sendpercel.constant.js

2 directories, 10 files
```

## 📄 Module Files & Contents

### `components/FormInput.jsx`

```javascript
import { motion } from "motion/react";

const FormInput = ({
  id,
  label,
  type = "text",
  register,
  validation,
  error,
  disabled = false,
  placeholder = " ",
}) => (
  <div>
    <label htmlFor={id} className="text-gray-400">
      {label}
    </label>
    <input
      type={type}
      id={id}
      disabled={disabled}
      {...register(id, validation)}
      placeholder={placeholder}
      className={`peer w-full rounded-lg border px-4 py-3 placeholder-transparent
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
        transition duration-300
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        ${error ? "border-red-500" : "border-gray-300"}`}
      autoComplete="off"
    />
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className="mt-1 text-sm text-red-600"
      >
        {error.message}
      </motion.p>
    )}
  </div>
);

export default FormInput;
```

### `components/FormSelect.jsx`

```javascript
import { AnimatePresence, motion } from "motion/react";

const FormSelect = ({
  id,
  label,
  register,
  validation,
  error,
  options = [],
  disabled = false,
  defaultValue = "",
  placeholder = "Select",
}) => (
  <div className="relative">
    <select
      id={id}
      {...register(id, validation)}
      disabled={disabled}
      defaultValue={defaultValue}
      className={`peer w-full rounded-lg border px-4 py-3 text-gray-700
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
        transition duration-300
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        ${error ? "border-red-500" : "border-gray-300"}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value ?? opt} value={opt.value ?? opt}>
          {opt.label ?? opt}
        </option>
      ))}
    </select>
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="mt-1 text-sm text-red-600"
        >
          {error.message}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

export default FormSelect;
```

### `components/FormTextarea.jsx`

```javascript
import { AnimatePresence, motion } from "motion/react";

const FormTextarea = ({
  id,
  label,
  register,
  validation,
  error,
  rows = 3,
  disabled = false,
}) => (
  <div className="relative">
    <textarea
      id={id}
      rows={rows}
      disabled={disabled}
      {...register(id, validation)}
      placeholder=" "
      className={`peer w-full rounded-lg border px-4 py-3 placeholder-transparent resize-none
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
        transition duration-300
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        ${error ? "border-red-500" : "border-gray-300"}`}
    />
    <label
      htmlFor={id}
      className={`absolute left-4 top-0 text-gray-500 text-sm cursor-text
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-600
        transition-all duration-300`}
    >
      {label}
    </label>
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="mt-1 text-sm text-red-600"
        >
          {error.message}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

export default FormTextarea;
```

### `components/ParcelInfo.jsx`

```javascript
import { formValidations } from "../../../utils/formValidations";
import FormInput from "./FormInput";
import { FormRadioGroup } from "./SendParcleFormRadioGroup";

const ParcelInfo = ({ register, errors, parcelType }) => {
  return (
    <section className="space-y-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Parcel Info</h2>
      <FormInput
        id="title"
        label="Parcel Name"
        register={register}
        validation={formValidations.parcel.title}
        error={errors.title}
      />
      <FormRadioGroup
        id="type"
        label="Type"
        register={register}
        validation={formValidations.parcel.type}
        error={errors.type}
        options={[
          { value: "document", label: "Document" },
          { value: "non-document", label: "Non-Document" },
        ]}
      />
      <FormInput
        id="weight"
        label="Weight (kg)"
        type="number"
        register={register}
        validation={formValidations.parcel.weight(parcelType)}
        error={errors.weight}
        disabled={parcelType !== "non-document"}
      />
    </section>
  );
};

export default ParcelInfo;
```

### `components/RecieverInfo.jsx`

```javascript
import { formValidations } from "../../../utils/formValidations";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

const RecieverInfo = ({
  register,
  errors,
  uniqueRegions,
  getDistrictsByRegion,
  receiverRegion,
}) => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Receiver Info</h2>
      <FormInput
        id="receiver_name"
        label="Name"
        register={register}
        validation={formValidations.person.name}
        error={errors.receiver_name}
      />
      <FormInput
        id="receiver_contact"
        label="Contact"
        type="tel"
        register={register}
        validation={formValidations.person.contact}
        error={errors.receiver_contact}
      />
      <FormSelect
        id="receiver_region"
        label="Region"
        register={register}
        validation={formValidations.location.region}
        error={errors.receiver_region}
        options={uniqueRegions}
        defaultValue=""
        placeholder="Select Region"
      />
      <FormSelect
        id="receiver_center"
        label="Service Center"
        register={register}
        validation={formValidations.location.center}
        error={errors.receiver_center}
        options={getDistrictsByRegion(receiverRegion)}
        defaultValue=""
        placeholder="Select Service Center"
        disabled={!receiverRegion}
      />
      <FormInput
        id="receiver_address"
        label="Address"
        register={register}
        validation={formValidations.person.address}
        error={errors.receiver_address}
      />
      <FormTextarea
        id="delivery_instruction"
        label="Delivery Instruction"
        register={register}
        validation={formValidations.instruction.delivery}
        error={errors.delivery_instruction}
      />
    </section>
  );
};

export default RecieverInfo;
```

### `components/SenderInfo.jsx`

```javascript
import { formValidations } from "../../../utils/formValidations";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

const SenderInfo = ({
  register,
  errors,
  uniqueRegions,
  getDistrictsByRegion,
  senderRegion,
}) => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Sender Info</h2>
      <FormInput
        id="sender_name"
        label="Name"
        register={register}
        validation={formValidations.person.name}
        error={errors.sender_name}
      />
      <FormInput
        id="sender_contact"
        label="Contact"
        type="tel"
        register={register}
        validation={formValidations.person.contact}
        error={errors.sender_contact}
      />
      <FormSelect
        id="sender_region"
        label="Region"
        register={register}
        validation={formValidations.location.region}
        error={errors.sender_region}
        options={uniqueRegions}
        defaultValue=""
        placeholder="Select Region"
      />
      <FormSelect
        id="sender_center"
        label="Service Center"
        register={register}
        validation={formValidations.location.center}
        error={errors.sender_center}
        options={getDistrictsByRegion(senderRegion)}
        defaultValue=""
        placeholder="Select Service Center"
        disabled={!senderRegion}
      />
      <FormInput
        id="sender_address"
        label="Address"
        register={register}
        validation={formValidations.person.address}
        error={errors.sender_address}
      />
      <FormTextarea
        id="pickup_instruction"
        label="Pickup Instruction"
        register={register}
        validation={formValidations.instruction.pickup}
        error={errors.pickup_instruction}
      />
    </section>
  );
};

export default SenderInfo;
```

### `components/SendParcelForm.jsx`

```javascript
import ParcelInfo from "./ParcelInfo";
import SenderInfo from "./SenderInfo";
import RecieverInfo from "./RecieverInfo";

const SendParcelForm = ({
  onSubmit,
  serviceCenters,
  register,
  handleSubmit,
  watch,
  reset,
  errors,
}) => {
  const parcelType = watch("type");
  const senderRegion = watch("sender_region");
  const receiverRegion = watch("receiver_region");

  const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];
  const getDistrictsByRegion = (region) =>
    serviceCenters.filter((w) => w.region === region).map((w) => w.district);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-12">
      {/* 📦 Parcel Info */}
      <ParcelInfo register={register} errors={errors} parcelType={parcelType} />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 👤 Sender Info */}
        <SenderInfo
          register={register}
          errors={errors}
          uniqueRegions={uniqueRegions}
          getDistrictsByRegion={getDistrictsByRegion}
          senderRegion={senderRegion}
        />
        {/* 👤 Receiver Info */}
        <RecieverInfo
          register={register}
          errors={errors}
          uniqueRegions={uniqueRegions}
          getDistrictsByRegion={getDistrictsByRegion}
          receiverRegion={receiverRegion}
        />
      </section>
      {/* ✅ Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-12 py-4 text-xl font-semibold text-white
          shadow-lg transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SendParcelForm;
```

### `components/SendParcleFormRadioGroup.jsx`

```javascript
import { AnimatePresence, motion } from "motion/react";

export const FormRadioGroup = ({
  id,
  label,
  register,
  validation,
  error,
  options,
}) => (
  <fieldset className="space-y-2">
    <legend className="text-gray-700 font-medium">{label}</legend>
    <div className="flex gap-6">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <input
            type="radio"
            value={opt.value}
            {...register(id, validation)}
            className="accent-indigo-600 w-5 h-5"
          />
          <span className="capitalize text-gray-800">{opt.label}</span>
        </label>
      ))}
    </div>
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -3 }}
          className="text-sm text-red-600"
        >
          {error.message}
        </motion.p>
      )}
    </AnimatePresence>
  </fieldset>
);
```

### `SendParcel.jsx`

```javascript
import SendParcelForm from "./components/SendParcelForm";
import { useParcelForm } from "../../hooks/useParcelForm";
import { gontobboZones } from "../gontobboZones/gontobbo.constants";

const SendParcel = () => {
  const { register, handleSubmit, watch, reset, errors, onSubmit } =
    useParcelForm();

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-tr from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200">
      <SendParcelForm
        serviceCenters={gontobboZones}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        watch={watch}
        reset={reset}
        errors={errors}
      />
    </div>
  );
};

export default SendParcel;
```

### `sendpercel.constant.js`

```javascript
export const testData = {
  title: "Sample Parcel",
  type: "non-document",
  weight: 2,
  sender_name: "Alice",
  sender_contact: "01989763779",
  sender_region: "Dhaka",
  sender_center: "Dhaka",
  sender_address: "123, Dhanmondi",
  pickup_instruction: "Call before pickup",
  receiver_name: "Bob",
  receiver_contact: "01540325698",
  receiver_region: "Chattogram",
  receiver_center: "Bandarban",
  receiver_address: "456, Pahartali",
  delivery_instruction: "Leave at gate",
};
```
