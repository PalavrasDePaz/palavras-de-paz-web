import React, { useEffect, useState } from "react";

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

  return (
    <>
      <HeaderWorkspace title="Cadastro de voluntário" />
      <Signature controller={controller} />
      <div className={styles.main_container_form}>
        {controller === PAGE_1 && (
          <CadastroPrimeiraTela
            buttonCallback={buttonCallback}
            data={formData}
          />
        )}
        {controller === PAGE_2 && (
          <CadastroSegundaTela
            buttonCallback={buttonCallback}
            returnButton={returnButton}
            data={formData}
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
        {controller === FINISHED && <CadastroTelaFinal data={formData} />}
      </div>
    </>
  );
}
