import { useParcelFormCore } from "./useParcelFormCore";
import { useParcelKeyShortcut } from "./useParcelKeyShortcut";
import { handleParcelSubmit } from "./parcelSubmitHandler";
import { defaultTestData } from "../../pages/SendParcel_refactored/constants/sendParcel.testData";

export function useParcelForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useParcelFormCore();

  useParcelKeyShortcut(reset, defaultTestData);

  const onSubmit = (data) => handleParcelSubmit(data, reset);

  return { register, handleSubmit, watch, reset, errors, onSubmit };
}
