import { formValidations } from "../../../utils/formValidations";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

const RecieverInfo = ({
  register,
  errors,
  uniqueRegions,
  getDistrictsByRegion,
  receiverRegion,
}) => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Receiver Info</h2>
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
    </section>
  );
};

export default RecieverInfo;
