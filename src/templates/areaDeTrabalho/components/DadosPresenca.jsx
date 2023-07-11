import React from "react";
import Image from "next/image";

import Grafico from "../../../../public/static/images/icons/grafico.svg";

export default function DadosPresenca() {
  return (
    <section>
      <div>
        <Image src={Grafico} />
        <h2>Dados e presença dos voluntários</h2>
        <p>Acompanhe os registros e as atividades dos voluntários.</p>
      </div>
      <div>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <button>Baixar Planilha</button>
      </div>
    </section>
  );
}
