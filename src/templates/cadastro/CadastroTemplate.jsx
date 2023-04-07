import React from 'react';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import CadastroSegundaTela from './components/CadastroSegundaTela';

export default function cadastroTemplate() {
  return (
    <>
      <CadastroPrimeiraTela />
      <CadastroSegundaTela />
    </>
  );
}
