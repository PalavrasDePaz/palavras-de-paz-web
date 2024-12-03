/* eslint-disable react/jsx-curly-newline */
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
import { toast } from "react-toastify";

import brokenImage from "../../../../../public/static/images/broken-image.jpg";
import { api } from "../../../../api";
import GenericModal from "../../../../components/modal";
import { Publication } from "../../../../hooks/types";
import useDeleteSchedule from "../../../../hooks/useDeleteSchedule";

import PubTextEditor from "./PubTextEditor";

import styles from "./styles.module.css";

export default function NewsAndAgenda() {
  const [newsAndAgendaList, setNewsAndAgendaList] = useState(
    {} as Record<number, Publication>
  );

  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const {
    mutate: mutateDelete,
    isSuccess: isSuccessDelete,
    isError: isErrorDelete,
  } = useDeleteSchedule();

  const toggleModalEdit = (pub: Publication | null) => {
    setSelectedPublication(pub);
  };

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

  function removePub(pub: Publication) {
    mutateDelete({ data: pub });
    setNewsAndAgendaList((prev) => {
      const scheduleIndex = Number(pub.fileName.replace("schedule", ""));
      return {
        ...prev,
        [scheduleIndex]: {
          title: `schedule${scheduleIndex}`,
          description: "",
          fileName: `schedule${scheduleIndex}`,
          fileUrl: "",
          file: null,
        },
      };
    });
  }

  useEffect(() => {
    if (isSuccessDelete) {
      toast.success("Excluída com sucesso!");
    } else if (isErrorDelete) {
      toast.error("Ocorreu um erro ao tentar excluir!");
    }
  }, [isSuccessDelete, isErrorDelete]);

  return (
    <section className={styles.containerSectionDados}>
      <div className={styles.dadosFirstDiv}>
        <h2>News and agenda</h2>
      </div>
      <div className={styles.dadosSecondDiv}>
        {newsAndAgendaList[1]?.file ? (
          <div>
            <img
              alt="imagem da publicação 1"
              className={styles.newsThumbnail}
              src={newsAndAgendaList[1].fileUrl ?? brokenImage.src}
              onClick={() => setSelectedPublication(newsAndAgendaList[1])}
            />
            <MdCancel
              className={styles.newsDeleteButton}
              onClick={() => removePub(newsAndAgendaList[1])}
            />
          </div>
        ) : (
          <div>
            <CiCirclePlus
              className={styles.addNews}
              onClick={() =>
                setSelectedPublication({
                  title: "schedule1",
                  description: "",
                  fileName: "schedule1",
                  fileUrl: "",
                  file: null,
                })
              }
            />
          </div>
        )}

        {newsAndAgendaList[2]?.file ? (
          <div>
            <img
              alt="imagem da publicação 2"
              className={styles.newsThumbnail}
              src={newsAndAgendaList[2].fileUrl ?? brokenImage.src}
              onClick={() => setSelectedPublication(newsAndAgendaList[2])}
            />
            <MdCancel
              className={styles.newsDeleteButton}
              onClick={() => removePub(newsAndAgendaList[2])}
            />
          </div>
        ) : (
          <div>
            <CiCirclePlus
              className={styles.addNews}
              onClick={() =>
                setSelectedPublication({
                  title: "schedule2",
                  description: "",
                  fileName: "schedule2",
                  fileUrl: "",
                  file: null,
                })
              }
            />
          </div>
        )}

        {newsAndAgendaList[3]?.file ? (
          <div>
            <img
              alt="imagem da publicação 3"
              className={styles.newsThumbnail}
              src={newsAndAgendaList[3].fileUrl ?? brokenImage.src}
              onClick={() => setSelectedPublication(newsAndAgendaList[3])}
            />
            <MdCancel
              className={styles.newsDeleteButton}
              onClick={() => removePub(newsAndAgendaList[3])}
            />
          </div>
        ) : (
          <div>
            <CiCirclePlus
              className={styles.addNews}
              onClick={() =>
                setSelectedPublication({
                  title: "schedule3",
                  description: "",
                  fileName: "schedule3",
                  fileUrl: "",
                  file: null,
                })
              }
            />
          </div>
        )}

        {newsAndAgendaList[4]?.file ? (
          <div>
            <img
              alt="imagem da publicação 4"
              className={styles.newsThumbnail}
              src={newsAndAgendaList[4].fileUrl ?? brokenImage.src}
              onClick={() => setSelectedPublication(newsAndAgendaList[4])}
            />
            <MdCancel
              className={styles.newsDeleteButton}
              onClick={() => removePub(newsAndAgendaList[4])}
            />
          </div>
        ) : (
          <div>
            <CiCirclePlus
              className={styles.addNews}
              onClick={() =>
                setSelectedPublication({
                  title: "schedule4",
                  description: "",
                  fileName: "schedule4",
                  fileUrl: "",
                  file: null,
                })
              }
            />
          </div>
        )}

        {newsAndAgendaList[5]?.file ? (
          <div>
            <img
              alt="imagem da publicação 5"
              className={styles.newsThumbnail}
              src={newsAndAgendaList[5].fileUrl ?? brokenImage.src}
              onClick={() => setSelectedPublication(newsAndAgendaList[5])}
            />
            <MdCancel
              className={styles.newsDeleteButton}
              onClick={() => removePub(newsAndAgendaList[5])}
            />
          </div>
        ) : (
          <div>
            <CiCirclePlus
              className={styles.addNews}
              onClick={() =>
                setSelectedPublication({
                  title: "schedule5",
                  description: "",
                  fileName: "schedule5",
                  fileUrl: "",
                  file: null,
                })
              }
            />
          </div>
        )}
      </div>

      <GenericModal
        title="Publicação"
        isShown={selectedPublication != null}
        onToggle={() => toggleModalEdit(null)}
      >
        {selectedPublication != null && (
          <PubTextEditor
            selectedPublication={selectedPublication}
            setNewsAndAgendaList={setNewsAndAgendaList}
          />
        )}
      </GenericModal>
    </section>
  );
}
