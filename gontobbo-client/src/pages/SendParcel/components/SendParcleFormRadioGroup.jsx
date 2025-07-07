import { AnimatePresence } from "motion/react";

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
