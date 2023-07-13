import React from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

import styles from "./pdfEmbed.module.css";

type PdfEmbedProps = {
  src: string;
  title: string;
};

const PdfEmbed = ({ src, title }: PdfEmbedProps) => (
  <>
    <Header />
    <article>
      <div className={styles.pdfTitle}>{title}</div>
      <div className={styles.pdfBox}>
        <iframe
          src={`${src}#zoom=120`}
          title={title}
          className={styles.pdfFile}
        />
      </div>
    </article>

    <Footer />
  </>
);

export default PdfEmbed;
