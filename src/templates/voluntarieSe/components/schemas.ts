import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import {
  AT_LEAST_ONE,
  INVALID_MAIL,
  MAIL_NOT_USED,
  MIN_CHARS_INPUTS,
  minCharsMessage,
  PASS_MIN,
  REQUIRED_FIELD,
} from "./constants";
import { isRegisteredEmail } from "./util";

const MIN_PASSWORD_LENGTH = 6;
const MIN_CHARS = 3;
export const MAX_CHARS = 50;

export const cadastroTela1Schema = yup.object().shape({
  email: yup
    .string()
    .required(REQUIRED_FIELD)
    .test("is-valid", INVALID_MAIL, (value) => isEmail(value))
    .test("in-use", MAIL_NOT_USED, (value) => isRegisteredEmail(value))
    .min(MIN_CHARS, minCharsMessage(MIN_CHARS))
    .max(MAX_CHARS),
  password: yup
    .string()
    .required(REQUIRED_FIELD)
    .min(MIN_PASSWORD_LENGTH, PASS_MIN),
});

export const cadastroTela3Schema = yup.object().shape({
  howFoundPep: yup.string().required(REQUIRED_FIELD),
  knowledgePep: yup.string().required(REQUIRED_FIELD),
  studiesKnowledge: yup
    .string()
    .required(REQUIRED_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  lifeExperience: yup
    .string()
    .required(REQUIRED_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
  desires: yup
    .string()
    .required(REQUIRED_FIELD)
    .min(MIN_CHARS_INPUTS, minCharsMessage(MIN_CHARS_INPUTS)),
});

export const cadastroTela4Schema = yup.object().shape({
  interestFutureRoles: yup
    .object()
    .shape({
      facilitadorPresencial: yup.boolean(),
      facilitadorVirtual: yup.boolean(),
      avaliadorRemoto: yup.boolean(),
      captaçãoDeVoluntario: yup.boolean(),
      leituraDeCaderno: yup.boolean(),
      tradutorRemoto: yup.boolean(),
      divulgacao: yup.boolean(),
      captacaoDeGrupos: yup.boolean(),
      leituraDeRedacao: yup.boolean(),
    })
    .test(
      "interestFutureRoles",
      AT_LEAST_ONE,
      (obj) =>
        obj.facilitadorPresencial ||
        obj.facilitadorVirtual ||
        obj.avaliadorRemoto ||
        obj.captaçãoDeVoluntario ||
        obj.leituraDeCaderno ||
        obj.tradutorRemoto ||
        obj.divulgacao ||
        obj.captacaoDeGrupos ||
        obj.leituraDeRedacao
    ),
  rolesPep: yup
    .object()
    .shape({
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
    })
    .test(
      "rolesPep",
      AT_LEAST_ONE,
      (obj) =>
        obj.administracao ||
        obj.comunicacao ||
        obj.jornalismo ||
        obj.midiasSociais ||
        obj.radioTV ||
        obj.RH ||
        obj.TI ||
        obj.psicologia ||
        obj.assistenciaSocial ||
        obj.outros
    ),
  needDeclaration: yup.string().required(REQUIRED_FIELD),
});
