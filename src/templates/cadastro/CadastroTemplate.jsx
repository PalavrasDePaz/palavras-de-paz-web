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
          <CadastroPrimeiraTela
            buttonCallback={ buttonCallback }
            data={ formData }
          />
        )}
        {controller === PAGE_2 && (
          <CadastroSegundaTela
            buttonCallback={ buttonCallback }
            returnButton={ returnButton }
            data={ formData }
          />
        )}
        {controller === PAGE_3 && (
          <CadastroTerceiraTela
            buttonCallback={ buttonCallback }
            returnButton={ returnButton }
            data={ formData }
          />
        )}
        {controller === PAGE_4 && (
          <CadastroQuartaTela
            buttonCallback={ buttonCallback }
            returnButton={ returnButton }
            data={ formData }
          />
        )}
        {controller === FINISHED && <CadastroTelaFinal />}
      </div>
    </>
  );
}
