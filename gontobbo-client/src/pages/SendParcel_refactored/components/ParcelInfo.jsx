import { formValidations } from "../../../utils/formValidations";
import FormInput from "./FormInput";
import { FormRadioGroup } from "./SendParcleFormRadioGroup";

const ParcelInfo = ({ register, errors, parcelType }) => {
  return (
    <section className="space-y-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Parcel Info</h2>
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
  );
};

export default ParcelInfo;
