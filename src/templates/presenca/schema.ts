import * as yup from "yup";

export const schema = yup.object().shape({
  workshopSubject: yup.string().nullable(),
  enoughTime: yup.string().nullable(),
  studyRetention: yup.string().nullable(),
  howCanWeImprove: yup.string().nullable(),
  applicableKnowledge: yup.string().nullable(),
  differentKnowledgeLearned: yup.string().nullable(),
  whatChallengedYou: yup.string().nullable(),
  expressYourself: yup.string().nullable(),
});
