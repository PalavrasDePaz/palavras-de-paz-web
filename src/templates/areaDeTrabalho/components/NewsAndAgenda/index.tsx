/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */

import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

import GenericModal from "../../../../components/modal";

import PubTextEditor from "./PubTextEditor";

import styles from "./styles.module.css";

interface Publication {
  id: number | null;
  img: string | null;
  content?: string;
}

const exampleData: Publication[] = [
  {
    id: 0,
    img: "https://mais1code.com.br/wp-content/uploads/2022/10/banner-Recovered-3-e1664897741745.png",
    content: "exemplo 1",
  },
  {
    id: 1,
    img: "https://mais1code.com.br/wp-content/uploads/2022/10/banner-Recovered-3-e1664897741745.png",
    content: "exemplo 2",
  },
  {
    id: 2,
    img: "https://mais1code.com.br/wp-content/uploads/2022/10/banner-Recovered-3-e1664897741745.png",
    content: "exemplo 3",
  },
  {
    id: 3,
    img: "https://mais1code.com.br/wp-content/uploads/2022/10/banner-Recovered-3-e1664897741745.png",
    content: "exemplo 4",
  },
  {
    id: 4,
    img: "https://mais1code.com.br/wp-content/uploads/2022/10/banner-Recovered-3-e1664897741745.png",
    content: "exemplo 5",
  },
];

export default function NewsAndAgenda() {
  const [newsAndAgendaList, setNewsAndAgendaList] = useState(exampleData);
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
              src={pub.img ?? ""}
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
                img: null,
                content: "",
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
