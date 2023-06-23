import * as yup from "yup";

export const schema = yup.object().shape({
  subject: yup.string().nullable(),
  enoughTime: yup.string().nullable(),
  aproveitamento: yup.string().nullable(),
  improvements: yup.string().nullable(),
  applyInLife: yup.string().nullable(),
  learnedToday: yup.string().nullable(),
  freeform: yup.string().nullable(),
});
