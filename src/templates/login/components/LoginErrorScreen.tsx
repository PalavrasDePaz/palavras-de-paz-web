import React from "react";
import Link from "next/link";

import {
  ERROR_MESSAGES,
  UNEXPECTED_ERROR,
  VOLUNTEER_NOT_FOUND,
} from "../../../constants";

import BackButton from "./BackButton";

import styles from "../styles/LoginForm.module.css";

type LoginErrorScreenProps = {
  errorMessage: string;
};

const LoginErrorScreen = ({ errorMessage }: LoginErrorScreenProps) => {
  const message = ERROR_MESSAGES[errorMessage] || UNEXPECTED_ERROR;
  const userNotFound = errorMessage === VOLUNTEER_NOT_FOUND;
  return (
    <>
      <p className={styles.formParagraph} style={{ color: "red" }}>
        {message}
      </p>
      {userNotFound && (
        <p>
          Quer se cadastrar como voluntário? <Link href="/cadastro">Aqui.</Link>
        </p>
      )}
      <BackButton />
    </>
  );
};

export default LoginErrorScreen;
