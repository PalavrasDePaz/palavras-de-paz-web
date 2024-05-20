/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-max-depth */
import { ChangeEvent, useState } from "react";
import { HiDownload } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";

import SearchBar from "../../../../../components/forms/searchBar";
import LoadingSpinner from "../../../../../components/loadingSpinner/LoadingSpinner";
import downloadZIP from "../../../../../helpers/getEssaysDownload";
import { Class } from "../../../../../hooks/types";
import useGetClasses from "../../../../../hooks/useGetClasses";
import useGetClassSelected from "../../../../../hooks/useGetClassSelected";

import styles from "./styles.module.css";

type TabelaTurmasProps = {
  handleChangeActiveTab: () => void;
};

type CheckboxState = {
  [key: number]: boolean;
};

export default function TabelaTurmas({
  handleChangeActiveTab,
}: TabelaTurmasProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});
  const [selectedClasses, setSelectedClasses] = useState<Class[]>([]);
  const [selectedClassId, setSelectedClassId] = useState<undefined | number>(
    undefined
  );

  const { data: classes, isLoading, isError } = useGetClasses(currentPage);
  const { data: classDataNew } = useGetClassSelected(selectedClassId);

  console.log(classes);

  if (classDataNew) {
    console.log("classData", classDataNew);
  }

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

  const isCheckboxChecked = selectedClasses.length;

  async function downloadData() {
    try {
      if (selectedClasses) {
        console.log("selectedClasses", selectedClasses);
        /* const downloadPromises = selectedClasses.map((selectedClass: Class) =>
          downloadZIP(selectedClass.id, `${selectedClass.groupName}`)
        );
        await Promise.all(downloadPromises); */
      }
    } catch (error) {
      console.error("Ocorreu um erro ao baixar os dados:", error);
    }
  }

  async function showData() {
    if (selectedClasses) {
      setSelectedClassId(selectedClasses[0].idclass);
    }

    /* handleChangeActiveTab(); */
  }

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
          <button disabled={!isCheckboxChecked} onClick={showData}>
            <span className={styles.turmas_button_text}>Visualizar</span>
            <span className={styles.turmas_button_icon}>
              <MdEditNote size={24} />
            </span>
          </button>
          <button disabled={!isCheckboxChecked} onClick={downloadData}>
            <span className={styles.turmas_button_text}>Baixar</span>
            <span className={styles.turmas_button_icon}>
              <HiDownload size={24} />
            </span>
          </button>
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
                      onClick={() => {}}
                      className={styles.visualize_button}
                    >
                      Visualizar
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
    </div>
  );
}
