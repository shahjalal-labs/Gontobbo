import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

// --- Reusable Text Input Component ---
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
  <div className="relative">
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
    <label
      htmlFor={id}
      className={`absolute left-4 top-3 text-gray-500 text-sm cursor-text
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

// --- Reusable Select Component ---
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

// --- Reusable Radio Group ---
const FormRadioGroup = ({
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

// --- Reusable Textarea ---
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
      className={`absolute left-4 top-3 text-gray-500 text-sm cursor-text
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

// --- Main Form Component ---
const SendParcelForm = ({ onSubmit, serviceCenters }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];
  const getDistrictsByRegion = (region) =>
    serviceCenters.filter((w) => w.region === region).map((w) => w.district);

  const parcelType = watch("type");
  const senderRegion = watch("sender_region");
  const receiverRegion = watch("receiver_region");

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-tr from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-12">
        {/* Heading */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            📦 Send a Parcel
          </h1>
          <p className="mt-2 text-gray-600 text-lg">
            Fill in the details below
          </p>
        </header>

        {/* Parcel Info */}
        <section className="space-y-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Parcel Info
          </h2>
          <FormInput
            id="title"
            label="Parcel Name"
            register={register}
            validation={{
              required: { value: true, message: "Parcel name is required" },
            }}
            error={errors.title}
          />
          <FormRadioGroup
            id="type"
            label="Type"
            register={register}
            validation={{
              required: { value: true, message: "Parcel type is required" },
            }}
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
            validation={{
              validate: (val) => {
                if (parcelType === "non-document" && (!val || val <= 0)) {
                  return "Weight must be greater than 0 for non-document parcels";
                }
                return true;
              },
            }}
            error={errors.weight}
            disabled={parcelType !== "non-document"}
          />
        </section>

        {/* Sender & Receiver Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sender Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Sender Info
            </h2>
            <FormInput
              id="sender_name"
              label="Name"
              register={register}
              validation={{
                required: { value: true, message: "Sender name is required" },
              }}
              error={errors.sender_name}
            />
            <FormInput
              id="sender_contact"
              label="Contact"
              type="tel"
              register={register}
              validation={{
                required: { value: true, message: "Contact is required" },
              }}
              error={errors.sender_contact}
            />
            <FormSelect
              id="sender_region"
              label="Region"
              register={register}
              validation={{
                required: { value: true, message: "Region is required" },
              }}
              error={errors.sender_region}
              options={uniqueRegions}
              defaultValue=""
              placeholder="Select Region"
            />
            <FormSelect
              id="sender_center"
              label="Service Center"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: "Service center is required",
                },
              }}
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
              validation={{
                required: { value: true, message: "Address is required" },
              }}
              error={errors.sender_address}
            />
            <FormTextarea
              id="pickup_instruction"
              label="Pickup Instruction"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: "Pickup instruction is required",
                },
              }}
              error={errors.pickup_instruction}
            />
          </div>

          {/* Receiver Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Receiver Info
            </h2>
            <FormInput
              id="receiver_name"
              label="Name"
              register={register}
              validation={{
                required: { value: true, message: "Receiver name is required" },
              }}
              error={errors.receiver_name}
            />
            <FormInput
              id="receiver_contact"
              label="Contact"
              type="tel"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: "Receiver contact is required",
                },
              }}
              error={errors.receiver_contact}
            />
            <FormSelect
              id="receiver_region"
              label="Region"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: "Receiver region is required",
                },
              }}
              error={errors.receiver_region}
              options={uniqueRegions}
              defaultValue=""
              placeholder="Select Region"
            />
            <FormSelect
              id="receiver_center"
              label="Service Center"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: "Receiver center is required",
                },
              }}
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
              validation={{
                required: {
                  value: true,
                  message: "Receiver address is required",
                },
              }}
              error={errors.receiver_address}
            />
            <FormTextarea
              id="delivery_instruction"
              label="Delivery Instruction"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: "Delivery instruction is required",
                },
              }}
              error={errors.delivery_instruction}
            />
          </div>
        </section>

        {/* Submit Button */}
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
    </div>
  );
};

export default SendParcelForm;
