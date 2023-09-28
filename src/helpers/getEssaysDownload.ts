import { api } from "../api";

const downloadPDF = async (url: string, filename: string) => {
  const response = await api.get(url, {
    responseType: "blob",
  });

  const blob = new Blob([response.data], { type: "application/pdf" });
  const objectURL = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectURL;
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(objectURL);
};

export default downloadPDF;
