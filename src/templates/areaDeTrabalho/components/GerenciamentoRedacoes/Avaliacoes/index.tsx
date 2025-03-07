/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import LoadingSpinner from "../../../../../components/loadingSpinner/LoadingSpinner";
import GenericModal from "../../../../../components/modal";
import { Class } from "../../../../../hooks/types";
import useDeleteBookEval from "../../../../../hooks/useDeleteBookEvaluations";
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
  const [bookEvalToDelete, setBookEvalToDelete] = useState<BookEval | null>(
    null
  );

  const {
    data: bookEvals,
    isLoading,
    isError,
    refetch: pageRefetch,
  } = useGetBookEvals(currentPage, selectedClasses);

  const { mutate: mutateDelete, isSuccess: isSuccessDelete } =
    useDeleteBookEval();

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

  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);

  function showDeleteConfirmation(bookEval: BookEval) {
    setBookEvalToDelete(bookEval);
    setShowDeleteConfirmationModal(true);
  }

  function deleteEval() {
    if (bookEvalToDelete?.id) {
      mutateDelete({ evaluationId: bookEvalToDelete.id });
    }
    setShowDeleteConfirmationModal(false);
  }

  useEffect(() => {
    if (isSuccessDelete) {
      pageRefetch();
    }
  }, [isSuccessDelete]);

  const [auth, setAuth] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const authObj = JSON.parse(localStorage.getItem("AUTH") ?? "{}");
    setAuth(authObj);
  }, []);

  return (
    <div className={styles.avaliacoes_itens}>
      <div className={styles.avaliacoes_actions} />

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
                <th>ID</th>
                <th>ID do voluntário</th>
                <th>Nome do voluntário</th>
                <th>Matrícula do leitor</th>
                <th>Nome do leitor</th>
                <th>Número da turma</th>
                <th>Carimbo de data/hora</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody className={styles.avaliacoes_tbody}>
              {bookEvals?.nodes?.map((bookEval: BookEval) => (
                <tr className={styles.avaliacoes_tr} key={bookEval.id}>
                  <td>{bookEval.id}</td>
                  <td>{bookEval.evaluatorId}</td>
                  <td>{bookEval.volunteerName}</td>
                  <td>{bookEval.readerRegistration}</td>
                  <td>{bookEval.readerName}</td>
                  <td>{bookEval.classId}</td>
                  <td>
                    {bookEval.createdAt &&
                      new Date(bookEval.createdAt).toLocaleString()}
                  </td>
                  <td>
                    <button
                      onClick={() => toggleModalEdit(bookEval)}
                      className={styles.visualize_button}
                    >
                      Visualizar/Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.delete_button}
                      onClick={() => showDeleteConfirmation(bookEval)}
                    >
                      Excluir
                    </button>
                  </td>
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

      <GenericModal
        title="Visualizar/Editar avaliação de livro"
        isShown={bookEvalToEdit != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {bookEvalToEdit != null && (
          <FormEditarAvalLivroTemplate
            initialData={bookEvalToEdit as unknown as BookEval}
            evaluationId={bookEvalToEdit.id || 0}
            volunteerName={bookEvalToEdit.volunteerName}
            viewOnly={false}
          />
        )}
      </GenericModal>

      <Modal
        show={showDeleteConfirmationModal}
        handleClose={() => setShowDeleteConfirmationModal(false)}
        onHide={() => setShowDeleteConfirmationModal(false)}
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Excluir Avaliação de Redação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja mesmo excluir essa avaliação? Ao selecionar "Sim" a avaliação
          desaparecerá e não poderá mais ser visualizada/editada.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteConfirmationModal(false)}
          >
            Não
          </Button>
          <Button variant="primary" onClick={() => deleteEval()}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
