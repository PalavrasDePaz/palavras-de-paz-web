export const INTRO_TEXT =
  // eslint-disable-next-line max-len
  "Nós queremos te ouvir! Nosso programa fala sobre autodescoberta, algo único a cada pessoa, por isso este formulário foi criado para você poder se expressar. Não se preocupe, não há certo ou errado, essas perguntas são para entender suas perspectivas, não é um teste.";

type SelectQuestion = {
  fieldName: string;
  question: string;
  options: string[];
};

export const SELECT_QUESTIONS: SelectQuestion[] = [
  {
    fieldName: "subject",
    question: "Qual foi o tema da aula de hoje?",
    options: [
      "1 - Paz",
      "2 - Apreciação",
      "3 - Força interior",
      "4 - Consciência de si mesmo",
      "5 - Clareza",
      "6 - Entendimento",
      "7 - Dignidade",
      "8 - Escolha",
      "9 - Esperança",
      "10 - Contentamento",
      "Encontro com voluntários",
      "Leitura Livro - Introdução",
      "Leitura Livro - Capitulo 1",
      "Leitura Livro - Capitulo 2",
      "Leitura Livro - Capitulo 3",
      "Leitura Livro - Capitulo 4",
      "Leitura Livro - Capitulo 5",
      "Leitura Livro - Capitulo 6",
      "Leitura Livro - Capitulo 7",
      "Leitura Livro - Capitulo 8",
      "Leitura Livro - Capitulo 9",
      "Leitura Livro - Capitulo 10",
      "Leitura Livro - Capitulo 11",
      "Leitura Livro - Capitulo 12",
      "Orientações para facilitação",
    ],
  },
  {
    fieldName: "enoughTime",
    question: "O tempo foi suficiente?",
    options: ["Sim", "Não"],
  },
  {
    fieldName: "aproveitamento",
    question: "Como você diria que foi o seu aproveitamento hoje?",
    options: ["Excelente", "Bom", "Regular", "Ruim", "Péssimo"],
  },
];

export const OPEN_TEXT_FIELDS = [
  { label: "improvements", text: "No que podemos melhorar?" },
  {
    label: "applyInLife",
    // eslint-disable-next-line max-len
    text: "Você acha que poderá aplicar esses conhecimentos adquiridos na sua vida pessoal e/ou profissional?",
  },
  { label: "learnedToday", text: "O que aprendeu de diferente hoje?" },
  { label: "challenge", text: "O que te desafiou nessa aula?" },
  {
    label: "freeform",
    text: "Expressões - Manifeste aqui tudo o que deseja acrescentar.",
  },
];
