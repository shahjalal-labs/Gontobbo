import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const showSuccessAlert = ({
  title = "Success!",
  text = "Operation completed successfully.",
  timer = 1500,
  showConfirmButton = false,
}) => {
  return MySwal.fire({
    icon: "success",
    title,
    text,
    timer,
    showConfirmButton,
  });
};

export const showErrorAlert = ({
  title = "Error!",
  text = "Something went wrong.",
  showConfirmButton = true,
  showCancelButton = false,
  icon = "error",
  timer, // no default timer
}) => {
  const options = {
    icon,
    title,
    text,
    showConfirmButton,
    showCancelButton,
  };

  if (timer) {
    options.timer = timer;
  }

  return MySwal.fire(options);
};
