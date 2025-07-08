import { useForm } from "react-hook-form";

export const useParcelFormCore = () => useForm({ mode: "onBlur" });
