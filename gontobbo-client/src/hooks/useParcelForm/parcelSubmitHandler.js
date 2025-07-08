import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  calculateCostWithBreakdown,
  generateTrackingId,
} from "../../utils/costCalculator";
import { renderParcelSummaryHtml } from "./renderParcelSummaryHtml";

const MySwal = withReactContent(Swal);

export const handleParcelSubmit = async (data, reset) => {
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
    console.log(
      { ...data, trackingId, totalCost: cost.total },
      "parcelSubmitHandler.js",
      11,
    );
  }
};
