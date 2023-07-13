import React from "react";

import PdfEmbed from "../../../templates/publicacoes/pdfEmbed/PdfEmbed";

const src = "/static/assets/article1.pdf#zoom=120";
const title = 'O Impacto de "Ouça a Sua Voz" nas Prisões Brasileiras';

const Artigo = () => <PdfEmbed src={src} title={title} />;

export default Artigo;
