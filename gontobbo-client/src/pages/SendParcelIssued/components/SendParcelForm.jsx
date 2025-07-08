import { useEffect } from "react";
import { testData } from "../sendpercel.constant";
import ParcelInfo from "./ParcelInfo";
import SenderInfo from "./SenderInfo";
import ReceiverInfo from "./RecieverInfo";
// import axiosSecure from "../../../hooks/useAxiosSecure"; // Uncomment and use when ready

const SendParcelForm = ({
  onSubmit,
  serviceCenters,
  register,
  handleSubmit,
  watch,
  reset,
  errors,
}) => {
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

  const calculateCostWithBreakdown = (data) => {
    const baseCost = 100;
    const perKgRate = 50;
    const isNonDocument = data.type === "non-document";
    const weight = parseFloat(data.weight) || 0;
    const weightCost = isNonDocument ? weight * perKgRate : 0;
    const total = baseCost + weightCost;

    return {
      baseCost,
      weightCost,
      perKgRate,
      weight,
      isNonDocument,
      total,
    };
  };

  const generateTrackingId = () =>
    "TRK-" + Math.random().toString(36).substring(2, 10).toUpperCase();

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
        <ParcelInfo
          register={register}
          errors={errors}
          parcelType={parcelType}
        />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 👤 Sender &  */}
          <SenderInfo />
          {/* Receiver info */}
          <ReceiverInfo />
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
