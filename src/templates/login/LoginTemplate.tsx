import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useQueryClient } from "@tanstack/react-query";

import Logo from "../../../public/static/images/logo.svg";
import { User } from "../../hooks/types";
import useGetUser from "../../hooks/useGetUser";

import LoginForm from "./components/LoginForm";

import styles from "./styles/LoginTemplate.style.module.css";

const LoginTemplate = () => {
  const router = useRouter();

  const queryClient = useQueryClient();
  const loggedUser: User | undefined = queryClient.getQueryData(["user"]);

  const { data: userData } = useGetUser(
    loggedUser?.volunteer?.email,
    loggedUser?.token
  );

  if (loggedUser || userData) {
    // TODO: mudar para "/area-de-trabalho"
    router.push("/presenca");
  }

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
        <LoginForm />
      </section>
    </section>
  );
};

export default LoginTemplate;
