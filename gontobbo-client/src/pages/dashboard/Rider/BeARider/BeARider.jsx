import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { gontobboZones } from "../../../gontobboZones/gontobbo.constants"; // ✅ Your region/district data

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
import useAuth from "../../../../hooks/useAuth";

// Validation Schema
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  nid: z.string().min(10, "NID must be valid"),
  age: z.number().int().min(18, "Must be at least 18").max(100, "Age too high"),
  region: z.string().min(1, "Region is required"),
  district: z.string().min(1, "District is required"),
  bike_brand: z.string().min(2, "Bike brand required"),
  bike_registration: z.string().min(5, "Registration required"),
  note: z.string().optional(),
});

const BeARider = () => {
  const { user } = useAuth();
  const [selectedRegion, setSelectedRegion] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const region = watch("region");

  const regions = Array.from(new Set(gontobboZones.map((z) => z.region)));
  const districts = gontobboZones
    .filter((z) => z.region === region)
    .map((z) => z.district);

  const onSubmit = (data) => {
    const newRider = {
      ...data,
      name: user?.displayName || "",
      email: user?.email || "",
      status: "pending",
      created_at: new Date().toISOString(),
    };
    console.log(newRider, "BeARider.jsx", 62);
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
          age: 23,
          region: "Mymensingh",
          district: "Netrokona",
          bike_brand: "Yamaha",
          bike_registration: "REG-123456",
          note: "Experienced rider, ready to deliver with care!",
        });
        setSelectedRegion("Mymensingh");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [reset]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-bold text-indigo-600 text-center mb-4">
        🏍️ Become a Rider — Join Our Team!
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6"
      >
        {/* Name */}
        <Field
          label="Name"
          icon={<AiOutlineUser />}
          error={errors.name}
          inputProps={{
            placeholder: "Your full name",
            defaultValue: user?.displayName || "",
            readOnly: true, // 👈 makes it read-only
          }}
        />
        {/* email */}
        <Field
          label="Email"
          icon={<AiOutlineMail />}
          error={errors.email}
          inputProps={{
            placeholder: "you@example.com",
            defaultValue: user?.email || "",
            readOnly: true, // 👈 makes it read-only
          }}
        />

        {/* Phone */}
        <Field
          label="Phone"
          icon={<AiOutlinePhone />}
          error={errors.phone}
          inputProps={{ ...register("phone"), placeholder: "01XXXXXXXXX" }}
        />

        {/* NID */}
        <Field
          label="NID Number"
          icon={<AiOutlineIdcard />}
          error={errors.nid}
          inputProps={{ ...register("nid"), placeholder: "Your NID number" }}
        />

        {/* Age */}
        <Field
          label="Age"
          icon={<BsCalendar3 />}
          error={errors.age}
          inputProps={{
            ...register("age", { valueAsNumber: true }),
            type: "number",
            placeholder: "Your age",
          }}
        />

        {/* Region */}
        <div>
          <label className="font-semibold flex items-center gap-2 text-gray-700">
            <MdOutlineLocationCity className="text-indigo-500" />
            Region
          </label>
          <select
            className={`select select-bordered w-full mt-1 ${
              errors.region ? "select-error" : "select-info"
            }`}
            {...register("region")}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              setValue("region", e.target.value);
              setValue("district", ""); // reset district
            }}
          >
            <option value="">Select a region</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.region && (
            <p className="text-error text-sm mt-1">{errors.region.message}</p>
          )}
        </div>

        {/* District */}
        <div>
          <label className="font-semibold flex items-center gap-2 text-gray-700">
            <MdOutlineLocationCity className="text-indigo-500" />
            District
          </label>
          <select
            className={`select select-bordered w-full mt-1 ${
              errors.district ? "select-error" : "select-info"
            }`}
            {...register("district")}
            disabled={!region}
          >
            <option value="">
              {region ? "Select district" : "Select region first"}
            </option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.district && (
            <p className="text-error text-sm mt-1">{errors.district.message}</p>
          )}
        </div>

        {/* Bike Brand */}
        <Field
          label="Bike Brand"
          icon={<MdDirectionsBike />}
          error={errors.bike_brand}
          inputProps={{
            ...register("bike_brand"),
            placeholder: "Yamaha / Bajaj",
          }}
        />

        {/* Bike Registration */}
        <Field
          label="Bike Registration"
          icon={<MdDirectionsBike />}
          error={errors.bike_registration}
          inputProps={{
            ...register("bike_registration"),
            placeholder: "REG-XXXXXX",
          }}
        />

        {/* Note */}
        <div>
          <label className="font-semibold flex items-center gap-2 text-gray-700">
            <MdNotes className="text-indigo-500" />
            Additional Note
          </label>
          <textarea
            {...register("note")}
            rows={3}
            placeholder="Optional note..."
            className="textarea textarea-bordered textarea-info w-full mt-1"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <>
              Submit <FiCheckCircle />
            </>
          )}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 text-center font-semibold">
            ✅ Thank you for registering! We’ll contact you soon.
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Press <kbd className="kbd kbd-sm">Ctrl</kbd> +{" "}
        <kbd className="kbd kbd-sm">P</kbd> to auto-fill test data.
      </p>
    </motion.div>
  );
};

const Field = ({ label, icon, error, inputProps }) => (
  <div>
    <label className="font-semibold flex items-center gap-2 text-gray-700">
      <span className="text-indigo-500">{icon}</span> {label}
    </label>
    <input
      className={`input input-bordered w-full mt-1 ${
        error ? "input-error" : "input-info"
      }`}
      {...inputProps}
    />
    {error && <p className="text-error text-sm mt-1">{error.message}</p>}
  </div>
);

export default BeARider;
