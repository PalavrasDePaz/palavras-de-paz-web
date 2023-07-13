import React from "react";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import styles from "./article.module.css";

const Artigo = () => (
  <>
    <Header />
    <div className={styles.pdfBox}>
      <iframe
        src="/static/assets/article1.pdf#zoom=120"
        title="teste"
        className={styles.pdfFile}
      />
    </div>

    <Footer />
  </>
);

export default Artigo;
