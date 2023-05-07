import React, { useState } from 'react';
import HeaderCadastro from './components/HeaderCadastro';
import styles from './styles/CadastroTemplate.module.css';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import CadastroSegundaTela from './components/CadastroSegundaTela';
import CadastroTerceiraTela from './components/CadastroTerceiraTela';
import Signature from './components/Signature';

export default function cadastroTemplate() {
  const [controller, setController] = useState(0);

  return (
    <>
      <HeaderCadastro />
      <Signature controller={ controller } />
      <div className={ styles.main_container_form }>
        {controller === 0 && (
          <CadastroPrimeiraTela
            setController={ setController }
            controller={ controller }
          />
        )}
        {controller === 1 && (
          <CadastroSegundaTela
            setController={ setController }
            controller={ controller }
          />
        )}
        {controller === 2 && (
          <CadastroTerceiraTela
            setController={ setController }
            controller={ controller }
          />
        )}
        {/* <div className={ styles.main_container_button }>{buttonNext()}</div> */}
      </div>
    </>
  );
}
