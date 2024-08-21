/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import Logo from "../../../public/static/images/logo.svg";
import GenericModal from "../../components/modal";
import { Publication } from "../../hooks/types";

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
      setNewsAndAgendaList(JSON.parse(items) as Publication[]);
    }
  }, []);

  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const toggleModalEdit = (selectedPublicationToView: Publication | null) => {
    setSelectedPublication(selectedPublicationToView);
  };

  return (
    <div className={styles.pubs}>
      {newsAndAgendaList.map((pub) => (
        <div
          className={styles.pubContainer}
          style={{
            width: isSmall ? "90%" : "500px",
            height: "auto",
            aspectRatio: "1/1",
            position: "relative",
          }}
          onClick={() => toggleModalEdit(pub)}
          key={pub.id}
        >
          <Image src={pub.img || Logo} alt="Agenda da ONG" layout="fill" />
        </div>
      ))}

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
