import { ChangeEvent, useState } from "react";

import HeaderForm from "../../components/headerForm/HeaderForm";

import ButtonDownloadRelatorios from "./components/ButtonDownloadRelatorios";
import ItemTurma from "./components/ItemTurma";

import style from "./styles/FormEditarTurmaRedacaoTemplate.module.css";

interface FormData {
  localizacaoTitulo: string;
  nomeVoluntario: string;
  idVoluntario: number;
  idTurma: number;
  numeroDeUnidadePrisional: number;
  reciboDosRelatorios: string;
  emprestimo: string;
  devolucaoDosLivros: string;
  elaboracaoDosRelatorios: string;
  relatoriosListaPresenca: number;
  relatoriosEnviados: number;
  reservaDosVoluntarios: string;
  finalizacaoDaTurma: string;
  devolucaoParaFUNAP: string;
}

// Dados iniciais para testar o formulário de forma provisória
const initialData: FormData[] = [
  {
    localizacaoTitulo: "Penitenciária da papuda",
    nomeVoluntario: "José Gomes Filho",
    idVoluntario: 1,
    idTurma: 1,
    numeroDeUnidadePrisional: 1,
    reciboDosRelatorios: "01/01/1900",
    emprestimo: "01/01/1900",
    devolucaoDosLivros: "01/01/1900",
    elaboracaoDosRelatorios: "01/01/1900",
    relatoriosListaPresenca: 1,
    relatoriosEnviados: 1,
    reservaDosVoluntarios: "01/01/1900",
    finalizacaoDaTurma: "01/01/1900",
    devolucaoParaFUNAP: "01/01/1900",
  },
];

export default function FormularioEditarTurmaRedacaoTemplate() {
  const [formData, setFormData] = useState<FormData[]>(initialData);

  const novaData = "Insira nova data aqui";
  const novoNumero = "Insira novo nº aqui";

  const handleSubmit = () => {
    // Implemente a lógica para salvar todas as alterações (pode enviar para um servidor, atualizar o estado global, etc.)
    // Exemplo: console.log('Salvando alterações:', formData);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
    fieldName: keyof FormData
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newData = [...prevFormData];
      newData[index] = {
        ...newData[index],
        [fieldName]: value,
      };
      return newData;
    });
  };

  return (
    <>
      <HeaderForm />
      <main className={style.container}>
        {formData.map((data, index) => (
          <section key={data.idVoluntario}>
            <div>
              <h1 className={style.localizacaoTitulo}>
                {data.localizacaoTitulo}
              </h1>
              <p className={style.subtitulo}>
                Aqui você consegue alterar as informações desta turma
              </p>
              <ButtonDownloadRelatorios />
            </div>
            <h5 className={style.h5}>Voluntário que avaliou:</h5>
            <div className={style.noEdit}>
              <p>
                Nome: <span>{data.nomeVoluntario}</span>
              </p>
              <p>
                Id: <span>{data.idVoluntario}</span>
              </p>
              <p>
                ID da Turma: <span>{data.idTurma}</span>
              </p>
              <p>
                Número da Unidade prisional:{" "}
                <span>{data.numeroDeUnidadePrisional}</span>
              </p>
            </div>
            <ItemTurma
              label="Recibo dos relatórios"
              value={data.reciboDosRelatorios}
              placeholder={novaData}
              onChange={(e) => handleChange(e, index, "reciboDosRelatorios")}
            />
            <ItemTurma
              label="Empréstimo"
              value={data.emprestimo}
              placeholder={novaData}
              onChange={(e) => handleChange(e, index, "emprestimo")}
            />
            <ItemTurma
              label="Devolução dos livros"
              value={data.devolucaoDosLivros}
              placeholder={novaData}
              onChange={(e) => handleChange(e, index, "devolucaoDosLivros")}
            />
            <ItemTurma
              label="Elaboração dos relatórios"
              value={data.elaboracaoDosRelatorios}
              placeholder={novaData}
              onChange={(e) =>
                handleChange(e, index, "elaboracaoDosRelatorios")}
            />
            <ItemTurma
              label="Relatórios lista de presença"
              value={data.relatoriosListaPresenca.toString()}
              placeholder={novoNumero}
              onChange={(e) =>
                handleChange(e, index, "relatoriosListaPresenca")}
            />
            <ItemTurma
              label="Relatórios enviados"
              value={data.relatoriosEnviados.toString()}
              placeholder={novoNumero}
              onChange={(e) => handleChange(e, index, "relatoriosEnviados")}
            />
            <ItemTurma
              label="Reserva dos voluntários"
              value={data.reservaDosVoluntarios}
              placeholder={novaData}
              onChange={(e) => handleChange(e, index, "reservaDosVoluntarios")}
            />
            <ItemTurma
              label="Finalização da turma"
              value={data.finalizacaoDaTurma}
              placeholder={novaData}
              onChange={(e) => handleChange(e, index, "finalizacaoDaTurma")}
            />
            <ItemTurma
              label="Devolução para FUNAP"
              value={data.devolucaoParaFUNAP}
              placeholder={novaData}
              onChange={(e) => handleChange(e, index, "devolucaoParaFUNAP")}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className={style.btnSubmit}
            >
              Salvar alterações
            </button>
          </section>
        ))}
      </main>
    </>
  );
}
