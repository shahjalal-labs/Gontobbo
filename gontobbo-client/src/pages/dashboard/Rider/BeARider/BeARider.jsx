import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// 🧠 Zod Schema
const riderSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  age: z.string().min(2).max(3),
  phone: z.string().min(11, "Phone must be 11 digits"),
  nid: z.string().min(10),
  region: z.string().min(2),
  district: z.string().min(2),
  bike_brand: z.string().min(2),
  bike_registration: z.string().min(5),
  note: z.string().optional(),
});

export default function BeARider() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(riderSchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    const payload = {
      ...data,
      status: "deactivated",
      created_at: new Date().toISOString(),
    };

    try {
      // ⛳ Replace this with your secure Axios POST
      console.log("Submit Payload:", payload);

      // Simulated success
      Swal.fire("Success!", "Application submitted!", "success");
      reset();
      navigate("/dashboard/myparcels");
    } catch (err) {
      Swal.fire("Error", err.message || "Submission failed", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-base-200 rounded-xl shadow-xl max-w-2xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        🚴‍♂️ Become a Rider with Gontobbo!
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Fill in the details below to join our fast-growing rider community and
        start delivering across Bangladesh with speed and trust.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            {...register("name")}
            placeholder="Full Name"
            className="input input-bordered w-full"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            {...register("age")}
            placeholder="Age"
            className="input input-bordered w-full"
          />
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="input input-bordered w-full"
          />
          <input
            {...register("nid")}
            placeholder="NID Number"
            className="input input-bordered w-full"
          />
          <input
            {...register("region")}
            placeholder="Region"
            className="input input-bordered w-full"
          />
          <input
            {...register("district")}
            placeholder="District"
            className="input input-bordered w-full"
          />
          <input
            {...register("bike_brand")}
            placeholder="Bike Brand"
            className="input input-bordered w-full"
          />
          <input
            {...register("bike_registration")}
            placeholder="Bike Registration Number"
            className="input input-bordered w-full"
          />
        </div>

        <textarea
          {...register("note")}
          placeholder="Additional info (optional)"
          className="textarea textarea-bordered w-full"
        />

        {Object.entries(errors).map(([key, val]) => (
          <p key={key} className="text-error text-sm font-medium">
            {val.message}
          </p>
        ))}

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary btn-block rounded-full mt-4"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </motion.div>
  );
}
