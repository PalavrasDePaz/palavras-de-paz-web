import React, { useState } from 'react';
import HeaderCadastro from './components/HeaderCadastro';
import styles from './styles/CadastroTemplate.module.css';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import CadastroSegundaTela from './components/CadastroSegundaTela';
import CadastroTerceiraTela from './components/CadastroTerceiraTela';
import Signature from './components/Signature';
import CadastroQuartaTela from './components/CadastroQuartaTela';

export default function cadastroTemplate() {
  const [controller, setController] = useState(0);
  const [formData, setFormData] = useState({});

  const PAGE_1 = 0;
  const PAGE_2 = 1;
  const PAGE_3 = 2;
  const PAGE_4 = 3;

  const buttonCallback = (data) => {
    setFormData((_formData) => ({ ..._formData, data }));
    if (controller !== PAGE_4) {
      setController(controller + 1);
    }
    if (controller === PAGE_4) {
      console.log(formData);
    }
  };

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
          <CadastroQuartaTela
            buttonCallback={ buttonCallback }
            currentData={ formData }
          />
        )}
      </div>
    </>
  );
}
