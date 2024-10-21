/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import HeaderWorkspace from "../../components/headerWorkspace/HeaderWorkspace";
import { PALAVRAS_DE_PAZ_TOKEN } from "../../constants";
import useLogin from "../../hooks/useLogin";

import CadastroPrimeiraTela from "./components/CadastroPrimeiraTela";
import CadastroSegundaTela from "./components/CadastroSegundaTela";
import CadastroTelaFinal from "./components/CadastroTelaFinal";
import CadastroTerceiraTela from "./components/CadastroTerceiraTela";
import Signature from "./components/Signature";

import styles from "./styles/CadastroTemplate.module.css";

export default function CadastroTemplate() {
  const [controller, setController] = useState(0);
  const [formData, setFormData] = useState({});

  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [user, setUser] = useState(null);

  const loginMutation = useLogin();

  // No caso de haver um usuário logado, primeiro deslogamos para depois fazer o cadastro.
  useEffect(() => localStorage.removeItem(PALAVRAS_DE_PAZ_TOKEN), []);

  const PAGE_1 = 0;
  const PAGE_2 = 1;
  const PAGE_3 = 2;
  const FINISHED = 3;

  useEffect(() => {
    if (loginMutation.isSuccess) {
      setIsLoginFailed(false);
      setUser(loginMutation.data.data.volunteer);
      localStorage.setItem(
        PALAVRAS_DE_PAZ_TOKEN,
        loginMutation.data.data.token
      );
      const {
        attendanceModulePermission,
        bookPermission,
        certificationPermission,
        determineVolunteerModulePermission,
        essayModulePermission,
        manageVolunteerModulePermission,
        notebookModulePermission,
        readPermission,
        moduleNewsPermission,
      } = jwtDecode(loginMutation.data.data.token);
      localStorage.setItem(
        "AUTH",
        JSON.stringify({
          attendanceModulePermission,
          bookPermission,
          certificationPermission,
          determineVolunteerModulePermission,
          essayModulePermission,
          manageVolunteerModulePermission,
          notebookModulePermission,
          readPermission,
          moduleNewsPermission,
        })
      );
    } else if (loginMutation.isError) {
      setController(PAGE_1);
      setIsLoginFailed(true);
    }
  }, [loginMutation.isSuccess, loginMutation.isError]);

  const updateForm = (data) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    setFormData((_formData) => ({ ..._formData, ...data }));

  const loginCallback = (data) => {
    updateForm(data);
    loginMutation.mutate({ email: data.email, password: data.password });
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

  return (
    <>
      <HeaderWorkspace title="Cadastro de Voluntário para Universitários" />
      <Signature controller={controller} />
      <div className={styles.main_container_form}>
        {controller === PAGE_1 && (
          <CadastroPrimeiraTela
            buttonCallback={loginCallback}
            data={formData}
            isLoginFailed={isLoginFailed}
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
        {controller === FINISHED && (
          <CadastroTelaFinal data={formData} user={user} />
        )}
      </div>
    </>
  );
}
