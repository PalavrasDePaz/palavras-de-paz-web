import img01 from "../../../public/static/images/linkPreviews/link01.png";
import img02 from "../../../public/static/images/linkPreviews/link02.png";

// Imagens dos previews geradas em https://link-previews.stephanbogner.de/

const LINKS = [
  {
    id: 1,
    href: "/publicacoes/arquivos/o-impacto-de-ouca-a-sua-voz-nas-prisoes-brasileiras",
  },
  {
    id: 2,
    href: "https://tprf.org/pt-br/funap-amplia-o-programa-de-educacao-para-a-paz-nas-prisoes-brasileiras/",
    title:
      "FUNAP Amplia o Programa de Educação para a Paz nas Prisões Brasileiras",
    img: img01,
  },
  {
    id: 3,
    href: "https://tprf.org/pt-br/estudo-do-programa-de-educacao-para-a-paz-mostra-beneficios-excepcionais-para-pessoas-encarceradas/",
    title:
      // eslint-disable-next-line max-len
      "Estudo do Programa de Educação para a Paz Mostra Benefícios Excepcionais para Pessoas Encarceradas",
    img: img02,
  },
];

export default LINKS;
