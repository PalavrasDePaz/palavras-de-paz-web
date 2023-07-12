import * as yup from "yup";

import { REQUIRED_FIELD } from "../../constants";

export const schema = yup.object().shape({
  workshopSubject: yup.string().required(REQUIRED_FIELD),
  enoughTime: yup.string().required(REQUIRED_FIELD),
  studyRetention: yup.string().required(REQUIRED_FIELD),
  howCanWeImprove: yup.string().required(REQUIRED_FIELD),
  applicableKnowledge: yup.string().required(REQUIRED_FIELD),
  differentKnowledgeLearned: yup.string().required(REQUIRED_FIELD),
  whatChallengedYou: yup.string().required(REQUIRED_FIELD),
  expressYourself: yup.string().required(REQUIRED_FIELD),
});
