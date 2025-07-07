import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { formValidations } from "../../../utils/formValidations";
import { FormRadioGroup, FormSelect, FormTextarea } from "../SendParcel";
import FormInput from "./FormInput";
import { useEffect } from "react";
// import axiosSecure from "../../../hooks/useAxiosSecure"; // Uncomment and use when ready

const MySwal = withReactContent(Swal);
const testData = {
  title: "Sample Parcel",
  type: "non-document",
  weight: 2,
  sender_name: "Alice",
  sender_contact: "01989763779",
  sender_region: "Dhaka", // must match one region exactly
  sender_center: "Dhaka", // must match district in Dhaka region
  sender_address: "123, Dhanmondi",
  pickup_instruction: "Call before pickup",
  receiver_name: "Bob",
  receiver_contact: "01540325698",
  receiver_region: "Chattogram",
  receiver_center: "Bandarban",
  receiver_address: "456, Pahartali",
  delivery_instruction: "Leave at gate",
};
const SendParcelForm = ({ onSubmit: _onSubmit, serviceCenters }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        reset(testData);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [reset]);
  const parcelType = watch("type");
  const senderRegion = watch("sender_region");
  const receiverRegion = watch("receiver_region");

  const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];

  const getDistrictsByRegion = (region) =>
    serviceCenters.filter((w) => w.region === region).map((w) => w.district);

  const calculateCost = (data) => {
    const baseCost = 100;
    const perKgRate = 50;
    const weightCost =
      data.type === "non-document" && data.weight
        ? parseFloat(data.weight) * perKgRate
        : 0;
    return baseCost + weightCost;
  };

  const generateTrackingId = () =>
    "TRK-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  const onSubmit = async (data) => {
    const cost = calculateCost(data);
    const trackingId = generateTrackingId();

    const confirm = await MySwal.fire({
      title: "Confirm Parcel Details",
      html: `
        <div class="text-left text-sm leading-relaxed">
          <strong>Parcel:</strong> ${data.title} (${data.type})<br/>
          <strong>Sender:</strong> ${data.sender_name} (${data.sender_contact})<br/>
          <strong>Receiver:</strong> ${data.receiver_name} (${data.receiver_contact})<br/>
          <strong>Tracking ID:</strong> ${trackingId}<br/>
          <strong>Total Cost:</strong> ৳${cost}
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Confirm & Submit",
    });

    if (confirm.isConfirmed) {
      /* Uncomment and implement when ready
      try {
        const response = await axiosSecure.post("/parcels", {
          ...data,
          cost,
          tracking_id: trackingId,
          status: "Pending",
          created_at: new Date(),
        });

        if (response?.data?.insertedId) {
          Swal.fire("✅ Success", "Parcel submitted successfully!", "success");
          reset();
        } else {
          throw new Error("Insert failed");
        }
      } catch (err) {
        Swal.fire("❌ Error", "Something went wrong. Try again.", "error");
      }
      */

      alert("📦 Parcel submitted successfully!");
      reset();
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-tr from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            📦 Send a Parcel
          </h1>
          <p className="mt-2 text-gray-600 text-lg">
            Fill in the details below
          </p>
        </header>

        {/* 📦 Parcel Info */}
        <section className="space-y-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Parcel Info
          </h2>
          <FormInput
            id="title"
            label="Parcel Name"
            register={register}
            validation={formValidations.parcel.title}
            error={errors.title}
          />
          <FormRadioGroup
            id="type"
            label="Type"
            register={register}
            validation={formValidations.parcel.type}
            error={errors.type}
            options={[
              { value: "document", label: "Document" },
              { value: "non-document", label: "Non-Document" },
            ]}
          />
          <FormInput
            id="weight"
            label="Weight (kg)"
            type="number"
            register={register}
            validation={formValidations.parcel.weight(parcelType)}
            error={errors.weight}
            disabled={parcelType !== "non-document"}
          />
        </section>

        {/* 👤 Sender & Receiver */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sender Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Sender Info
            </h2>
            <FormInput
              id="sender_name"
              label="Name"
              register={register}
              validation={formValidations.person.name}
              error={errors.sender_name}
            />
            <FormInput
              id="sender_contact"
              label="Contact"
              type="tel"
              register={register}
              validation={formValidations.person.contact}
              error={errors.sender_contact}
            />
            <FormSelect
              id="sender_region"
              label="Region"
              register={register}
              validation={formValidations.location.region}
              error={errors.sender_region}
              options={uniqueRegions}
              defaultValue=""
              placeholder="Select Region"
            />
            <FormSelect
              id="sender_center"
              label="Service Center"
              register={register}
              validation={formValidations.location.center}
              error={errors.sender_center}
              options={getDistrictsByRegion(senderRegion)}
              defaultValue=""
              placeholder="Select Service Center"
              disabled={!senderRegion}
            />
            <FormInput
              id="sender_address"
              label="Address"
              register={register}
              validation={formValidations.person.address}
              error={errors.sender_address}
            />
            <FormTextarea
              id="pickup_instruction"
              label="Pickup Instruction"
              register={register}
              validation={formValidations.instruction.pickup}
              error={errors.pickup_instruction}
            />
          </div>

          {/* Receiver Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Receiver Info
            </h2>
            <FormInput
              id="receiver_name"
              label="Name"
              register={register}
              validation={formValidations.person.name}
              error={errors.receiver_name}
            />
            <FormInput
              id="receiver_contact"
              label="Contact"
              type="tel"
              register={register}
              validation={formValidations.person.contact}
              error={errors.receiver_contact}
            />
            <FormSelect
              id="receiver_region"
              label="Region"
              register={register}
              validation={formValidations.location.region}
              error={errors.receiver_region}
              options={uniqueRegions}
              defaultValue=""
              placeholder="Select Region"
            />
            <FormSelect
              id="receiver_center"
              label="Service Center"
              register={register}
              validation={formValidations.location.center}
              error={errors.receiver_center}
              options={getDistrictsByRegion(receiverRegion)}
              defaultValue=""
              placeholder="Select Service Center"
              disabled={!receiverRegion}
            />
            <FormInput
              id="receiver_address"
              label="Address"
              register={register}
              validation={formValidations.person.address}
              error={errors.receiver_address}
            />
            <FormTextarea
              id="delivery_instruction"
              label="Delivery Instruction"
              register={register}
              validation={formValidations.instruction.delivery}
              error={errors.delivery_instruction}
            />
          </div>
        </section>

        {/* ✅ Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-12 py-4 text-xl font-semibold text-white
             shadow-lg transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcelForm;
