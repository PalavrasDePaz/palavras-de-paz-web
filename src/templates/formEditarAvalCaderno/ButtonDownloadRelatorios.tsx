import { useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import folderIcon from "../../../public/static/images/icons/folder.svg";
import downloadZipData from "../../helpers/downloadZipData";
import useGetNotebookReport from "../../hooks/useGetNotebookReport";

import style from "./styles/ButtonDownloadRelatorios.module.css";

interface props {
  notebookId: string;
}

const ButtonDownloadRelatorios = ({ notebookId }: props) => {
  const {
    data: response,
    isSuccess,
    isError,
    error,
    mutate,
  } = useGetNotebookReport();

  const handleDownloadClick = () => {
    if (notebookId) mutate({ notebookId });
  };

  useEffect(() => {
    if (isSuccess && response?.data) {
      downloadZipData(
        response.data,
        response.config.url?.replaceAll("/notebooks/download/", "")
          ? `turma_${response.config.url?.replaceAll(
              "/notebooks/download/",
              ""
            )}.zip`
          : "arquivo.zip"
      );
    } else if (isError) {
      toast.error(`Erro ao baixar relatórios: ${(error as Error).message}`);
    }
  }, [response, isSuccess, isError]);

  return (
    <button className={style.downloadRelatorios} onClick={handleDownloadClick}>
      <Image src={folderIcon} alt="ícone de pasta" />
      Baixar relatórios
    </button>
  );
};

export default ButtonDownloadRelatorios;
