import { useParcelFormCore } from "./useParcelFormCore";
import { useParcelKeyShortcut } from "./useParcelKeyShortcut";
import { handleParcelSubmit } from "./parcelSubmitHandler";
import { defaultTestData } from "../../pages/SendParcel_refactored/constants/sendParcel.testData";
import useAuth from "../useAuth";
import useAxiosSecure from "../useAxiosSecure";

export function useParcelForm() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useParcelFormCore();

  useParcelKeyShortcut(reset, defaultTestData);

  const onSubmit = (data) => handleParcelSubmit(data, reset, user, axiosSecure);

  return { register, handleSubmit, watch, reset, errors, onSubmit };
}
