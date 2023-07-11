import React from "react";
import Image from "next/image";

import IconeLoading from "../../../../public/static/images/icons/iconeLoading.svg";

export default function DetalhesPresenca() {
  return (
    <section>
      <div>
        <Image src={IconeLoading} />
        <h2>
          Detalhes das presenças
          <br />
          dos voluntários
        </h2>
      </div>
      <div>
        <div>
          <span>Selecione uma data</span>
          <div>Calendário</div>
        </div>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <button>Baixar Planilha</button>
      </div>
    </section>
  );
}
