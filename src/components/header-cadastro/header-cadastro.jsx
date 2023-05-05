import React from 'react';
import Image from 'next/image';
import logo from '../../../public/static/images/palavras.png';
import favicon from '../../../public/favicon.ico';

function HeaderCadastro4() {
  return (
    <header className="headerCadastro4">
      <div className="img">
        <Image
          width="48px"
          height="48px"
          alt=""
          src={ favicon }
        />
        <Image
          alt=""
          src={ logo }
        />
      </div>
      <h1>Cadastro de Voluntário</h1>
    </header>
  );
}

export default HeaderCadastro4;
