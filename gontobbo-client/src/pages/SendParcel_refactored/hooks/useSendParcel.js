import { useParcelForm } from "../../../hooks/useParcelForm";

export const useSendParcel = () => {
  return useParcelForm(); // simply re-exported for isolation
};
