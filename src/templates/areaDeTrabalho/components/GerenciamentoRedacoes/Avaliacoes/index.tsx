/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-magic-numbers */
import { useState } from "react";

import SearchBar from "../../../../../components/forms/searchBar";
import LoadingSpinner from "../../../../../components/loadingSpinner/LoadingSpinner";
import GenericModal from "../../../../../components/modal";
import { Class } from "../../../../../hooks/types";
import useGetBookEvals from "../../../../../hooks/useGetBookEvals";
import FormEditarAvalLivroTemplate from "../../../../formEditarAvalLivro/FormEditarAvalLivroTemplate";
import { BookEval } from "../../../../formEditarAvalLivro/schema";

import styles from "./styles.module.css";

interface props {
  selectedClasses: Class[];
}

export default function TabelaAvaliacoes({ selectedClasses }: props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookEvalToEdit, setBookEvalToEdit] = useState<BookEval | null>(null);
  // const [bookEvalToView, setBookEvalToView] = useState<BookEval | null>(null);

  const { data: bookEvals, isLoading, isError } = useGetBookEvals(currentPage);

  // const toggleModalView = (postBookEvalToView: BookEval | null) => {
  //   setBookEvalToView(postBookEvalToView);
  // };

  const toggleModalEdit = (postBookEvalToEdit: BookEval | null) => {
    setBookEvalToEdit(postBookEvalToEdit);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getPages = () => {
    const pages = [];

    const totalPages = bookEvals ? Math.ceil(bookEvals.totalCount / 30) : 1;

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
      <div className={styles.avaliacoes_actions}>
        <div className={styles.avaliacoes_searchBar}>
          <SearchBar />
        </div>
      </div>

      {!isLoading && !bookEvals?.nodes?.length && (
        <p>Não há dados para serem exibidos</p>
      )}
      {isError && <p>Erro ao carregar os dados</p>}
      {isLoading && (
        <div className={styles.loadingSpinnerContainer}>
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && bookEvals?.nodes?.length && (
        <div className={styles.avaliacoes_table_container}>
          <table className={styles.avaliacoes_table}>
            <thead>
              <tr>
                <th>ID do voluntário</th>
                <th>Nome do voluntário</th>
                <th>Matrícula do leitor</th>
                <th>Nome do leitor</th>
                <th>Número da turma</th>
                <th>Data e hora da avaliação</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody className={styles.avaliacoes_tbody}>
              {bookEvals?.nodes?.map((bookEval: BookEval) => (
                <tr className={styles.avaliacoes_tr} key={bookEval.id}>
                  <td>{bookEval.evaluatorId}</td>
                  <td>{bookEval.volunteerName}</td>
                  <td>{bookEval.readerRegistration}</td>
                  <td>{bookEval.readerName}</td>
                  <td>{bookEval.classId}</td>
                  <td>{new Date(bookEval.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => toggleModalEdit(bookEval)}
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

      {!!bookEvals?.nodes?.length && (
        <div className={styles.avaliacoes_pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={!bookEvals.pageInfo?.hasPreviousPage}
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
            disabled={!bookEvals.pageInfo?.hasNextPage}
          >
            Próxima
          </button>
        </div>
      )}

      {/* <GenericModal
        title="Visualizar avaliação de livro"
        isShown={bookEvalToView != null}
        onToggle={() => toggleModalView(null)}
      >
        {bookEvalToView != null && (
          <FormEditarAvalLivroTemplate
            initialData={bookEvalToView as unknown as BookEval}
            evaluationId={bookEvalToView.id || 0}
            viewOnly
          />
        )}
      </GenericModal> */}

      <GenericModal
        title="Visualizar/Editar avaliação de livro"
        isShown={bookEvalToEdit != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {bookEvalToEdit != null && (
          <FormEditarAvalLivroTemplate
            initialData={bookEvalToEdit as unknown as BookEval}
            evaluationId={bookEvalToEdit.id || 0}
            viewOnly={false}
          />
        )}
      </GenericModal>
    </div>
  );
}
