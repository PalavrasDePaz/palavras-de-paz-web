import * as yup from "yup";
import { REQUIRED_FIELD } from "../../constants";

export const notebookEvalSchema = yup.object().shape({
  idvol: yup.number().required(REQUIRED_FIELD),

  // ❗ Campos opcionais no backend
  studentPrisonUnit: yup.string().nullable(),
  evaluatorName: yup.string().required(REQUIRED_FIELD),
  evaluatorEmail: yup.string().nullable(),

  // ❗ PERGUNTAS DO CADERNO (todas opcionais no backend)
  subject1: yup.string().nullable(),
  subject2: yup.string().nullable(),
  subject3: yup.string().nullable(),
  subject4: yup.string().nullable(),
  subject5: yup.string().nullable(),
  subject6: yup.string().nullable(),
  subject7: yup.string().nullable(),
  subject8: yup.string().nullable(),
  subject9: yup.string().nullable(),
  subject10: yup.string().nullable(),

  relevantContent: yup.string().nullable(),

  a1: yup.string().nullable(),
  a2: yup.string().nullable(),
  a3: yup.string().nullable(),
  a4: yup.string().nullable(),
  a5: yup.string().nullable(),
  a6: yup.string().nullable(),
  a7: yup.string().nullable(),
  a8: yup.string().nullable(),
  a9: yup.string().nullable(),
  a10: yup.string().nullable(),
  a11: yup.string().nullable(),
  a12: yup.string().nullable(),
  a13: yup.string().nullable(),

  conclusion: yup.string().nullable(),

  approved: yup.boolean().required(REQUIRED_FIELD),
  archivesExclusion: yup.boolean().required(REQUIRED_FIELD),

  // ❗ Campos PROIBIDOS no backend — não devem estar no schema
  // idcad: ❌ REMOVE
  // idpep: ❌ REMOVE
  // studentName: ❌ REMOVE
  // studentRegistration: ❌ REMOVE
  // notebookDirectory: ❌ REMOVE
  // reservationDate: ❌ REMOVE
  // evaluatedDate: ❌ REMOVE

  fullName: yup.string().optional(),
});

export type NotebookEval = yup.InferType<typeof notebookEvalSchema>;
