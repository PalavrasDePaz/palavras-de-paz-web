import * as yup from "yup";

import { REQUIRED_FIELD } from "../../constants";

export const schema = yup.object().shape({
  reservationDate: yup.string().required(REQUIRED_FIELD),
  evaluatedDate: yup.string().required(REQUIRED_FIELD),
  subject1: yup.string().required(REQUIRED_FIELD),
  subject2: yup.string().required(REQUIRED_FIELD),
  subject3: yup.string().required(REQUIRED_FIELD),
  subject4: yup.string().required(REQUIRED_FIELD),
  subject5: yup.string().required(REQUIRED_FIELD),
  subject6: yup.string().required(REQUIRED_FIELD),
  subject7: yup.string().required(REQUIRED_FIELD),
  subject8: yup.string().required(REQUIRED_FIELD),
  subject9: yup.string().required(REQUIRED_FIELD),
  subject10: yup.string().required(REQUIRED_FIELD),
  relevantContent: yup.string().required(REQUIRED_FIELD),
  a1: yup.string().required(REQUIRED_FIELD),
  a2: yup.string().required(REQUIRED_FIELD),
  a3: yup.string().required(REQUIRED_FIELD),
  a4: yup.string().required(REQUIRED_FIELD),
  a5: yup.string().required(REQUIRED_FIELD),
  a6: yup.string().required(REQUIRED_FIELD),
  a7: yup.string().required(REQUIRED_FIELD),
  a8: yup.string().required(REQUIRED_FIELD),
  a9: yup.string().required(REQUIRED_FIELD),
  a10: yup.string().required(REQUIRED_FIELD),
  a11: yup.string().required(REQUIRED_FIELD),
  a12: yup.string().required(REQUIRED_FIELD),
  a13: yup.string().required(REQUIRED_FIELD),
  conclusion: yup.string().required(REQUIRED_FIELD),
  approved: yup.boolean().required(REQUIRED_FIELD),
  archivesExclusion: yup.boolean().required(REQUIRED_FIELD),
});