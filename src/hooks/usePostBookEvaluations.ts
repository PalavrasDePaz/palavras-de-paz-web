import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { schema } from "../templates/formAvaliarRedacao/schema";

type BookEvalForm = yup.InferType<typeof schema>;

type PostBookEvalForm = {
  data: BookEvalForm;
};

const postBookEvalForm = async (data: BookEvalForm) =>
  api.post(`/book-evaluations`, [data]);

const usePostBookEvalForm = () =>
  useMutation({
    mutationFn: ({ data }: PostBookEvalForm) => postBookEvalForm(data),
  });

export default usePostBookEvalForm;
