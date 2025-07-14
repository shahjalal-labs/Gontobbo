import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineIdcard,
} from "react-icons/ai";
import {
  MdOutlineLocationCity,
  MdDirectionsBike,
  MdNotes,
} from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

// Validation schema
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  nid: z.string().min(10, "NID must be valid"),
  age: z.number().int().min(18, "Must be at least 18").max(100, "Age too high"),
  district: z.string().min(2, "District required"),
  region: z.string().min(2, "Region required"),
  bike_brand: z.string().min(2, "Bike brand required"),
  bike_registration: z.string().min(5, "Bike registration required"),
  note: z.string().optional(),
});

const BeARider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Rider Data Submitted:", data);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        reset({
          name: "Md. Shahjalal",
          email: "shahjalal@example.com",
          phone: "01540325659",
          nid: "01989763775",
          age: 18,
          district: "Netrokona",
          region: "Mymensingh",
          bike_brand: "Yamaha",
          bike_registration: "0154032565901989763775",
          note: "Experienced rider, ready to deliver with care!",
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [reset]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200 my-10"
    >
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        🏍️ Become a Rider — Join Our Team!
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Ready to hit the road? Fill out the form below to become a delivery
        rider. We prioritize safety, professionalism, and care — and we’d love
        to have you with us!
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Field Generator */}
        {[
          {
            label: "Name",
            icon: <AiOutlineUser />,
            name: "name",
            type: "text",
            placeholder: "Your full name",
          },
          {
            label: "Email",
            icon: <AiOutlineMail />,
            name: "email",
            type: "email",
            placeholder: "you@example.com",
          },
          {
            label: "Phone",
            icon: <AiOutlinePhone />,
            name: "phone",
            type: "tel",
            placeholder: "01XXXXXXXXX",
          },
          {
            label: "NID Number",
            icon: <AiOutlineIdcard />,
            name: "nid",
            type: "text",
            placeholder: "Your National ID",
          },
          {
            label: "Age",
            icon: <BsCalendar3 />,
            name: "age",
            type: "number",
            placeholder: "Your age",
            config: { valueAsNumber: true },
          },
          {
            label: "District",
            icon: <MdOutlineLocationCity />,
            name: "district",
            type: "text",
            placeholder: "Your district",
          },
          {
            label: "Region",
            icon: <MdOutlineLocationCity />,
            name: "region",
            type: "text",
            placeholder: "Your region",
          },
          {
            label: "Bike Brand",
            icon: <MdDirectionsBike />,
            name: "bike_brand",
            type: "text",
            placeholder: "e.g. Yamaha",
          },
          {
            label: "Bike Registration",
            icon: <MdDirectionsBike />,
            name: "bike_registration",
            type: "text",
            placeholder: "Bike registration number",
          },
        ].map(({ label, icon, name, type, placeholder, config }) => (
          <div key={name} className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-gray-700">
              <span className="text-indigo-500">{icon}</span> {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              className={`input input-bordered mt-1 ${
                errors[name] ? "input-error" : "input-info"
              }`}
              {...register(name, config)}
            />
            {errors[name] && (
              <span className="text-error text-sm mt-1">
                {errors[name]?.message}
              </span>
            )}
          </div>
        ))}

        {/* Note Field */}
        <div className="md:col-span-2">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <MdNotes className="text-indigo-500" /> Additional Note
          </label>
          <textarea
            rows={3}
            placeholder="Extra info if any..."
            className="textarea textarea-bordered w-full mt-1"
            {...register("note")}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full rounded-full mt-4"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner text-white"></span>
            ) : (
              <>
                Submit <FiCheckCircle className="ml-2 text-lg" />
              </>
            )}
          </button>
        </div>

        {isSubmitSuccessful && (
          <div className="md:col-span-2 text-center mt-4">
            <p className="text-green-600 font-semibold">
              ✅ Thank you for registering! We'll be in touch soon.
            </p>
          </div>
        )}
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Press <kbd className="kbd kbd-sm">Ctrl</kbd> +{" "}
        <kbd className="kbd kbd-sm">P</kbd> to auto-fill test data.
      </p>
    </motion.div>
  );
};

export default BeARider;
