import * as yup from 'yup';

export const schema = yup.object().shape({
  subject: yup.string(),
  enoughTime: yup.string(),
  aproveitamento: yup.string(),
  improvements: yup.string(),
  applyInLife: yup.string(),
  learnedToday: yup.string(),
  freeform: yup.string(),
});
