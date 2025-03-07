/* eslint-disable react/jsx-no-useless-fragment */
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
import useGetUser from "../../../hooks/useGetUser";
import useUserEmail from "../../../hooks/useUserEmail";

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

export default function CadastroTelaFinal({ data } = props) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);

  const userEmail = useUserEmail();
  const { data: user } = useGetUser(userEmail);

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

    const finalObject = {
      ...user,
      ...apiObject,
      bachelor: apiObject?.bachelor ?? "",
    };

    delete finalObject.pep;
    delete finalObject.idvol;
    delete finalObject.isDisability;
    delete finalObject.opportunities;
    delete finalObject.createdAt;

    delete finalObject.courseOne;
    delete finalObject.courseTwo;
    delete finalObject.authorization;
    delete finalObject.authorPermission;
    delete finalObject.bookclubPermission;
    delete finalObject.notebookPermission;
    delete finalObject.certificate;

    setIsLoading(true);
    api
      .patch(`/volunteers/${finalObject.email}`, finalObject, {
        headers: {
          Authorization: `Bearer ${token}`,
          turma: finalObject.howFoundPep,
        },
      })
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          window.location.replace("/area-de-trabalho");
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        if (error.response.status == 422) {
          if (error.response.data.name) {
            setErrorMessage(error.response.data.name);
          }
        } else if (!token?.length) {
          setErrorMessage(
            "Erro ao processar usuário. Por favor, reinicie o processo."
          );
        } else {
          router.push("/login");
        }
      });
  }, []);

  return (
    <section>
      {isLoading && (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && isError ? (
        (() => {
          const existingUser = errorMessage === VOLUNTEER_ALREADY_EXISTS;
          const message = existingUser
            ? VOLUNTEER_ALREADY_EXISTS
            : UNEXPECTED_ERROR;
          return (
            <p className={styles.formParagraph} style={{ color: "red" }}>
              {message}
            </p>
          );
        })()
      ) : (
        <></>
      )}
      {!isLoading && isError && (
        <Link href="/">
          <button className={styles.cadastroFormSectionButton}>
            Voltar para a página inicial
          </button>
        </Link>
      )}
      {isSuccess && (
        <p
          className={styles.formParagraph}
          style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}
        >
          Processo concluído com sucesso! Você será redirecionado para página
          inicial em breve.
        </p>
      )}
    </section>
  );
}
