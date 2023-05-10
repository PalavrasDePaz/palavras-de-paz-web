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
