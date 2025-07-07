import FormInput from "./FormInput";
import FormSelect from "./SendParecelFormSelect";

const SenderReciever = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sender Info */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sender Info</h2>
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
    </div>
  );
};

export default SenderReciever;
