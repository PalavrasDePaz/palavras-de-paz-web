// Faz a conversão de uma data no formato yyyy-mm-dd para dd/mm/yyyy
const convertDateFromENtoBR = (date: string) =>
  date.split("-").reverse().join("/");

export default convertDateFromENtoBR;
