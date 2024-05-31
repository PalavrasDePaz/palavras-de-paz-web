import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { BookClass } from "../templates/formEditarTurmaRedacao/schema";

interface PutBookClass {
  data: BookClass;
  bookClassId: string | null;
}

const putBookClass = async (data: BookClass, bookClassId: string | null) =>
  api.put(`/book-club-class/${bookClassId}`, { ...data });

const usePutBookClass = () =>
  useMutation({
    mutationFn: ({ data, bookClassId }: PutBookClass) =>
      putBookClass(data, bookClassId),
  });

export default usePutBookClass;
