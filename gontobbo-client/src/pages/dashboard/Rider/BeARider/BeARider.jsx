import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { gontobboZones } from "../../../gontobboZones/gontobbo.constants";

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

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  nid: z.string().min(10, "NID must be valid"),
  age: z.number().int().min(18, "Must be at least 18").max(100, "Age too high"),
  region: z.string().min(2, "Region required"),
  district: z.string().min(2, "District required"),
  bike_brand: z.string().min(2, "Bike brand required"),
  bike_registration: z.string().min(5, "Bike registration required"),
  note: z.string().optional(),
});

const BeARider = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  const regions = Array.from(new Set(gontobboZones.map((z) => z.region)));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setSelectedRegion("Mymensingh");
        setSelectedDistricts(
          gontobboZones
            .filter((z) => z.region === "Mymensingh")
            .map((z) => z.district),
        );
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

  const onSubmit = (data) => {
    console.log("Rider Data Submitted:", data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
    >
      <h1 className="text-3xl font-extrabold text-center mb-6 text-indigo-600">
        🏍️ Become a Rider — Join Our Team!
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <AiOutlineUser className="text-indigo-500" /> Name
            </span>
            <input
              type="text"
              placeholder="Your full name"
              className={`input input-bordered mt-1 ${errors.name ? "input-error" : "input-info"}`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-error text-sm">{errors.name.message}</p>
            )}
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <AiOutlineMail className="text-indigo-500" /> Email
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className={`input input-bordered mt-1 ${errors.email ? "input-error" : "input-info"}`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-error text-sm">{errors.email.message}</p>
            )}
          </label>

          {/* Phone */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <AiOutlinePhone className="text-indigo-500" /> Phone
            </span>
            <input
              type="tel"
              placeholder="01XXXXXXXXX"
              className={`input input-bordered mt-1 ${errors.phone ? "input-error" : "input-info"}`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-error text-sm">{errors.phone.message}</p>
            )}
          </label>

          {/* NID */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <AiOutlineIdcard className="text-indigo-500" /> NID Number
            </span>
            <input
              type="text"
              placeholder="Your National ID"
              className={`input input-bordered mt-1 ${errors.nid ? "input-error" : "input-info"}`}
              {...register("nid")}
            />
            {errors.nid && (
              <p className="text-error text-sm">{errors.nid.message}</p>
            )}
          </label>

          {/* Age */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <BsCalendar3 className="text-indigo-500" /> Age
            </span>
            <input
              type="number"
              placeholder="Your age"
              className={`input input-bordered mt-1 ${errors.age ? "input-error" : "input-info"}`}
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && (
              <p className="text-error text-sm">{errors.age.message}</p>
            )}
          </label>

          {/* Region */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <MdOutlineLocationCity className="text-indigo-500" /> Region
            </span>
            <select
              className={`select select-bordered mt-1 ${errors.region ? "select-error" : "select-info"}`}
              {...register("region")}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedRegion(val);
                setValue("region", val);
                const dists = gontobboZones
                  .filter((z) => z.region === val)
                  .map((z) => z.district);
                setSelectedDistricts(dists);
              }}
              value={selectedRegion}
            >
              <option value="">Select a region</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {errors.region && (
              <p className="text-error text-sm">{errors.region.message}</p>
            )}
          </label>

          {/* District */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <MdOutlineLocationCity className="text-indigo-500" /> District
            </span>
            <select
              className={`select select-bordered mt-1 ${errors.district ? "select-error" : "select-info"}`}
              {...register("district")}
              disabled={!selectedRegion}
            >
              <option value="">
                {selectedRegion ? "Select a district" : "Select region first"}
              </option>
              {selectedDistricts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.district && (
              <p className="text-error text-sm">{errors.district.message}</p>
            )}
          </label>

          {/* Bike Brand */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <MdDirectionsBike className="text-indigo-500" /> Bike Brand
            </span>
            <input
              type="text"
              placeholder="Bike brand (e.g. Yamaha)"
              className={`input input-bordered mt-1 ${errors.bike_brand ? "input-error" : "input-info"}`}
              {...register("bike_brand")}
            />
            {errors.bike_brand && (
              <p className="text-error text-sm">{errors.bike_brand.message}</p>
            )}
          </label>

          {/* Bike Registration */}
          <label className="flex flex-col">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <MdDirectionsBike className="text-indigo-500" /> Bike Registration
            </span>
            <input
              type="text"
              placeholder="Bike registration number"
              className={`input input-bordered mt-1 ${errors.bike_registration ? "input-error" : "input-info"}`}
              {...register("bike_registration")}
            />
            {errors.bike_registration && (
              <p className="text-error text-sm">
                {errors.bike_registration.message}
              </p>
            )}
          </label>
        </div>

        {/* Note */}
        <label className="flex flex-col">
          <span className="flex items-center gap-2 font-semibold text-gray-700">
            <MdNotes className="text-indigo-500" /> Additional Note
          </span>
          <textarea
            placeholder="Additional information (optional)"
            className="textarea textarea-info mt-1 resize-none"
            rows={3}
            {...register("note")}
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary rounded-full flex items-center justify-center gap-2 mt-4"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Processing...
            </>
          ) : (
            <>
              Submit <FiCheckCircle className="inline text-lg" />
            </>
          )}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 font-semibold mt-3 text-center">
            Thank you for registering! We will contact you soon.
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

export default BeARider;
