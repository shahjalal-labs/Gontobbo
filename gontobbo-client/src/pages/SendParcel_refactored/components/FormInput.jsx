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
