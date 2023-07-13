import React from "react";

import PdfEmbed from "../../../templates/publicacoes/pdfEmbed/PdfEmbed";
import { Article } from "../../../templates/publicacoes/pdfEmbed/types";

const impactoFile: Article = {
  title: 'O Impacto de "Ouça a Sua Voz" nas Prisões Brasileiras',
  description:
    // eslint-disable-next-line max-len
    "Em 14 de setembro de 2021, a HarperOne publicou o livro revolucionário de Prem Rawat, Ouça a Sua Voz: Como Encontrar a Paz em um Mundo Barulhento. Duas semanas depois, ele se tornou um best-seller do New York Times.",
  url: "/static/assets/article1.pdf",
  image: "https://www.palavrasdepaz.org/static/images/livro.jpg",
};

const Artigo = () => <PdfEmbed article={impactoFile} />;

export default Artigo;
