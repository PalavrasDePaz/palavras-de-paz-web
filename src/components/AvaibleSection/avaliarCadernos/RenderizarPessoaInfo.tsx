import { Section } from "./styled";

const pessoa = {
  nome: "Fulano",
  numeroTurma: "1",
  reservadoEm: "2023-10-07",
  // Outros campos aqui
};

// Função que representa as informações de uma pessoa
export default function RenderizarInfoPessoa() {
  return (
    <div className="main_content__container">
      <Section className="personData">
        <ul className="list">
          <li className="checkbox">
            <input type="checkbox" />
          </li>
          <li className="name">PAULO SERGIO DA SILVA DAMASCENO</li>
          <li className="numero_turma">1001</li>
          <li className="data_reserva">20-02-2004</li>
          <li className="download">Download</li>
          <li className="formulario">Preencher</li>
        </ul>
      </Section>
    </div>
  );
}
