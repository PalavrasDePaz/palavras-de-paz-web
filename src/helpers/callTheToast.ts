import { toast } from "react-toastify";

export default function toastDuvidaEnviada() {
  toast.success("Obrigado pela mensagem. Retornaremos em breve.", {
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
