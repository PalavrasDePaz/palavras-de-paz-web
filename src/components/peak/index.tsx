/* eslint-disable max-len */
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";

import styles from "./styles.module.css";

export default function Peak() {
  return (
    <div className={styles.peakContainer}>
      <h2 className={styles.title}>
        PEAK - Educação para a Paz e Conhecimento
      </h2>
      <h2 className={styles.text}>
        PEAK é um curso educacional complementar, criado por Prem Rawat, para
        lhe apoiar na exploração de seus recursos internos. É um curso de
        autodescoberta que o coloca em contato com suas forças pessoais e a paz
        profunda que existe dentro do seu coração.
      </h2>
      <h2 className={styles.text}>
        O curso, on-line e gratuito, é dirigido para todos os interessados em
        sua paz prática.
      </h2>
      <h2 className={styles.text}>link para o curso em português👇</h2>

      <h5 className="d-flex justify-content-center border-0">
        <Link href="https://www.premrawat.com/pt-br/caminho-para-a-paz/">
          premrawat.com/pt-br/caminho-para-a-paz
        </Link>
      </h5>

      <div className={styles.qrCode}>
        <QRCodeCanvas
          value="https://www.premrawat.com/pt-br/caminho-para-a-paz/"
          size={300}
          level="H"
        />
      </div>

      <h5 className={styles.textQrCode}>
        Aponte a câmera do celular para o QR Code e acesse o curso.
      </h5>
    </div>
  );
}
