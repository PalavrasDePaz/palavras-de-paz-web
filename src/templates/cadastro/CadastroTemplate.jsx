/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import HeaderWorkspace from "../../components/headerWorkspace/HeaderWorkspace";
import { PALAVRAS_DE_PAZ_TOKEN } from "../../constants";

import CadastroPrimeiraTela from "./components/CadastroPrimeiraTela";
import CadastroQuartaTela from "./components/CadastroQuartaTela";
import CadastroSegundaTela from "./components/CadastroSegundaTela";
import CadastroTelaFinal from "./components/CadastroTelaFinal";
import CadastroTerceiraTela from "./components/CadastroTerceiraTela";
import Signature from "./components/Signature";

import styles from "./styles/CadastroTemplate.module.css";

export default function cadastroTemplate() {
  const { isReady } = useRouter();
  const [student, setStudent] = useState(false);

  useEffect(() => {
    if (isReady) {
      if (location.pathname === "/inscricaoEstudante") {
        setStudent(true);
      }
    }
  }, [isReady]);

  const [controller, setController] = useState(0);
  const [formData, setFormData] = useState({});

  // No caso de haver um usuário logado, primeiro deslogamos para depois fazer o cadastro.
  useEffect(() => localStorage.removeItem(PALAVRAS_DE_PAZ_TOKEN), []);

  const PAGE_1 = 0;
  const PAGE_2 = 1;
  const PAGE_3 = 2;
  const PAGE_4 = 3;
  const FINISHED = 4;

  const updateForm = (data) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    setFormData((_formData) => ({ ..._formData, ...data }));

  const buttonCallback = (data) => {
    updateForm(data);
    setController(controller + 1);
  };

  const returnButton = (data) => {
    updateForm(data);
    setController((_controller) => _controller - 1);
  };

  const lastPageCallback = (data) => {
    updateForm(data);
    setController(FINISHED);
  };

  return (
    <>
      <HeaderWorkspace title="Cadastro de voluntário" />
      <Signature controller={controller} student={student} />
      <div className={styles.main_container_form}>
        {controller === PAGE_1 && (
          <CadastroPrimeiraTela
            buttonCallback={buttonCallback}
            data={formData}
            student={student}
          />
        )}
        {controller === PAGE_2 && (
          <CadastroSegundaTela
            buttonCallback={student ? lastPageCallback : buttonCallback}
            returnButton={returnButton}
            data={formData}
            student={student}
          />
        )}
        {controller === PAGE_3 && (
          <CadastroTerceiraTela
            buttonCallback={buttonCallback}
            returnButton={returnButton}
            data={formData}
          />
        )}
        {controller === PAGE_4 && (
          <CadastroQuartaTela
            buttonCallback={buttonCallback}
            returnButton={returnButton}
            data={formData}
          />
        )}
        {controller === FINISHED && (
          <CadastroTelaFinal data={formData} student={student} />
        )}
      </div>
    </>
  );
}
