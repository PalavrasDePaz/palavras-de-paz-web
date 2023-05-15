import * as yup from 'yup';
import isMobilePhone from 'validator/lib/isMobilePhone';
import {
  INVALID_PHONE,
  MANDATORY_FIELD,
  MIN_CHARS_INPUTS,
  minCharsMessage,
} from './constants';

export const cadastroTela2Schema = yup.object().shape({
  country: yup.string().required(MANDATORY_FIELD),
  state: yup.string().required(MANDATORY_FIELD),
  city: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  phoneNumber: yup
    .string()
    .required(MANDATORY_FIELD)
    .test(
      'is-valid',
      INVALID_PHONE,
      (value) => (value
        ? isMobilePhone(value)
        : new yup.ValidationError(INVALID_PHONE)),
    ),
  schooling: yup.string().required(MANDATORY_FIELD),
  bachelor: yup
    .string()
    .nullable()
    .transform((o, c) => (o === '' ? null : c))
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  deficiencia: yup.string().required(MANDATORY_FIELD),
  disability: yup
    .string()
    .nullable()
    .transform((o, c) => (o === '' ? null : c))
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
});

export const cadastroTela3Schema = yup.object().shape({
  howFoundPep: yup.string(),
  knowledgePep: yup.string(),
  studiesKnowledge: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  lifeExperience: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  desires: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
});

export const cadastroTela4Schema = yup.object().shape({
  interestFutureRoles: yup.object().shape({
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
  rolesPep: yup.object().shape({
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
  needDeclaration: yup.bool().required(MANDATORY_FIELD),
});
