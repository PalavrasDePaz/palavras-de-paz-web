import React, { useEffect, useState } from 'react';
import HeaderCadastro from './components/HeaderCadastro';
import styles from './styles/CadastroTemplate.module.css';
import Signature from './components/Signature';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import CadastroSegundaTela from './components/CadastroSegundaTela';
import CadastroTerceiraTela from './components/CadastroTerceiraTela';
import CadastroQuartaTela from './components/CadastroQuartaTela';
import CadastroTelaFinal from './components/CadastroTelaFinal';

export default function cadastroTemplate() {
  const [controller, setController] = useState(0);
  const [formData, setFormData] = useState({});

  const PAGE_1 = 0;
  const PAGE_2 = 1;
  const PAGE_3 = 2;
  const PAGE_4 = 3;
  const FINISHED = 4;

  const buttonCallback = (data) => {
    setFormData((_formData) => ({ ..._formData, ...data }));
    setController(controller + 1);
  };

  // Provisório enquanto não temos as rotas para mandar os dados.
  useEffect(() => {
    if (controller === FINISHED) {
      console.log(formData);
    }
  }, [controller]);

  return (
    <>
      <HeaderCadastro />
      <Signature controller={ controller } />
      <div className={ styles.main_container_form }>
        {controller === PAGE_1 && (
          <CadastroPrimeiraTela buttonCallback={ buttonCallback } />
        )}
        {controller === PAGE_2 && (
          <CadastroSegundaTela buttonCallback={ buttonCallback } />
        )}
        {controller === PAGE_3 && (
          <CadastroTerceiraTela buttonCallback={ buttonCallback } />
        )}
        {controller === PAGE_4 && (
          <CadastroQuartaTela buttonCallback={ buttonCallback } />
        )}
        {controller === FINISHED && <CadastroTelaFinal />}
      </div>
    </>
  );
}
