import React from "react";

import Links from "./Links";

import styles from "./downloads.module.css";

const Downloads = () => (
  <section className={styles.container_section}>
    {Links.map(({ id, img, title, body, href }) => (
      <div key={id} className={styles.div_content}>
        <div>
          <img className={styles.img} src={img} alt="" height={116} />
        </div>
        <h2>{title}</h2>
        <p>{body}</p>
        <a
          href={href}
          download
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className={styles.btnDownload}>Download</button>
        </a>
      </div>
    ))}
  </section>
);

export default Downloads;
