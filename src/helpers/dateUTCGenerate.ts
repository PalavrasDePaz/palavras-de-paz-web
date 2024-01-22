export default function dateUTCGenerate() {
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0"); // O mês começa de 0, então adicionamos 1
  const dia = dataAtual.getDate().toString().padStart(2, "0");

  return `${dia}/${mes}/${ano}`;
}
