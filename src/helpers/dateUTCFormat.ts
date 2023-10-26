export default function dateUTCFormat(date: string) {
  const dataNoEstiloAntigo = date;

  const partes = dataNoEstiloAntigo.split("-");
  const ano = partes[0];
  const mes = partes[1];
  const dia = partes[2];

  return `${dia}/${mes}/${ano}`;
}
