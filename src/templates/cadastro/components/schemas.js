import * as yup from 'yup';
import { MANDATORY_FIELD } from './constants';

export const cadastroTela2Schema = yup.object().shape({
  pais: yup.string().required(MANDATORY_FIELD),
  estado: yup.string().required(MANDATORY_FIELD),
  cidade: yup.string().required(MANDATORY_FIELD),
  telefone: yup.string().required(MANDATORY_FIELD),
  escolaridade: yup.string().required(MANDATORY_FIELD),
  curso: yup.string(),
  deficiencia: yup.string(),
  descricaoDeficiencia: yup.string(),
});

export const cadastroTela3Schema = yup.object().shape({
  referral: yup.string(),
  awareness: yup.string(),
  aboutYou: yup.string().required(MANDATORY_FIELD),
  experience: yup.string().required(MANDATORY_FIELD),
  expectations: yup.string().required(MANDATORY_FIELD),
});
