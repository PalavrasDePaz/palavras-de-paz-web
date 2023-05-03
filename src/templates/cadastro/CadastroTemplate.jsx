import React, { useState } from 'react';
import HeaderCadastro from './components/HeaderCadastro';
import styles from './styles/CadastroTemplate.module.css';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import CadastroTerceiraTela from './components/CadastroTerceiraTela';
import Signature from './components/Signature';

export default function cadastroTemplate() {
  const [controller, setController] = useState(0);

  const buttonNext = () => (
    <button
      type="submit"
      className={ styles.cadastroFormSectionButton }
      onClick={ () => setController(1) }
    >
      Próximo
    </button>
  );

  return (
    <>
      <HeaderCadastro />
      <Signature controller={ controller } />
      <div className={ styles.main_container_form }>
        {controller === 0 && (
          <CadastroPrimeiraTela setController={ setController } />
        )}
        {controller === 1 && <CadastroTerceiraTela setController={ setController } />}
        <div className={ styles.main_container_button }>{buttonNext()}</div>
      </div>

    </>
  );
}
