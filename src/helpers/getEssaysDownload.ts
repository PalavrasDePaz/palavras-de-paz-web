import { api } from "../api";

const downloadZIP = async (idClass: number, filename: string) => {
  const response = await api.get(`/book-club-class/download/${idClass}`, {
    responseType: "blob",
  });

  const blob = new Blob([response.data], { type: "application/zip" }); // Alterado o tipo para application/zip
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  link.click();
  window.URL.revokeObjectURL(link.href);
};

export default downloadZIP;
