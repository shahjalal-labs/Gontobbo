import { motion, AnimatePresence } from "framer-motion";
import SendParcelForm from "./components/SendParcelForm";
import { gontobboZones } from "../gontobboZones/gontobbo.constants";

gontobboZones;
// --- Reusable Text Input Component ---

// --- Reusable Select Component ---
export const FormSelect = ({
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

// --- Reusable Textarea ---
export const FormTextarea = ({
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
//
const SendParcel = () => {
  return (
    <div>
      <SendParcelForm serviceCenters={gontobboZones} />;
    </div>
  );
};

export default SendParcel;
