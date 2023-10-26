import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { REQUIRED_FIELD } from "../../../constants";

const INVALID_MAIL = "Endereço de e-mail inválido";

// Validação do e-mail
const emailFieldConst = yup
  .string()
  .required(REQUIRED_FIELD)
  .test("is-valid", INVALID_MAIL, (value) => isEmail(value));

const schemaLogin = yup.object().shape({
  email: emailFieldConst,
  password: yup.string().required(REQUIRED_FIELD),
});

const schemaResetPass = yup.object().shape({
  email: emailFieldConst,
});

export const getSchema = (passwordForgotten) =>
  passwordForgotten ? schemaResetPass : schemaLogin;

// Redefinição de senha
export const getEmailFieldString = (isForgotten) =>
  isForgotten ? (
    "Informe seu e-mail para enviarmos um link de redefinição de senha"
  ) : (
    <b>E-mail</b>
  );

export const getButtonString = (isPassForgotten) =>
  isPassForgotten ? "Enviar e-mail" : "Entrar";
