import { useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import { toast } from "react-toastify";

import downloadClassesData from "../../../../../helpers/classesDataDownload";
import { Class } from "../../../../../hooks/types";
import useGetBookClassReport from "../../../../../hooks/useGetBookClassReport";

import styles from "./styles.module.css";

interface props {
  classesToDownload: Class[];
  isCheckboxChecked: boolean;
}

export default function BookClassesReportDownloadButton({
  classesToDownload,
  isCheckboxChecked,
}: props) {
  const {
    data: response,
    isSuccess,
    isError,
    error,
    mutate,
  } = useGetBookClassReport();

  const handleDownloadClick = () => {
    classesToDownload.forEach((bookClass) => {
      mutate({ bookClassId: bookClass.idclass.toString() });
    });
  };

  useEffect(() => {
    if (isSuccess && response?.data) {
      console.log(
        response.config.url?.replaceAll("/book-club-class/download/", "")
      );
      downloadClassesData(
        response.data,
        response.config.url?.replaceAll("/book-club-class/download/", "")
          ? `turma_${ 
              response.config.url?.replaceAll(
                "/book-club-class/download/",
                ""
              ) 
              }.zip`
          : "arquivo.zip"
      );
    } else if (isError) {
      toast.error(`Erro ao baixar relatórios: ${(error as Error).message}`);
    }
  }, [response, isSuccess, isError]);

  return (
    <button disabled={!isCheckboxChecked} onClick={handleDownloadClick}>
      <span className={styles.turmas_button_text}>Baixar</span>
      <span className={styles.turmas_button_icon}>
        <HiDownload size={24} />
      </span>
    </button>
  );
}
