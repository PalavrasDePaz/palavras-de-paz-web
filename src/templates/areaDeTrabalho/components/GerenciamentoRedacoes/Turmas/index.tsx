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
import GenericModal from "../../../../../components/modal";
import { Class } from "../../../../../hooks/types";
import useGetBookClasses from "../../../../../hooks/useGetBookClasses";
import FormularioEditarTurmaRedacaoTemplate from "../../../../formEditarTurmaRedacao/FormEditarTurmaRedacaoTemplate";
import { BookClass } from "../../../../formEditarTurmaRedacao/schema";

import BookClassesEvalsReportDownloadButton from "./BookClassesEvalsReportDownloadButton";

import styles from "./styles.module.css";

interface props {
  selectedClasses: Class[];
  setSelectedClasses: Dispatch<SetStateAction<Class[]>>;
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
  const [classToEdit, setClassToEdit] = useState<Class | null>(null);

  const { data: classes, isLoading, isError } = useGetBookClasses(currentPage);

  const [downloadItemStatus, setDownloadItemStatus] = useState<
    Record<string, "loading" | "error" | "success">
  >({});

  const isCheckboxChecked = selectedClasses.length;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      const matchedClass = classes?.nodes?.find(
        (e: Class) => e.idclass.toString() === name
      );
      if (matchedClass) {
        setSelectedClasses((prevClasses) => [...prevClasses, matchedClass]);
      }
    } else {
      setSelectedClasses((prevClasses) =>
        prevClasses.filter(
          (checkedClass: Class) => checkedClass.idclass.toString() !== name
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

  const toggleModalEdit = (postClassToEdit: Class | null) => {
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
          <BookClassesEvalsReportDownloadButton
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
                <th>Uni. Prisional</th>
                <th>ID</th>
                <th>Lista Presença</th>
                <th>QRL</th>
                <th>Data Receb. Relatório</th>
                <th>Voluntário</th>
                <th>Data Reserva Volunt.</th>
                <th>Data Fim Aval.</th>
                <th>Data Envio Funap</th>
                <th> </th>
              </tr>
            </thead>
            <tbody className={styles.turmas_tbody}>
              {classes?.nodes?.map((classData: Class) => (
                <tr key={classData.idclass} className={styles.turmas_tr}>
                  <td>
                    {downloadItemStatus[String(classData.idclass)] ===
                      "loading" && (
                      <span style={{ position: "relative" }}>
                        <MdDownload
                          className={styles.download_loading}
                          data-loading
                        />
                        <span className={styles.download_animation} />
                      </span>
                    )}
                    {downloadItemStatus[String(classData.idclass)] ===
                      "error" && <MdFileDownloadOff data-error />}
                    {downloadItemStatus[String(classData.idclass)] ===
                      "success" && <MdDownloadDone data-success />}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name={classData.idclass.toString()}
                      checked={selectedClasses
                        .map((c) => c.idclass)
                        .includes(classData.idclass)}
                      onChange={handleCheckboxChange}
                    />
                  </td>
                  <td>{classData.placeName}</td>
                  <td>{classData.idclass}</td>
                  <td>{classData.presenceList}</td>
                  <td>{classData.qrl}</td>
                  <td>{classData.reportReceiveDate ?? "N/D"}</td>
                  <td>{classData.volunteerName ?? "N/D"}</td>
                  <td>{classData.sendDateParec ?? "N/D"}</td>
                  <td>{classData.endEvaluationDate ?? "N/D"}</td>
                  <td>{classData.sendDateFunap ?? "N/D"}</td>
                  <td>
                    <button
                      onClick={() => toggleModalEdit(classData)}
                      className={styles.visualize_button}
                    >
                      Visualizar/Editar
                    </button>
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

      <GenericModal
        title="Visualizar/Editar turma de redação"
        isShown={classToEdit != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {classToEdit != null && (
          <FormularioEditarTurmaRedacaoTemplate
            initialData={classToEdit as unknown as BookClass}
            viewOnly={false}
            volunteerFullName={classToEdit.volunteerName}
          />
        )}
      </GenericModal>
    </div>
  );
}
