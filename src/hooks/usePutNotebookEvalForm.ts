import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

type NotebookEvalForm = {
  reservationDate: string;
  evaluatedDate: string;
  subject1: string;
  subject2: string;
  subject3: string;
  subject4: string;
  subject5: string;
  subject6: string;
  subject7: string;
  subject8: string;
  subject9: string;
  subject10: string;
  relevantContent: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  a5: string;
  a6: string;
  a7: string;
  a8: string;
  a9: string;
  a10: string;
  a11: string;
  a12: string;
  a13: string;
  conclusion: string;
  approved: true;
  archivesExclusion: true;
};

type PutNotebookEvalForm = {
  data: NotebookEvalForm;
  notebookId: string;
};

const putNotebookEvalForm = async (
  data: NotebookEvalForm,
  notebookId: string
) => api.put(`/notebooks/${notebookId}`, { ...data });

const usePutNotebookEvalForm = () =>
  useMutation({
    mutationFn: ({ data, notebookId }: PutNotebookEvalForm) =>
      putNotebookEvalForm(data, notebookId),
  });

export default usePutNotebookEvalForm;
