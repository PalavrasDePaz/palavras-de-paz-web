import * as yup from 'yup';
import {
  MANDATORY_FIELD,
  MIN_CHARS_INPUTS,
  minCharsMessage,
} from './constants';

export const cadastroTela2Schema = yup.object().shape({
  pais: yup.string().required(MANDATORY_FIELD),
  estado: yup.string().required(MANDATORY_FIELD),
  cidade: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  telefone: yup.string().required(MANDATORY_FIELD),
  escolaridade: yup.string().required(MANDATORY_FIELD),
  curso: yup.string().min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  deficiencia: yup.string().required(MANDATORY_FIELD),
  descricaoDeficiencia: yup
    .string()
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
});

export const cadastroTela3Schema = yup.object().shape({
  referral: yup.string(),
  awareness: yup.string(),
  aboutYou: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  experience: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  expectations: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
});

export const cadastroTela4Schema = yup.object().shape({
  oportunidades: yup.object().shape({
    facilitadorPresencial: yup.boolean(),
    facilitadorVirtual: yup.boolean(),
    avaliadorRemoto: yup.boolean(),
    captaçãoDeVoluntario: yup.boolean(),
    leituraDeCaderno: yup.boolean(),
    tradutorRemoto: yup.boolean(),
    divulgacao: yup.boolean(),
    captacaoDeGrupos: yup.boolean(),
    leituraDeRedacao: yup.boolean(),
  }),
  habilidades: yup.object().shape({
    administracao: yup.boolean(),
    comunicacao: yup.boolean(),
    jornalismo: yup.boolean(),
    midiasSociais: yup.boolean(),
    radioTV: yup.boolean(),
    RH: yup.boolean(),
    TI: yup.boolean(),
    psicologia: yup.boolean(),
    assistenciaSocial: yup.boolean(),
    outros: yup.boolean(),
  }),
  declaracao: yup.string().required(MANDATORY_FIELD),
});
