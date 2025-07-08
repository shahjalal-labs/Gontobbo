import ParcelInfo from "./ParcelInfo";
import SenderInfo from "./SenderInfo";
import ReceiverInfo from "./ReceiverInfo";

const SendParcelForm = ({
  onSubmit,
  serviceCenters,
  register,
  handleSubmit,
  watch,
  reset,
  errors,
}) => {
  const parcelType = watch("type");
  const senderRegion = watch("sender_region");
  const receiverRegion = watch("receiver_region");

  const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];
  const getDistrictsByRegion = (region) =>
    serviceCenters.filter((w) => w.region === region).map((w) => w.district);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-12">
      {/* 📦 Parcel Info */}
      <ParcelInfo register={register} errors={errors} parcelType={parcelType} />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 👤 Sender Info */}
        <SenderInfo
          register={register}
          errors={errors}
          uniqueRegions={uniqueRegions}
          getDistrictsByRegion={getDistrictsByRegion}
          senderRegion={senderRegion}
        />
        {/* 👤 Receiver Info */}
        <ReceiverInfo
          register={register}
          errors={errors}
          uniqueRegions={uniqueRegions}
          getDistrictsByRegion={getDistrictsByRegion}
          receiverRegion={receiverRegion}
        />
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
  );
};

export default SendParcelForm;
