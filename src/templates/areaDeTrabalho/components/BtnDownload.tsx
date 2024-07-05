import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import downloadZIP from "../../../helpers/getEssaysDownload";

import styles from "../styles/AvaliarRedacoes.module.css";

interface BtnDownloadProps {
  idclass: number;
  place: string;
}

const BtnDownload: React.FC<BtnDownloadProps> = ({ idclass, place }) => (
  <div className={styles.avaliarRedacoes_status_div}>
    <button
      onClick={() => downloadZIP(idclass, `${place}`)}
      className={styles.button_download}
    >
      <Image src={DownloadImage} alt="icone de download" />
      <p>Download</p>
    </button>
  </div>
);

export default BtnDownload;
