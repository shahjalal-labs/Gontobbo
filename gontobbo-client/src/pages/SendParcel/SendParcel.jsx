import { motion, AnimatePresence } from "framer-motion";
import SendParcelForm from "./components/SendParcelForm";
import { gontobboZones } from "../gontobboZones/gontobbo.constants";
import { useForm } from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

const onSubmit = async (data) => {
  const { baseCost, weightCost, perKgRate, weight, isNonDocument, total } =
    data;
  //   calculateCostWithBreakdown(data);
  // const trackingId = generateTrackingId();

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
    /* Uncomment and implement when ready
     try {
        const response = await axiosSecure.post("/parcels", {
          ...data,
          cost: total,
          tracking_id: trackingId,
          status: "Pending",
          created_at: new Date(),
        });

        if (response?.data?.insertedId) {
          Swal.fire("✅ Success", "Parcel submitted successfully!", "success");
          reset();
        } else {
          throw new Error("Insert failed");
        };
      } catch (err) {
        Swal.fire("❌ Error", "Something went wrong. Try again.", "error");
      }
      */
    alert("📦 Parcel submitted successfully!");
    reset();
  }
};

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <div>
      <SendParcelForm
        serviceCenters={gontobboZones}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        watch={watch}
        reset={reset}
        errors={errors}
      />
      ;
    </div>
  );
};

export default SendParcel;
