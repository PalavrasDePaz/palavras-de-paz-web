import { api } from "../api";

const downloadPDF = async (idvol: number, filename: string) => {
  const response = await api.get(`/book-club-class/available/${idvol}`, {
    responseType: "blob",
  });

  const blob = new Blob([response.data], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  link.click();
  window.URL.revokeObjectURL(link.href);
};

export default downloadPDF;
