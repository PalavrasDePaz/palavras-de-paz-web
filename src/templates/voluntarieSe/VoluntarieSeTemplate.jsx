/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import HeaderWorkspace from "../../components/headerWorkspace/HeaderWorkspace";
import { PALAVRAS_DE_PAZ_TOKEN } from "../../constants";
import useGetUser from "../../hooks/useGetUser";

import CadastroPrimeiraTela from "./components/CadastroPrimeiraTela";
import CadastroSegundaTela from "./components/CadastroSegundaTela";
import CadastroTelaFinal from "./components/CadastroTelaFinal";
import CadastroTerceiraTela from "./components/CadastroTerceiraTela";
import Signature from "./components/Signature";

import styles from "./styles/CadastroTemplate.module.css";

export default function CadastroTemplate() {
  const router = useRouter();

  const [controller, setController] = useState(0);
  const [formData, setFormData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);
    if (!token) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  const PAGE_1 = 0;
  const PAGE_2 = 1;
  const PAGE_3 = 2;
  const FINISHED = 3;

  const updateForm = (data) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    setFormData((_formData) => ({ ..._formData, ...data }));

  const buttonCallbackFirstPage = () => {
    setController(controller + 1);
  };

  const buttonCallback = (data) => {
    updateForm(data);
    setController(controller + 1);
  };

  const returnButton = (data) => {
    updateForm(data);
    setController((_controller) => _controller - 1);
  };

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (isLoading) return <></>;

  return (
    <>
      <HeaderWorkspace title="Cadastro de Voluntário" />
      <Signature controller={controller} />
      <div className={styles.main_container_form}>
        {controller === PAGE_1 && (
          <CadastroPrimeiraTela
            buttonCallback={buttonCallbackFirstPage}
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
        {controller === FINISHED && <CadastroTelaFinal data={formData} />}
      </div>
    </>
  );
}
