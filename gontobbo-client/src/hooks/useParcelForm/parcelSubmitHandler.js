import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  calculateCostWithBreakdown,
  generateTrackingId,
} from "../../utils/costCalculator";
import { renderParcelSummaryHtml } from "./renderParcelSummaryHtml";
import { showSuccessAlert } from "../../utils/swal";
const MySwal = withReactContent(Swal);

export const handleParcelSubmit = async (data, reset, user, axiosSecure) => {
  const cost = calculateCostWithBreakdown(data);
  const trackingId = generateTrackingId();

  const confirm = await MySwal.fire({
    title: "📦 Confirm Parcel Details",
    html: renderParcelSummaryHtml(data, trackingId, cost),
    showCancelButton: true,
    confirmButtonText: "Confirm & Submit",
  });

  if (confirm.isConfirmed) {
    reset();

    const newParcel = {
      ...data,
      cost: cost.total,
      created_by: user?.email,
      payment_status: "unpaid",
      delivery_status: "not_collected",
      creation_date: new Date().toISOString(),
      trackingId,
    };
    try {
      const res = await axiosSecure.post("/parcels", newParcel);
      console.log(res?.data, "parcelSubmitHandler.js", 35);
      if (res?.data?.insertedId) {
        showSuccessAlert({
          title: "Redirecting...",
          text: "Proceeding to payment gateway.",
        });
      }
    } catch (error) {
      console.log(`Error`, error);
    }
  }
};
