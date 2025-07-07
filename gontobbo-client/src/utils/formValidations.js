// src/utils/formValidations.js
export const phoneRegex = /^01[3-9]\d{8}$/; // BD 11-digit mobile number

export const formValidations = {
  parcel: {
    title: {
      required: "Parcel name is required",
      minLength: { value: 3, message: "Minimum 3 characters" },
      maxLength: { value: 50, message: "Maximum 50 characters" },
    },
    type: {
      required: "Parcel type is required",
    },
    weight: (type) => ({
      validate: (val) => {
        if (type === "non-document") {
          if (!val || parseFloat(val) <= 0)
            return "Weight must be greater than 0";
          if (parseFloat(val) > 25) return "Max allowed weight is 25kg";
        }
        return true;
      },
    }),
  },

  person: {
    name: {
      required: "Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
      maxLength: { value: 30, message: "Maximum 30 characters" },
    },
    contact: {
      required: "Contact is required",
      pattern: {
        value: phoneRegex,
        message: "Must be a valid BD phone number (e.g., 01XXXXXXXXX)",
      },
    },
    address: {
      required: "Address is required",
      minLength: { value: 5, message: "Too short for a valid address" },
      maxLength: { value: 100, message: "Too long (max 100 characters)" },
    },
  },

  instruction: {
    pickup: {
      required: "Pickup instruction is required",
      maxLength: { value: 200, message: "Max 200 characters" },
    },
    delivery: {
      required: "Delivery instruction is required",
      maxLength: { value: 200, message: "Max 200 characters" },
    },
  },

  location: {
    region: {
      required: "Region is required",
    },
    center: {
      required: "Service center is required",
    },
  },
};
