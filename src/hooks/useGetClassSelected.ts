import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getClassSelected = async (classId: number | undefined) =>
  (await api.get(`/book-club-class/from-id/${classId}`)).data;

const useGetClassSelected = (classId: number | undefined) =>
  useQuery(["selectedClass", classId], () => getClassSelected(classId));

export default useGetClassSelected;
