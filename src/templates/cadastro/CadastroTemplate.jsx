import React, { useState } from 'react';
import HeaderCadastro from './components/HeaderCadastro';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import CadastroTerceiraTela from './components/CadastroTerceiraTela';

export default function cadastroTemplate() {
  const [controller, setController] = useState(0);

  return (
    <>
      <HeaderCadastro />
      {controller === 0 && <CadastroPrimeiraTela setController={ setController } />}
      {/* Vamos adaptando conforme as páginas chegam */}
      {controller === 1 && <CadastroTerceiraTela setController={ setController } />}
    </>
  );
}
