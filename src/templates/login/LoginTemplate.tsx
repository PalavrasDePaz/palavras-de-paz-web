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
};

const LoginTemplate = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);
    if (token) {
      const { email } = jwtDecode(token) as TokenInfo;
      setUserEmail(email);
    }
  }, []);

  const { data: user } = useGetUser(userEmail);
  const router = useRouter();

  const logIn = (mail: string) => setUserEmail(mail);

  useEffect(() => {
    if (user) {
      router.push("/presenca");
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
        {userEmail ? <LoadingSpinner /> : <LoginForm logIn={logIn} />}
      </section>
    </section>
  );
};

export default LoginTemplate;
