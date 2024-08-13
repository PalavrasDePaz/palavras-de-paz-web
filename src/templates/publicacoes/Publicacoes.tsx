/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import Logo from "../../../public/static/images/logo.svg";
import GenericModal from "../../components/modal";
import { Publication } from "../../hooks/types";

import LINKS from "./links";
import NewsAndAgendaPublication from "./NewsAndAgendaPublication";

import styles from "./publicacoes.module.css";

const Publicacoes = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 576px)" });

  const [newsAndAgendaList, setNewsAndAgendaList] = useState(
    [] as Publication[]
  );

  useEffect(() => {
    const items = localStorage.getItem("newsAndAgendaList");
    if (items) {
      setNewsAndAgendaList(
        (JSON.parse(items) as Publication[]).filter((pub) => pub.active)
      );
    }
  }, []);

  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const toggleModalEdit = (selectedPublicationToView: Publication | null) => {
    setSelectedPublication(selectedPublicationToView);
  };

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
      {newsAndAgendaList.map((pub) => {
        const { id, link, title, img, host, summary } = pub;

        return !link?.length || !host?.length ? (
          <div
            className={styles.pubContainer}
            onClick={() => toggleModalEdit(pub)}
          >
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
              <span>{host ?? "N/D"}</span>
              <h1>{title ?? "N/D"}</h1>
              <p>{summary ?? "N/D"}</p>
            </div>
          </div>
        ) : (
          <a
            href={link}
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
                <span>{host ?? "N/D"}</span>
                <h1>{title ?? "N/D"}</h1>
                <p>{summary ?? "N/D"}</p>
              </div>
            </div>
          </a>
        );
      })}

      <GenericModal
        title="Publicação"
        isShown={selectedPublication != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {selectedPublication != null && (
          <NewsAndAgendaPublication publication={selectedPublication} />
        )}
      </GenericModal>
    </div>
  );
};

export default Publicacoes;
