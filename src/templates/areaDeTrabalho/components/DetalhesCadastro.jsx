import React from "react";
import Image from "next/image";

import Grafico2 from "../../../../public/static/images/icons/grafico2.svg";

export default function DetalhesCadastro() {
  return (
    <section>
      <div>
        <Image src={Grafico2} />
        <h2>
          Detalhes de Cadastro
          <br />
          dos voluntários
        </h2>
      </div>
      <div>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <button>Baixar Planilha</button>
      </div>
    </section>
  );
}
