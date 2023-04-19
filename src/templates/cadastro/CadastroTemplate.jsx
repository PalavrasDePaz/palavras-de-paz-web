import React from 'react';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import HeaderCadastro from './components/HeaderCadastro';

export default function cadastroTemplate() {
  const [controller, setController] = React.useState(0);

  return (
    <>
      <HeaderCadastro />
      {controller === 0 && <CadastroPrimeiraTela /> }

    </>
  );
}
