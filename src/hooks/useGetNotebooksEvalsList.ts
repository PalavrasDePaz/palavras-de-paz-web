import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

import { NotebookClass } from "./types";

const getNotebooksEvalsList = async (
  currentPage: number,
  selectedClasses: NotebookClass[]
) => {
  const classesParam = selectedClasses?.length
    ? `&classes=${  selectedClasses.map((c) => c.id).join(",")}`
    : "";
  return (
    await api.get(
      `/notebooks/evaluation-list?page=${currentPage}${  classesParam}`
    )
  ).data;
};

const useGetNotebooksEvalsList = (
  currentPage: number,
  selectedClasses: NotebookClass[]
) =>
  useQuery(["notebooksEvalsList", currentPage], () =>
    getNotebooksEvalsList(currentPage, selectedClasses)
  );

export default useGetNotebooksEvalsList;
