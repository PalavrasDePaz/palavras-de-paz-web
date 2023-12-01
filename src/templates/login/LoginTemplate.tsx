import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

import Logo from "../../../public/static/images/logo.svg";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { PALAVRAS_DE_PAZ_TOKEN } from "../../constants";
import useGetUser from "../../hooks/useGetUser";

import LoginForm from "./components/LoginForm";

import styles from "./styles/LoginTemplate.style.module.css";

type TokenInfo = {
  email: string;
  exp: number;
};

const MILLISECONDS_PER_SECOND = 1000;

const getIsTokenExpired = (expDate: number) =>
  new Date() > new Date(expDate * MILLISECONDS_PER_SECOND);

const LoginTemplate = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userEmailFromLocalStorage, setUserEmailFromLocalStorage] = useState<
    string | undefined
  >();

  useEffect(() => {
    const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);
    if (token) {
      const { email, exp } = jwtDecode(token) as TokenInfo;
      const isTokenExpired = getIsTokenExpired(exp);
      if (isTokenExpired) {
        localStorage.removeItem(PALAVRAS_DE_PAZ_TOKEN);
      } else {
        setUserEmail(email);
      }
    }
  }, []);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    }
  }, [userEmail]);

  const { data: user } = useGetUser(userEmail);
  const router = useRouter();

  const logIn = (mail: string) => setUserEmail(mail);

  useEffect(() => {
    if (user) {
      router.push("/area-de-trabalho");
    }
  }, [user]);

  return (
    <section className={styles.loginSection}>
      <Image
        style={{ cursor: "pointer" }}
        src={Logo}
        alt="logo com a frase Palavras de Paz,
        programa de educação para a paz,
        escrito em verde"
        width="333px"
        height="150px"
      />

      <section className={styles.loginSectionForm}>
        {userEmailFromLocalStorage ? (
          <LoadingSpinner />
        ) : (
          <LoginForm logIn={logIn} />
        )}
      </section>
    </section>
  );
};

export default LoginTemplate;
