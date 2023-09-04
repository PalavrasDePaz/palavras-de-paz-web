import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getDownload = async (idclass: number) => {
  const response = await api.get(`/book-club-class/download/${idclass}`, {
    responseType: "blob",
  });
  // Criação de um URL temporário para um arquivo binário que foi recebido como resposta de uma solicitação HTTP
  return window.URL.createObjectURL(new Blob([response.data]));
};

const useGetDownloadEssays = (idclass: number) =>
  useQuery(["downloadLink", idclass], () => getDownload(idclass));

export default useGetDownloadEssays;
