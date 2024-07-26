/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-magic-numbers */
import { useState } from "react";

import SearchBar from "../../../../../components/forms/searchBar";
import LoadingSpinner from "../../../../../components/loadingSpinner/LoadingSpinner";
import GenericModal from "../../../../../components/modal";
import { NotebookClass } from "../../../../../hooks/types";
import useGetNotebooksEvalsList from "../../../../../hooks/useGetNotebooksEvalsList";
import FormEditarAvalCadernoTemplate from "../../../../formEditarAvalCaderno/FormEditarAvalCadernoTemplate";
import { NotebookEval } from "../../../../formEditarAvalCaderno/schema";

import styles from "./styles.module.css";

interface props {
  selectedClasses: NotebookClass[];
}

export default function TabelaAvaliacoes({ selectedClasses }: props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [notebookEvalToEdit, setNotebookEvalToEdit] =
    useState<NotebookEval | null>(null);
  // const [notebookEvalToView, setNotebookEvalToView] = useState<NotebookEval | null>(null);

  const {
    data: notebookEvals,
    isLoading,
    isError,
  } = useGetNotebooksEvalsList(currentPage, selectedClasses);

  // const toggleModalView = (postBookEvalToView: BookEval | null) => {
  //   setBookEvalToView(postBookEvalToView);
  // };

  const toggleModalEdit = (postNotebookEvalToEdit: NotebookEval | null) => {
    setNotebookEvalToEdit(postNotebookEvalToEdit);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getPages = () => {
    const pages = [];

    const totalPages = notebookEvals
      ? Math.ceil(notebookEvals.totalCount / 30)
      : 1;

    const numberPagesShouldHaveBefore = 2;
    const initialPage =
      currentPage > numberPagesShouldHaveBefore
        ? currentPage - numberPagesShouldHaveBefore
        : 1;
    const remnantToAddAfter =
      numberPagesShouldHaveBefore - (currentPage - initialPage);

    const numberPagesShouldHaveAfter = 2 + remnantToAddAfter;
    const finalPage =
      currentPage < totalPages - numberPagesShouldHaveAfter
        ? currentPage + numberPagesShouldHaveAfter
        : totalPages;

    for (let i = initialPage; i <= finalPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className={styles.avaliacoes_itens}>
      <div className={styles.avaliacoes_actions} />

      {!isLoading && !notebookEvals?.nodes?.length && (
        <p>Não há dados para serem exibidos</p>
      )}
      {isError && <p>Erro ao carregar os dados</p>}
      {isLoading && (
        <div className={styles.loadingSpinnerContainer}>
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && notebookEvals?.nodes?.length && (
        <div className={styles.avaliacoes_table_container}>
          <table className={styles.avaliacoes_table}>
            <thead>
              <tr>
                <th>Uni. prisional</th>
                <th>ID da turma</th>
                <th>Nome do voluntário</th>
                <th>Matrícula do aluno</th>
                <th>Nome do aluno</th>
                <th>Carimbo de data/hora</th>
                <th>Data e hora da reserva</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody className={styles.avaliacoes_tbody}>
              {notebookEvals?.nodes?.map((notebookEval: NotebookEval) => (
                <tr className={styles.avaliacoes_tr} key={notebookEval.id}>
                  <td>{notebookEval.fullName}</td>
                  <td>{notebookEval.idpep}</td>
                  <td>
                    {notebookEval.evaluatorName?.length
                      ? notebookEval.evaluatorName
                      : "N/D"}
                  </td>
                  <td>{notebookEval.studentRegistration}</td>
                  <td>{notebookEval.studentName}</td>
                  <td>
                    {notebookEval.evaluatedDate
                      ? new Date(notebookEval.evaluatedDate).toLocaleString()
                      : "N/D"}
                  </td>
                  <td>
                    {notebookEval.reservationDate
                      ? new Date(notebookEval.reservationDate).toLocaleString()
                      : "N/D"}
                  </td>
                  <td>
                    <button
                      onClick={() => toggleModalEdit(notebookEval)}
                      className={styles.visualize_button}
                    >
                      Visualizar/Editar
                    </button>
                  </td>
                  {/* <td>
                    <button
                      onClick={() => toggleModalEdit(bookEval)}
                      className={styles.visualize_button}
                    >
                      Editar
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!!notebookEvals?.nodes?.length && (
        <div className={styles.avaliacoes_pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={!notebookEvals.pageInfo?.hasPreviousPage}
          >
            Anterior
          </button>
          <div>
            {getPages().map((page) => (
              <button
                key={page}
                className={`
                ${styles.avaliacoes_pagination_button}
                  ${
                    page === currentPage &&
                    styles.avaliacoes_pagination_button_active
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!notebookEvals.pageInfo?.hasNextPage}
          >
            Próxima
          </button>
        </div>
      )}

      {/* <GenericModal
        title="Visualizar avaliação de caderno"
        isShown={notebookEvalToView != null}
        onToggle={() => toggleModalView(null)}
      >
        {bookEvalToView != null && (
          <FormEditarAvalCadernoTemplate
            initialData={notebookEvalToView as unknown as NotebookEval}
            evaluationId={notebookEvalToView.id || 0}
            viewOnly
          />
        )}
      </GenericModal> */}

      <GenericModal
        title="Visualizar/Editar avaliação de caderno"
        isShown={notebookEvalToEdit != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {notebookEvalToEdit != null && (
          <FormEditarAvalCadernoTemplate
            initialData={notebookEvalToEdit as unknown as NotebookEval}
            evaluationId={notebookEvalToEdit.id || 0}
            viewOnly={false}
          />
        )}
      </GenericModal>
    </div>
  );
}
