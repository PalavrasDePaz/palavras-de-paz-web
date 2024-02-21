import Image from "next/image";

import folderIcon from "../../../../public/static/images/icons/folder.svg";

import style from "../styles/ButtonDownloadRelatorios.module.css";

const ButtonDownloadRelatorios = () => {
  const handleDownloadClick = () => {
    // logica para baixar os relatorios
  };

  return (
    <button className={style.downloadRelatorios} onClick={handleDownloadClick}>
      <Image src={folderIcon} alt="ícone de pasta" />
      Baixar relatórios
    </button>
  );
};

export default ButtonDownloadRelatorios;
