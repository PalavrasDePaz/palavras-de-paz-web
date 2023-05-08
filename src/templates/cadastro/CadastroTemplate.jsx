import React, { useState } from 'react';
import HeaderCadastro from './components/HeaderCadastro';
import styles from './styles/CadastroTemplate.module.css';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import CadastroSegundaTela from './components/CadastroSegundaTela';
import CadastroTerceiraTela from './components/CadastroTerceiraTela';
import Signature from './components/Signature';
import CadastroQuartaTela from './components/CadastroQuartaTela';

export default function cadastroTemplate() {
  const [controller, setController] = useState(1);

  const PAGE_1 = 0;
  const PAGE_2 = 1;
  const PAGE_3 = 2;
  const PAGE_4 = 3;

  return (
    <>
      <HeaderCadastro />
      <Signature controller={ controller } />
      <div className={ styles.main_container_form }>
        {controller === PAGE_1 && (
          <CadastroPrimeiraTela
            setController={ setController }
            controller={ controller }
          />
        )}
        {controller === PAGE_2 && (
          <CadastroSegundaTela
            setController={ setController }
            controller={ controller }
          />
        )}
        {controller === PAGE_3 && (
          <CadastroTerceiraTela
            setController={ setController }
            controller={ controller }
          />
        )}
        {controller === PAGE_4 && (<CadastroQuartaTela setController={ setController } />
        )}
      </div>
    </>
  );
}
