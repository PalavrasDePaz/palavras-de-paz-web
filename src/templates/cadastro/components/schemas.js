import * as yup from 'yup';
import { MANDATORY_FIELD } from './constants';

export const cadastroTela3Schema = yup.object().shape({
  referral: yup.string(),
  awareness: yup.string(),
  aboutYou: yup.string().required(MANDATORY_FIELD),
  experience: yup.string().required(MANDATORY_FIELD),
  expectations: yup.string().required(MANDATORY_FIELD),
});
