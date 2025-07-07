import { motion, AnimatePresence } from "framer-motion";
import SendParcelForm from "./components/SendParcelForm";
import { gontobboZones } from "../gontobboZones/gontobbo.constants";

const handleFormSubmit = (data) => {
  console.log("📦 Form Data:", data);
  // Here you can:
  // - calculate costs
  // - generate tracking ID
  // - call axiosSecure.post()
  // - show Swal
};
const SendParcel = () => {
  return (
    <div>
      <SendParcelForm
        serviceCenters={gontobboZones}
        onSubmit={handleFormSubmit}
      />
      ;
    </div>
  );
};

export default SendParcel;
