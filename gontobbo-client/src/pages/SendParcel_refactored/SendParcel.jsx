import SendParcelForm from "./components/SendParcelForm";
import { gontobboZones } from "../gontobboZones/gontobbo.constants";
import { useParcelForm } from "../../hooks/useParcelForm";

const SendParcel = () => {
  const { register, handleSubmit, watch, reset, errors, onSubmit } =
    useParcelForm();

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-tr from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200">
      <SendParcelForm
        serviceCenters={gontobboZones}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        watch={watch}
        reset={reset}
        errors={errors}
      />
    </div>
  );
};

export default SendParcel;
