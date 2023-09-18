import { api } from "../api";

const getNotebooksDownload = async (
  notebookId: number,
  notebookName: string
) => {
  const response = await api.get(`/notebooks/download/${notebookId}`, {
    responseType: "blob",
  });
  const blob = new Blob([response.data], { type: "application/pdf" }); // Defina o tipo como "application/pdf"
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", notebookName);
  link.click();
  window.URL.revokeObjectURL(link.href);
};

export default getNotebooksDownload;
