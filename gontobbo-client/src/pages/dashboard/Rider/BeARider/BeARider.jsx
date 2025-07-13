import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  Bike,
  BadgePlus,
  User,
  Mail,
  Phone,
  Fingerprint,
  Calendar,
  MapPin,
  Info,
  Pencil,
  FileText,
} from "lucide-react";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(11, "Phone must be at least 11 digits"),
  nid: z.string().min(10, "NID must be at least 10 digits"),
  age: z.string().min(2, "Age is required"),
  district: z.string().min(2, "District is required"),
  region: z.string().min(2, "Region is required"),
  bike_brand: z.string().min(2, "Bike brand required"),
  bike_registration: z.string().min(5, "Bike registration required"),
  note: z.string().optional(),
});

const BeARider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("🚀 Rider Form Data:", data);

    Swal.fire({
      icon: "success",
      title: "Application Submitted 🚚",
      text: "Thanks for joining! We'll get back to you soon.",
      timer: 2500,
      showConfirmButton: false,
    });

    reset();
  };

  return (
    <div className="min-h-screen bg-base-100 px-4 py-10 flex flex-col items-center">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="max-w-xl w-full text-center mb-8"
      >
        <h1 className="text-4xl font-extrabold text-info flex items-center justify-center gap-2">
          <Bike size={32} />
          Become a Gontobbo Rider
        </h1>
        <p className="text-base-content mt-3 max-w-md mx-auto">
          🚀 Help deliver parcels across Bangladesh and earn with every trip.
          Fill out this quick form to apply as a rider.
        </p>
      </motion.div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-xl bg-base-200 p-6 space-y-4 shadow-2xl rounded-box"
      >
        {/** Name */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <User size={18} /> Full Name
          </label>
          <input
            {...register("name")}
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-error mt-1">{errors.name.message}</p>
          )}
        </div>

        {/** Email */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <Mail size={18} /> Email Address
          </label>
          <input
            type="email"
            {...register("email")}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-error mt-1">{errors.email.message}</p>
          )}
        </div>

        {/** Phone */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <Phone size={18} /> Phone Number
          </label>
          <input
            {...register("phone")}
            className="input input-bordered w-full"
          />
          {errors.phone && (
            <p className="text-error mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/** NID */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <Fingerprint size={18} /> NID Number
          </label>
          <input {...register("nid")} className="input input-bordered w-full" />
          {errors.nid && (
            <p className="text-error mt-1">{errors.nid.message}</p>
          )}
        </div>

        {/** Age */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <Calendar size={18} /> Age
          </label>
          <input {...register("age")} className="input input-bordered w-full" />
          {errors.age && (
            <p className="text-error mt-1">{errors.age.message}</p>
          )}
        </div>

        {/** District */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <MapPin size={18} /> District
          </label>
          <input
            {...register("district")}
            className="input input-bordered w-full"
          />
          {errors.district && (
            <p className="text-error mt-1">{errors.district.message}</p>
          )}
        </div>

        {/** Region */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <MapPin size={18} /> Region
          </label>
          <input
            {...register("region")}
            className="input input-bordered w-full"
          />
          {errors.region && (
            <p className="text-error mt-1">{errors.region.message}</p>
          )}
        </div>

        {/** Bike Brand */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <BadgePlus size={18} /> Bike Brand
          </label>
          <input
            {...register("bike_brand")}
            className="input input-bordered w-full"
          />
          {errors.bike_brand && (
            <p className="text-error mt-1">{errors.bike_brand.message}</p>
          )}
        </div>

        {/** Bike Reg */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <FileText size={18} /> Bike Registration
          </label>
          <input
            {...register("bike_registration")}
            className="input input-bordered w-full"
          />
          {errors.bike_registration && (
            <p className="text-error mt-1">
              {errors.bike_registration.message}
            </p>
          )}
        </div>

        {/** Note */}
        <div>
          <label className="label font-semibold flex items-center gap-1">
            <Info size={18} /> Additional Note (Optional)
          </label>
          <textarea
            {...register("note")}
            className="textarea textarea-bordered w-full"
            rows="3"
          />
        </div>

        {/** Submit Button */}
        <button
          type="submit"
          className="btn btn-info w-full mt-2 rounded-full text-white"
        >
          <Pencil size={18} className="mr-2" /> Submit Application
        </button>
      </form>
    </div>
  );
};

export default BeARider;
