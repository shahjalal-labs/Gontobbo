import { AnimatePresence } from "motion/react";

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

export default FormSelect;
