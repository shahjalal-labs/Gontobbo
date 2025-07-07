import { AnimatePresence } from "motion/react";

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

export default FormInput;
