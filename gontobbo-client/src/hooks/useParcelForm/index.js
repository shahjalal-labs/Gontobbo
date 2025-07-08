import { useParcelFormCore } from "./useParcelFormCore";
import { useParcelKeyShortcut } from "./useParcelKeyShortcut";
import { handleParcelSubmit } from "./parcelSubmitHandler";
import { testData as defaultTestData } from "../SendParcel/constants/sendParcel.testData";

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
