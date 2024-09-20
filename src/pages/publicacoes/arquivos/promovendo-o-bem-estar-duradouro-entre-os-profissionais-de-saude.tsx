/* eslint-disable max-len */
import React from "react";

import PdfEmbed from "../../../templates/publicacoes/pdfEmbed/PdfEmbed";
import { Article } from "../../../templates/publicacoes/pdfEmbed/types";

const impactoFile: Article = {
  title:
    "Promovendo o bem-estar duradouro entre os profissionais de saúde por meio de uma iniciativa de bem-estar interativa e online",
  description:
    // eslint-disable-next-line max-len
    "Baseando-se em um estudo de métodos variados conduzido na Prisão Feminina de Adelaide, este artigo explora o impacto do programa no aprendizado dos participantes sobre paz interior.",
  url: "/static/assets/article2.pdf",
  image: "https://www.palavrasdepaz.org/static/images/logo.svg",
};

const Artigo = () => <PdfEmbed article={impactoFile} />;

export default Artigo;
