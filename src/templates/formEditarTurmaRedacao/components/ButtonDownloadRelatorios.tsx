import { useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import folderIcon from "../../../../public/static/images/icons/folder.svg";
import downloadClassesData from "../../../helpers/classesDataDownload";
import useGetBookClassReport from "../../../hooks/useGetBookClassReport";

import style from "../styles/ButtonDownloadRelatorios.module.css";

interface props {
  bookClassId: string;
}

const ButtonDownloadRelatorios = ({ bookClassId }: props) => {
  const {
    data: responseData,
    isSuccess,
    isError,
    error,
    mutate,
  } = useGetBookClassReport();

  const handleDownloadClick = () => {
    if (bookClassId) mutate({ bookClassId });
  };

  useEffect(() => {
    if (isSuccess && typeof responseData === "string") {
      downloadClassesData(responseData);
    } else if (isError) {
      toast.error(`Erro ao baixar relatórios: ${  (error as Error).message}`);
    }
  }, [responseData, isSuccess, isError]);

  return (
    <button className={style.downloadRelatorios} onClick={handleDownloadClick}>
      <Image src={folderIcon} alt="ícone de pasta" />
      Baixar relatórios
    </button>
  );
};

export default ButtonDownloadRelatorios;
