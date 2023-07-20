import React from "react";

import PdfEmbed from "../../templates/publicacoes/pdfEmbed/PdfEmbed";
import { Article } from "../../templates/publicacoes/pdfEmbed/types";

const impactoFile: Article = {
  title: "Relatório do Primeiro Semestre de 2023",
  description:
    // eslint-disable-next-line max-len
    "Transformando vidas, construindo um futuro melhor.",
  url: "/static/assets/RelatorioSemestral2023_01.pdf",
  image: "https://www.palavrasdepaz.org/static/images/livro.jpg",
};

const Relatorio = () => <PdfEmbed article={impactoFile} />;

export default Relatorio;
