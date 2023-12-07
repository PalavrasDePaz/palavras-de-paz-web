import { toast } from "react-toastify";

export default function toastDuvidaEnviada(message: string) {
  toast.success(message, {
    position: "top-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}
