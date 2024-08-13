/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines */
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {
  MdDownload,
  MdDownloadDone,
  MdEditNote,
  MdFileDownloadOff,
} from "react-icons/md";

import LoadingSpinner from "../../../../../components/loadingSpinner/LoadingSpinner";
// import GenericModal from "../../../../../components/modal";
import { NotebookClass } from "../../../../../hooks/types";
import useGetNotebookClasses from "../../../../../hooks/useGetNotebookClasses";

import NotebookClassesEvalsReportDownloadButton from "./NotebookClassesEvalsReportDownloadButton";

// import FormularioEditarTurmaRedacaoTemplate from "../../../../formEditarTurmaRedacao/FormEditarTurmaRedacaoTemplate";
import styles from "./styles.module.css";

interface props {
  selectedClasses: NotebookClass[];
  setSelectedClasses: Dispatch<SetStateAction<NotebookClass[]>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export default function TabelaTurmas({
  selectedClasses,
  setSelectedClasses,
  currentPage,
  setCurrentPage,
  setActiveTab,
}: props) {
  const [classToEdit, setClassToEdit] = useState<NotebookClass | null>(null);

  const {
    data: classes,
    isLoading,
    isError,
  } = useGetNotebookClasses(currentPage);

  const [downloadItemStatus, setDownloadItemStatus] = useState<
    Record<string, "loading" | "error" | "success">
  >({});

  const isCheckboxChecked = selectedClasses.length;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      const matchedClass = classes?.nodes?.find(
        (e: NotebookClass) => String(e.id) === name
      );
      if (matchedClass) {
        setSelectedClasses((prevClasses) => [...prevClasses, matchedClass]);
      }
    } else {
      setSelectedClasses((prevClasses) =>
        prevClasses.filter(
          (checkedClass: NotebookClass) => String(checkedClass.id) !== name
        )
      );
    }
  };

  const handleAllCheckboxClick = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    if (selectedClasses.length) {
      setSelectedClasses([...[]]);
    } else {
      setSelectedClasses([...classes.nodes]);
    }
  };

  const toggleModalEdit = (postClassToEdit: NotebookClass | null) => {
    setClassToEdit(postClassToEdit);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getPages = () => {
    const pages = [];

    const totalPages = classes ? Math.ceil(classes.totalCount / 30) : 1;

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
    <div className={styles.turmas_itens}>
      <div className={styles.turmas_actions}>
        <div className={styles.turmas_buttons_actions}>
          <button disabled={!isCheckboxChecked} onClick={() => setActiveTab(1)}>
            <span className={styles.turmas_button_text}>Visualizar</span>
            <span className={styles.turmas_button_icon}>
              <MdEditNote size={24} />
            </span>
          </button>
          <NotebookClassesEvalsReportDownloadButton
            classesToDownload={selectedClasses}
            isCheckboxChecked={!!isCheckboxChecked}
            setDownloadItemStatus={setDownloadItemStatus}
          />
        </div>
      </div>

      {!isLoading && !classes?.nodes?.length && (
        <p>Não há dados para serem exibidos</p>
      )}
      {isError && <p>Erro ao carregar os dados</p>}
      {isLoading && (
        <div className={styles.loadingSpinnerContainer}>
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && classes?.nodes?.length && (
        <div className={styles.turmas_table_container}>
          <table className={styles.turmas_table}>
            <thead>
              <tr>
                <th> </th>
                <th>
                  <input
                    type="checkbox"
                    checked={!!selectedClasses.length}
                    onClick={handleAllCheckboxClick}
                  />
                  {!!selectedClasses.length &&
                    ` ${selectedClasses.length.toString()}`}
                </th>
                <th>ID</th>
                <th>Grupo</th>
                <th>Data da Turma 1</th>
                <th>Data da Turma 10</th>
                <th>Total</th>
                <th>Total com Certificados</th>
                <th>Uni. Prisional</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody className={styles.turmas_tbody}>
              {classes?.nodes?.map((classData: NotebookClass) => (
                <tr key={classData.id} className={styles.turmas_tr}>
                  <td>
                    {downloadItemStatus[String(classData.id)] === "loading" && (
                      <span style={{ position: "relative" }}>
                        <MdDownload
                          className={styles.download_loading}
                          data-loading
                        />
                        <span className={styles.download_animation} />
                      </span>
                    )}
                    {downloadItemStatus[String(classData.id)] === "error" && (
                      <MdFileDownloadOff data-error />
                    )}
                    {downloadItemStatus[String(classData.id)] === "success" && (
                      <MdDownloadDone data-success />
                    )}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name={String(classData.id)}
                      checked={selectedClasses
                        .map((c) => c.id)
                        .includes(classData.id)}
                      onChange={handleCheckboxChange}
                    />
                  </td>
                  <td>{classData.id}</td>
                  <td>{classData.groupName}</td>
                  <td>{classData.classOneDate}</td>
                  <td>{classData.classTenDate}</td>
                  <td>{classData.numEnrolled}</td>
                  <td>{classData.numEnrolledGotCertificate}</td>
                  <td>{classData.fullName}</td>
                  <td>
                    <a
                      href={classData.notebookDirectory}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className={styles.notebook_directory}
                        disabled={!classData.notebookDirectory?.length}
                      >
                        Ir
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!!classes?.nodes?.length && (
        <div className={styles.turmas_pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={!classes.pageInfo?.hasPreviousPage}
          >
            Anterior
          </button>
          <div>
            {getPages().map((page) => (
              <button
                key={page}
                className={`
                ${styles.turmas_pagination_button}
                  ${
                    page === currentPage &&
                    styles.turmas_pagination_button_active
                  }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!classes.pageInfo?.hasNextPage}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
