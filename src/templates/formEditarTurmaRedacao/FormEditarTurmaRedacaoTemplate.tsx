import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

import editBtn from "../../../public/static/images/icons/edit.svg";
import HeaderForm from "../../components/headerform/HeaderForm";

const data = {
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
};

export default function FormularioEditarTurmaRedacaoTemplate() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    locationTitle: data.localizacaoTitulo,
    volunteerName: data.nomeVoluntario,
    volunteerId: data.idVoluntario,
    classId: data.idTurma,
    prisonUnitNumber: data.numeroDeUnidadePrisional,
    reportsReceipt: data.reciboDosRelatorios,
    loan: data.emprestimo,
    booksReturn: data.devolucaoDosLivros,
    reportsElaboration: data.elaboracaoDosRelatorios,
    reportsAttendanceList: data.relatoriosListaPresenca,
    reportsSent: data.relatoriosEnviados,
    volunteersReservation: data.reservaDosVoluntarios,
    classFinalization: data.finalizacaoDaTurma,
    devolutionToFUNAP: data.devolucaoParaFUNAP,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    // Implementar a lógica para salvar as alterações no backend
    setIsEditing(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <HeaderForm />
      <main>
        {data && (
          <div>
            {isEditing ? (
              <form>
                <label>
                  Recibo dos relatórios:
                  <input
                    type="text"
                    name="reportsReceipt"
                    value={formData.reportsReceipt}
                    onChange={handleChange}
                  />
                </label>
                {/* Adicionar os demais campos de edição aqui */}
                <button type="button" onClick={handleSaveEdit}>
                  Salvar
                </button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancelar
                </button>
              </form>
            ) : (
              <div>
                <h1>{data.localizacaoTitulo}</h1>
                <p>Aqui você consegue alterar as informações desta turma</p>
                <h5>Voluntário que avaliou:</h5>
                <p>Nome: {data.nomeVoluntario}</p>
                <p>
                  ID: <span>{data.idVoluntario}</span>
                </p>
                <p>
                  ID da turma: <span>{data.idTurma}</span>
                </p>
                <p>
                  Número da unidade prisional:
                  <span>{data.numeroDeUnidadePrisional}</span>
                </p>
                <p>
                  Recibo dos relatórios: <span>{data.reciboDosRelatorios}</span>
                  <button type="button" onClick={handleEditClick}>
                    <Image
                      src={editBtn}
                      alt="imagem de um lápis, como se fosse para editar"
                      width="10px"
                      height="10px"
                    />
                  </button>
                </p>
                <p>
                  Empréstimo: <span>{data.emprestimo}</span>
                </p>
                <p>
                  Devolução dos livros: <span>{data.devolucaoDosLivros}</span>
                </p>
                <p>
                  Elaboração dos relatórios:
                  <span>{data.elaboracaoDosRelatorios}</span>
                </p>
                <p>
                  Relatórios lista de presença:
                  <span>{data.relatoriosListaPresenca}</span>
                </p>
                <p>
                  Relatórios enviados: <span>{data.relatoriosEnviados}</span>
                </p>
                <p>
                  Reserva dos voluntários:{" "}
                  <span>{data.reservaDosVoluntarios}</span>
                </p>
                <p>
                  Finalização da turma: <span>{data.finalizacaoDaTurma}</span>
                </p>
                <p>
                  Devolução para FUNAP: <span>{data.devolucaoParaFUNAP}</span>
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}
