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

import TextEditor from "./TextEditor";

import styles from "./styles.module.css";

interface Publication {
  id: number | null;
  img: string | null;
  content?: string;
}

const exampleData: Publication[] = [
  {
    id: 0,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 1",
  },
  {
    id: 1,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 2",
  },
  {
    id: 2,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 3",
  },
  {
    id: 3,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 4",
  },
  {
    id: 4,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 5",
  },
];

const TOTAL_QUANTITY = 6;

export default function NewsAndAgenda() {
  const [newsAndAgendaList, setNewsAndAgendaList] = useState(exampleData);
  const [newsAndAgendaListToAdd, setNewsAndAgendaListToAdd] = useState<
    number[]
  >([]);
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  useEffect(() => {
    newsAndAgendaListToAdd;
    const complementQuantity = TOTAL_QUANTITY - newsAndAgendaList.length;
    setNewsAndAgendaListToAdd(new Array(complementQuantity).fill(0));
  }, [newsAndAgendaList]);

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
              onClick={() => setSelectedPublication(null)}
            />
          </div>
        ))}
        {newsAndAgendaListToAdd.map((_complementItem, index) => (
          <div key={index}>
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
        ))}
      </div>
      {selectedPublication && (
        <TextEditor publicationId={selectedPublication.id} />
      )}
    </section>
  );
}
