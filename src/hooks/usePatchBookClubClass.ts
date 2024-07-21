import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

const schema = yup.object().shape({
  endEvaluationDate: yup.date().nullable(),
});

type BookClubClass = yup.InferType<typeof schema>;

type PatchBookClubClass = {
  data: BookClubClass;
  idclass: string;
};

const patchBookClubClass = async (data: BookClubClass, idclass: string) =>
  api.patch(`/book-club-class/${idclass}`, { ...data });

const usePatchBookClubClass = () =>
  useMutation({
    mutationFn: ({ data, idclass }: PatchBookClubClass) =>
      patchBookClubClass(data, idclass),
  });

export default usePatchBookClubClass;
