import { ChangeEvent, useState } from "react";
import Image from "next/image";

import folderIcon from "../../../public/static/images/icons/folder.svg";
import HeaderForm from "../../components/headerform/HeaderForm";

import CampoEditavel from "./components/CampoEditavel";
import ItemTurma from "./components/ItemTurma";

import style from "./styles/FormEditarRedacao.module.css";

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
  const [editedIndex, setEditedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData[]>(initialData);

  const handleEditClick = (index: number) => {
    setEditedIndex(index);
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
  };

  const handleSaveEdit = (index: number) => {
    // Implemente a lógica para salvar as alterações (pode enviar para um servidor, atualizar o estado global, etc.)
    // Exemplo: console.log('Salvando alterações:', formData[index]);
    setEditedIndex(null);
  };

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
          <div key={data.idVoluntario}>
            {editedIndex === index ? (
              <form>
                <CampoEditavel
                  label="Recibo dos relatórios"
                  value={data.reciboDosRelatorios}
                  onChange={(e) =>
                    handleChange(e, index, "reciboDosRelatorios")}
                />
                <CampoEditavel
                  label="Empréstimo"
                  value={data.emprestimo}
                  onChange={(e) => handleChange(e, index, "emprestimo")}
                />
                <CampoEditavel
                  label="Devolução dos livros"
                  value={data.devolucaoDosLivros}
                  onChange={(e) => handleChange(e, index, "devolucaoDosLivros")}
                />
                <CampoEditavel
                  label="Elaboração dos relatórios"
                  value={data.elaboracaoDosRelatorios}
                  onChange={(e) =>
                    handleChange(e, index, "elaboracaoDosRelatorios")}
                />
                <CampoEditavel
                  label="Relatórios lista de presença"
                  value={data.relatoriosListaPresenca.toString()}
                  onChange={(e) =>
                    handleChange(e, index, "relatoriosListaPresenca")}
                />
                <CampoEditavel
                  label="Relatórios enviados"
                  value={data.relatoriosEnviados.toString()}
                  onChange={(e) => handleChange(e, index, "relatoriosEnviados")}
                />
                <CampoEditavel
                  label="Reserva dos voluntários"
                  value={data.reservaDosVoluntarios}
                  onChange={(e) =>
                    handleChange(e, index, "reservaDosVoluntarios")}
                />
                <CampoEditavel
                  label="Finalização da turma"
                  value={data.finalizacaoDaTurma}
                  onChange={(e) => handleChange(e, index, "finalizacaoDaTurma")}
                />
                <CampoEditavel
                  label="Devolução para FUNAP"
                  value={data.devolucaoParaFUNAP}
                  onChange={(e) => handleChange(e, index, "devolucaoParaFUNAP")}
                />
                <button type="button" onClick={() => handleSaveEdit(index)}>
                  Salvar
                </button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancelar
                </button>
              </form>
            ) : (
              <div>
                <div>
                  <h1 className={style.localizacaoTitulo}>
                    {data.localizacaoTitulo}
                  </h1>
                  <p className={style.subtitulo}>
                    Aqui você consegue alterar as informações desta turma
                  </p>
                </div>
                <a
                  href="/caminho/do/arquivo-de-relatorios"
                  download
                  className={style.downloadRelatorios}
                >
                  <Image src={folderIcon} alt="ícone de pasta" />
                  Baixar relatórios
                </a>
                <h5 className={style.h5}>Voluntário que avaliou:</h5>
                <ItemTurma
                  label="Nome"
                  value={data.nomeVoluntario}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="ID"
                  value={data.idVoluntario.toString()}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="ID da turma"
                  value={data.idTurma.toString()}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Número da unidade prisional"
                  value={data.numeroDeUnidadePrisional.toString()}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Recibo dos relatórios"
                  value={data.reciboDosRelatorios}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Empréstimo"
                  value={data.emprestimo}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Devolução dos livros"
                  value={data.devolucaoDosLivros}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Elaboração dos relatórios"
                  value={data.elaboracaoDosRelatorios}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Relatórios lista de presença"
                  value={data.relatoriosListaPresenca.toString()}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Relatórios enviados"
                  value={data.relatoriosEnviados.toString()}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Reserva dos voluntários"
                  value={data.reservaDosVoluntarios}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Finalização da turma"
                  value={data.finalizacaoDaTurma}
                  onEditClick={() => handleEditClick(index)}
                />
                <ItemTurma
                  label="Devolução para FUNAP"
                  value={data.devolucaoParaFUNAP}
                  onEditClick={() => handleEditClick(index)}
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={style.btnSubmit}
                >
                  Salvar alterações
                </button>
              </div>
            )}
          </div>
        ))}
      </main>
    </>
  );
}
