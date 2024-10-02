/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
/* eslint-disable no-magic-numbers */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "../../../api";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { UNEXPECTED_ERROR, VOLUNTEER_ALREADY_EXISTS } from "../../../constants";

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

export default function CadastroTelaFinal({ data, student } = props) {
  const router = useRouter();
  const { idpep } = router.query;

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const { interestFutureRoles, rolesPep, needDeclaration } = data;
    data.interestFutureRoles = filterValues(interestFutureRoles, FUTURE_ROLES);
    data.rolesPep = filterValues(rolesPep, SKILLS);
    // e transformar string em boolean
    data.needDeclaration = needDeclaration === "sim" || student;

    // se deficiência não for "sim", não mandamos o valor.
    // (pensando no caso de alguém que preenche, depois muda de ideia e prefere não dizer.)
    data.disability = data.deficiencia === "sim" ? data.disability : null;

    // Também não mandamos o valor do campo de deficiencia, só qual ela é, se houver.
    // E nem a confirmação de password.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { deficiencia, passConfirmation, ...restOfData } = data;

    // Removemos qualquer atributo que esteja nulo
    const apiObject = Object.fromEntries(
      Object.entries(restOfData).filter(([, v]) => v != null)
    );

    if (student === true) {
      apiObject.desires = "";
      apiObject.howFoundPep = "";
      apiObject.knowledgePep = "";
      apiObject.lifeExperience = "";
      apiObject.needDeclaration = false;
      apiObject.studiesKnowledge = "";
    }
    // Mandamos o dado
    const idpepParam = `?idpep=${idpep}`;
    api
      .post(`/volunteers${student ? idpepParam : ""}`, apiObject)
      .then(() => router.push("/login"))
      .catch((error) => {
        if (error.response.status == 422) {
          setIsError(true);
          if (error.response.data.name) {
            setErrorMessage(error.response.data.name);
          }
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
