/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */

import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

import brokenImage from "../../../../../public/static/images/broken-image.jpg";
import GenericModal from "../../../../components/modal";
import { Publication } from "../../../../hooks/types";

import PubTextEditor from "./PubTextEditor";

import styles from "./styles.module.css";

export default function NewsAndAgenda() {
  const [newsAndAgendaList, setNewsAndAgendaList] = useState(
    [] as Publication[]
  );
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const toggleModalEdit = (postPubToEdit: Publication | null) => {
    setSelectedPublication(postPubToEdit);
  };

  function removePub(pub: Publication) {
    setNewsAndAgendaList((prev) => {
      const filteredList = [...prev].filter((item) => item.id !== pub.id);
      return [...filteredList];
    });
  }

  useEffect(() => {
    const items = localStorage.getItem("newsAndAgendaList");
    if (items) {
      setNewsAndAgendaList(JSON.parse(items) as Publication[]);
    }
  }, []);

  return (
    <section className={styles.containerSectionDados}>
      <div className={styles.dadosFirstDiv}>
        <h2>News and agenda</h2>
      </div>
      <div className={styles.dadosSecondDiv}>
        {newsAndAgendaList.map((pub, index) => (
          <div key={index}>
            <img
              alt="imagem da publicação"
              className={styles.newsThumbnail}
              src={pub.img.length ? pub.img : brokenImage.src}
              onClick={() => setSelectedPublication(pub)}
            />
            <MdCancel
              className={styles.newsDeleteButton}
              onClick={() => removePub(pub)}
            />
          </div>
        ))}
        <div>
          <CiCirclePlus
            className={styles.addNews}
            onClick={() =>
              setSelectedPublication({
                id: null,
                img: "",
                content: "",
                title: "",
                link: "",
                host: "",
                summary: "",
                active: false,
                createdAt: null,
              })}
          />
        </div>
      </div>
      <GenericModal
        title="Publicação"
        isShown={selectedPublication != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {selectedPublication != null && (
          <PubTextEditor
            publicationId={selectedPublication.id}
            publicationList={newsAndAgendaList}
            setPublicationList={setNewsAndAgendaList}
          />
        )}
      </GenericModal>
    </section>
  );
}
