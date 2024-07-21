import * as yup from "yup";

import { REQUIRED_FIELD } from "../../constants";

export const bookEvalSchema = yup.object().shape({
  id: yup.number().notRequired(),
  volunteerName: yup.string().required(REQUIRED_FIELD),
  readerRegistration: yup.number().required(REQUIRED_FIELD),
  evaluatorId: yup.number().required(REQUIRED_FIELD),
  readerName: yup.string().required(REQUIRED_FIELD),
  classId: yup.number().required(REQUIRED_FIELD),
  createdAt: yup.string().required(REQUIRED_FIELD),
  expirationDate: yup.string().required(REQUIRED_FIELD),
  textAestheticsAvaliation: yup.string().required(REQUIRED_FIELD),
  textReliabilityAvaliation: yup.string().required(REQUIRED_FIELD),
  textClarityAvaliation: yup.string().required(REQUIRED_FIELD),
  isAppropriation: yup.boolean().required(REQUIRED_FIELD),
  observations: yup.string().required(REQUIRED_FIELD),
  concept: yup.string().required(REQUIRED_FIELD),
  bookCriticalAnalysisAvaliation: yup.string().required(REQUIRED_FIELD),
  societyCriticalAnalysisAvaliation: yup.string().required(REQUIRED_FIELD),
  isParcialPlagiarism: yup.boolean().required(REQUIRED_FIELD),
  relevantPhrases: yup.string().required(REQUIRED_FIELD),
  syntheticAvaliation: yup.string().required(REQUIRED_FIELD),
  grammarAvaliation: yup.string().required(REQUIRED_FIELD),
  observedHistories: yup.string().required(REQUIRED_FIELD),
  readHistories: yup.array().required(REQUIRED_FIELD),
});

export type BookEval = yup.InferType<typeof bookEvalSchema>;
