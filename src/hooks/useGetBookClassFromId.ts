import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";
import { BookClass } from "../templates/formEditarTurmaRedacao/schema";

const getBookClassFromId = async (bookClassId: string | null) => {
  if (bookClassId === null) return;
  const response = await api.get<BookClass[]>(
    `/book-club-class/from-id/${bookClassId}`
  );
  return response.data.find(
    (bookClass) => bookClass.idclass.toString() === bookClassId
  );
};

const useGetBookClassFromId = (
  bookClassId: string | null
): UseQueryResult<BookClass> =>
  useQuery(["bookClass", bookClassId], () => getBookClassFromId(bookClassId), {
    enabled: !!bookClassId,
    refetchOnWindowFocus: false,
  });

export default useGetBookClassFromId;
