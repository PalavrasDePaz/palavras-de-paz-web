/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
/* eslint-disable no-magic-numbers */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "../../../api";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import {
  PALAVRAS_DE_PAZ_TOKEN,
  UNEXPECTED_ERROR,
  VOLUNTEER_ALREADY_EXISTS,
} from "../../../constants";

import { FUTURE_ROLES, SKILLS } from "./constants";

import styles from "../styles/CadastroTemplate.module.css";

const filterValues = (valuesObj, optionsObject) => {
  if (valuesObj === undefined || valuesObj === null) return [];
  // eslint-disable-next-line implicit-arrow-linebreak
  return (
    Object.keys(valuesObj)
      // Pegamos todos os valores de checkbox e transformamos em um array
      .filter((key) => valuesObj[key] !== false)
      // Trocamos os nomes de item pelos labels.
      .map(
        (item) => optionsObject.find((option) => option.value === item)?.label
      )
  );
};

export default function CadastroTelaFinal({ data, user } = props) {
  const router = useRouter();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);

  useEffect(() => {
    const { interestFutureRoles, rolesPep, needDeclaration } = data;
    data.interestFutureRoles = filterValues(interestFutureRoles, FUTURE_ROLES);
    data.rolesPep = filterValues(rolesPep, SKILLS);
    data.needDeclaration = needDeclaration === "sim";

    data.disability = data.deficiencia === "sim" ? data.disability : null;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { deficiencia, passConfirmation, ...restOfData } = data;

    const apiObject = Object.fromEntries(
      Object.entries(restOfData).filter(([, v]) => v != null)
    );

    const finalObject = { ...user, ...apiObject };
    finalObject.pep = 0;

    delete finalObject.idvol;
    delete finalObject.pep;
    delete finalObject.authorPermission;
    delete finalObject.isDisability;
    delete finalObject.opportunities;
    delete finalObject.createdAt;

    api
      .patch(`/volunteers/${data.email}`, finalObject, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => router.push("/login"))
      .catch((error) => {
        if (error.response.status == 422) {
          setIsError(true);
          if (error.response.data.name) {
            setErrorMessage(error.response.data.name);
          }
        } else if (!token?.length) {
          setIsError(true);
          setErrorMessage(
            "Erro ao processar usuário. Por favor, reinicie o processo."
          );
        } else {
          router.push("/login");
        }
      });
  }, []);

  const getContent = () => {
    if (isError) {
      const existingUser = errorMessage === VOLUNTEER_ALREADY_EXISTS;
      const message = existingUser
        ? VOLUNTEER_ALREADY_EXISTS
        : UNEXPECTED_ERROR;
      return (
        <p className={styles.formParagraph} style={{ color: "red" }}>
          {message}
        </p>
      );
    }

    return <LoadingSpinner />;
  };

  return (
    <section>
      {getContent()}
      {isError && (
        <Link href="/">
          <button className={styles.cadastroFormSectionButton}>
            Voltar para a página inicial
          </button>
        </Link>
      )}
    </section>
  );
}
