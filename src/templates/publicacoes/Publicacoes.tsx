/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import Logo from "../../../public/static/images/logo.svg";

import LINKS from "./links";

import styles from "./publicacoes.module.css";

const Publicacoes = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div className={styles.pubs}>
      {LINKS.map(({ id, href, title, img, host, intro }) => (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.externalLink}
          key={id}
        >
          <div className={styles.pubContainer}>
            <div
              style={{
                width: isSmall ? "100%" : "200px",
                height: "auto",
                aspectRatio: "4/3",
                position: "relative",
              }}
            >
              <Image src={img || Logo} alt={title} layout="fill" />
            </div>
            <div className={styles.pubInformations}>
              <span>{host}</span>
              <h1>{title}</h1>
              <p>{intro}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Publicacoes;
