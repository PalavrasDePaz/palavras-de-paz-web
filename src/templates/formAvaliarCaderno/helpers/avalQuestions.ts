interface IOptionsQuestion1 {
  id: number;
  letter: string;
  question: string;
  type: "radio" | "text";
}

const optionsQuestion1: IOptionsQuestion1[] = [
  {
    id: 1,
    letter: "a",
    question: `
      "Eu sei que é possível sentir paz em minha vida."
    `,
    type: "radio",
  },
  {
    id: 2,
    letter: "b",
    question: `
      "Eu sei que um dos meus recursos internos 
      é a capacidade de apreciar e aproveitar a vida."
    `,
    type: "radio",
  },
  {
    id: 3,
    letter: "c",
    question: `
      "Eu sei que tenho forças internas que posso usar para me ajudar na vida."
    `,
    type: "radio",
  },
  {
    id: 4,
    letter: "d",
    question: `
      "À medida que me torno mais auto-consciente, 
      posso viver a vida mais conscientemente."
    `,
    type: "radio",
  },
  {
    id: 5,
    letter: "e",
    question: `
      "Eu entendo que recorrer ao meu recurso interno de clareza para me ajudar na vida."
    `,
    type: "radio",
  },
  {
    id: 6,
    letter: "f",
    question: `
      "Eu entendo a importância de conhecer algo por experiência própria, 
      em vez de apenas acreditar em algo."
    `,
    type: "radio",
  },
  {
    id: 7,
    letter: "g",
    question: `
      "Reconheço que, como ser humano, tenho uma dignidade inata, 
      independentemente das circunstâncias."
    `,
    type: "radio",
  },
  {
    id: 8,
    letter: "h",
    question: `
      "Reconheço que tenho a liberdade e o poder de fazer escolhas diárias 
      e que essas escolhas afetam meu bem estar."
    `,
    type: "radio",
  },
  {
    id: 9,
    letter: "i",
    question: `
      "Eu entendo que a esperança é um recurso interno que pode me ajudar
       a lidar com os momentos desafiadores da vida."
    `,
    type: "radio",
  },
  {
    id: 10,
    letter: "j",
    question: `
      "Eu entendo que posso sentir contentamento, 
      não importa o que aconteça em minha vida."
    `,
    type: "radio",
  },
];

const optionsQuestion2 = [
  "Muito Provavel",
  "Provavel",
  "Neutro",
  "Improvável",
  "Muito Improvável",
  "Não Sei",
];

const optionsQuestion7 = ["Até 35 anos", "36 a 55 anos", "Mais de 55"];

const optionsQuestion8 = ["Masculino", "Feminino", "Outros", "Não Sei"];

const optionsQuestion9 = [
  "Ensino Fundamental Incompleto",
  "Ensino Fundamental Completo",
  "Ensino Médio Incompleto",
  "Ensino Médio Completo",
  "Ensino Superior Incompleto",
  "Ensino Superior Completo",
  "Não Consta",
];

export {
  optionsQuestion1,
  optionsQuestion2,
  optionsQuestion7,
  optionsQuestion8,
  optionsQuestion9,
};
