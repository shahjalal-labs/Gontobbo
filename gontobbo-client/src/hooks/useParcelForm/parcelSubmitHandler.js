import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  calculateCostWithBreakdown,
  generateTrackingId,
} from "../../utils/costCalculator";

const MySwal = withReactContent(Swal);

export const handleParcelSubmit = async (data, reset) => {
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
    alert("📦 Parcel submitted successfully!");
    reset();
  }
};
