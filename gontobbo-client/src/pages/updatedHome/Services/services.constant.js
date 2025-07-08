import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaBoxes,
  FaHandHoldingUsd,
  FaWarehouse,
  FaUndoAlt,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: FaShippingFast,
    title: "Smart Parcel Booking",
    description:
      "Merchants can book parcels instantly with real-time tracking ID generation and automated delivery zone detection, making the booking process fast and frictionless.",
  },
  {
    id: 2,
    icon: FaMapMarkedAlt,
    title: "Delivery Across 64 Districts",
    description:
      "Seamless parcel delivery coverage across all 64 districts of Bangladesh, connecting urban centers to the remotest villages with guaranteed home delivery.",
  },
  {
    id: 3,
    icon: FaBoxes,
    title: "Warehouse & Hub Management",
    description:
      "Gontobbo ensures organized parcel handling through intelligent warehouse coordination, temporary storage, and optimized routing via district hubs.",
  },
  {
    id: 4,
    icon: FaHandHoldingUsd,
    title: "Cash on Delivery with Commission",
    description:
      "Agents collect payment upon delivery, and merchants are notified instantly. Delivery agents earn commission for each successful transaction.",
  },
  {
    id: 5,
    icon: FaWarehouse,
    title: "Admin-Controlled Logistics Flow",
    description:
      "Admins manage pick-up, transit, inter-city movement, and delivery assignment in real-time with full visibility into the parcel lifecycle.",
  },
  {
    id: 6,
    icon: FaUndoAlt,
    title: "Reverse Delivery & Exchange",
    description:
      "End customers can return or exchange parcels using our integrated reverse logistics, making Gontobbo a truly flexible and customer-friendly platform.",
  },
];

export default servicesData;
