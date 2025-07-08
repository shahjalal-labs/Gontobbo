import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SendParcelForm from "./components/SendParcelForm";
import { gontobboZones } from "../gontobboZones/gontobbo.constants";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

const generateTrackingId = () =>
  "TRK-" + Math.random().toString(36).substring(2, 10).toUpperCase();

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

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    const { baseCost, weightCost, perKgRate, weight, isNonDocument, total } =
      calculateCostWithBreakdown(data);
    const trackingId = generateTrackingId();

    const confirm = await MySwal.fire({
      title: "📦 Confirm Parcel Details",
      html: `
          <div class="text-left text-sm leading-relaxed space-y-1">
            <strong>Parcel:</strong> ${data.title} (${data.type})<br/>
            <strong>Sender:</strong> ${data.sender_name} (${data.sender_contact})<br/>
            <strong>Receiver:</strong> ${data.receiver_name} (${data.receiver_contact})<br/>
            <strong>Tracking ID:</strong> ${trackingId}<br/>
            <hr class="my-2"/>
            <strong>📊 Cost Breakdown:</strong><br/>
            🔹 Base Cost: ৳${baseCost}<br/>
            ${
              isNonDocument
                ? `🔹 Weight Cost: ${weight}kg × ৳${perKgRate} = ৳${weightCost}<br/>`
                : `🔹 Weight Cost: N/A (Document type)<br/>`
            }
            <hr class="my-2"/>
            <strong>💰 Total Cost: ৳${total}</strong>
          </div>
        `,
      showCancelButton: true,
      confirmButtonText: "Confirm & Submit",
    });

    if (confirm.isConfirmed) {
      // TODO: replace alert with API call & reset on success
      alert("📦 Parcel submitted successfully!");
      reset();
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        reset({
          title: "Sample Parcel",
          type: "non-document",
          weight: 2,
          sender_name: "Alice",
          sender_contact: "01989763779",
          sender_region: "Dhaka",
          sender_center: "Dhaka",
          sender_address: "123, Dhanmondi",
          pickup_instruction: "Call before pickup",
          receiver_name: "Bob",
          receiver_contact: "01540325698",
          receiver_region: "Chattogram",
          receiver_center: "Bandarban",
          receiver_address: "456, Pahartali",
          delivery_instruction: "Leave at gate",
        });
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [reset]);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-tr from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200">
      <SendParcelForm
        serviceCenters={gontobboZones}
        onSubmit={onSubmit} // Pass your onSubmit handler
        handleSubmit={handleSubmit} // Pass the react-hook-form's handleSubmit function
        register={register}
        watch={watch}
        reset={reset}
        errors={errors}
      />
    </div>
  );
};

export default SendParcel;
