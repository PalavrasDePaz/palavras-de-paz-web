import React from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

import { Article } from "./types";

import styles from "./pdfEmbed.module.css";

type PdfEmbedProps = {
  article: Article;
};

const PdfEmbed = ({ article }: PdfEmbedProps) => (
  <>
    <Header />
    <article>
      <meta property="og:title" content={article.title} />
      <meta property="og:description" content={article.description} />
      <meta property="og:url" content={article.url} />
      <meta property="og:image" content={article.image} />
      <div className={styles.pdfTitle}>{article.title}</div>
      <div className={styles.pdfBox}>
        <iframe
          src={`${article.url}#zoom=120`}
          title={article.title}
          className={styles.pdfFile}
        />
      </div>
    </article>

    <Footer />
  </>
);

export default PdfEmbed;
