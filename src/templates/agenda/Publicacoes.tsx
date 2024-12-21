/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-magic-numbers */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import Logo from "../../../public/static/images/logo.svg";
import { api } from "../../api";
import { Publication } from "../../hooks/types";

import styles from "./publicacoes.module.css";

const urlRegex = /https?:\/\/\S*(?=\s|$)/g;

const Publicacoes = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 576px)" });

  const [newsAndAgendaList, setNewsAndAgendaList] = useState(
    {} as Record<number, Publication>
  );

  async function groupSchedules() {
    const indexes = [1, 2, 3, 4, 5];

    indexes.forEach(async (index) => {
      const publication = {
        title: `schedule${index}`,
        description: "",
        fileName: `schedule${index}`,
        fileUrl: "",
        file: null,
      } as Publication;

      try {
        const imageResponse = await api.get(`/static/schedule${index}.jpg`, {
          responseType: "blob",
        });
        publication.file = imageResponse.data;
        publication.fileUrl = URL.createObjectURL(imageResponse.data);
      } catch (e) {
        console.error(e);
      }

      try {
        const jsonResponse = await api.get(`/static/schedule${index}.json`);
        publication.title = jsonResponse.data?.title;
        publication.description = jsonResponse.data?.description;
      } catch (e) {
        console.error(e);
      }

      setNewsAndAgendaList((prev) => ({ ...prev, [index]: publication }));
    });
  }

  useEffect(() => {
    groupSchedules();
  }, []);

  return (
    <div className={styles.pubs}>
      {Object.keys(newsAndAgendaList).map((key) => {
        const pub = newsAndAgendaList[Number(key)];
        let { description } = pub;

        const matches = description.match(urlRegex) ?? [];
        const uniqueMatches = matches.filter(
          (url, index, self) => self.indexOf(url) === index
        );

        uniqueMatches?.forEach((match) => {
          const urlString = ` <a href="${match}" target="_blank">${match}</a> `;
          description = description.replaceAll(match, urlString);
        });

        if (pub.file)
          return (
            <div className={styles.pubContainer}>
              <div className={styles.pubContainerImg} key={pub.fileName}>
                <Image
                  src={pub.fileUrl || Logo}
                  alt="Agenda da ONG"
                  layout="fill"
                />
              </div>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          );

        return <></>;
      })}
    </div>
  );
};

export default Publicacoes;
