import React from "react";

const VoluntarioFooter = () => (
  <div className="colunas-footer">
    <h6 className="footer-title">Voluntários</h6>
    {new Date() >= new Date("2023-12-17") ? (
      <a
        href="https://www.palavrasdepaz.org/cadastro"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cadastro
      </a>
    ) : (
      <a
        href="https://form.jotform.com/220305437068653"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cadastro
      </a>
    )}
    <a
      href="https://www.atados.com.br/ong/programa-de-educacao-para-paz/vagas"
      target="_blank"
      rel="noopener noreferrer"
    >
      Atados
    </a>
  </div>
);

export default VoluntarioFooter;
