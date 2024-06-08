/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { ChangeEvent, useState } from "react";

import SearchBar from "../../../../../components/forms/searchBar";
import LoadingSpinner from "../../../../../components/loadingSpinner/LoadingSpinner";
import GenericModal from "../../../../../components/modal";
import { Class } from "../../../../../hooks/types";
import useGetBookClasses from "../../../../../hooks/useGetBookClasses";
import FormularioEditarTurmaRedacaoTemplate from "../../../../formEditarTurmaRedacao/FormEditarTurmaRedacaoTemplate";
import { BookClass } from "../../../../formEditarTurmaRedacao/schema";

import BookClassesReportDownloadButton from "./BookClassesReportDownloadButton";

import styles from "./styles.module.css";

type CheckboxState = {
  [key: number]: boolean;
};

export default function TabelaTurmas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});
  const [selectedClasses, setSelectedClasses] = useState<Class[]>([]);
  const [classToEdit, setClassToEdit] = useState<Class | null>(null);
  const [classToView, setClassToView] = useState<Class | null>(null);

  const { data: classes, isLoading, isError } = useGetBookClasses(currentPage);

  const isCheckboxChecked = selectedClasses.length;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({ ...prevState, [name]: checked }));

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

  const toggleModalView = (postClassToView: Class | null) => {
    setClassToView(postClassToView);
  };

  const toggleModalEdit = (postClassToEdit: Class | null) => {
    setClassToEdit(postClassToEdit);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getPages = () => {
    const pages = [];

    const totalPages = classes?.totalCount || 0;

    const limit = 5;

    const currentBlock = Math.ceil(currentPage / limit);

    const initialPage = (currentBlock - 1) * limit + 1;

    const finalPage = Math.min(initialPage + limit - 1, totalPages);

    for (let i = initialPage; i <= finalPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className={styles.turmas_itens}>
      <div className={styles.turmas_actions}>
        <div className={styles.turmas_searchBar}>
          <SearchBar />
        </div>
        <div className={styles.turmas_buttons_actions}>
          {/* eslint-disable-next-line max-len */}
          <BookClassesReportDownloadButton
            classesToDownload={selectedClasses}
            isCheckboxChecked={!!isCheckboxChecked}
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
                <th>Nome</th>
                <th>ID</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody className={styles.turmas_tbody}>
              {classes?.nodes?.map((classData: Class) => (
                <tr key={classData.idclass} className={styles.turmas_tr}>
                  <td>
                    <input
                      type="checkbox"
                      name={classData.idclass.toString()}
                      checked={checkboxes[classData.idclass] || false}
                      onChange={handleCheckboxChange}
                    />
                  </td>
                  <td>{classData.placeName}</td>
                  <td>{classData.idclass}</td>
                  <td>
                    <button
                      onClick={() => toggleModalView(classData)}
                      className={styles.visualize_button}
                    >
                      Visualizar
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => toggleModalEdit(classData)}
                      className={styles.visualize_button}
                    >
                      Editar
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
        title="Visualizar turma de redação"
        isShown={classToView != null}
        onToggle={() => toggleModalView(null)}
      >
        {classToView != null && (
          <FormularioEditarTurmaRedacaoTemplate
            initialData={classToView as unknown as BookClass}
            viewOnly
          />
        )}
      </GenericModal>

      <GenericModal
        title="Editar turma de redação"
        isShown={classToEdit != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {classToEdit != null && (
          <FormularioEditarTurmaRedacaoTemplate
            initialData={classToEdit as unknown as BookClass}
            viewOnly={false}
          />
        )}
      </GenericModal>
    </div>
  );
}
