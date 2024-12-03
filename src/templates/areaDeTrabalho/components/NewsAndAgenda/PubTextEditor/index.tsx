/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-expressions */

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SlCloudUpload } from "react-icons/sl";
import { toast } from "react-toastify";

import { Publication } from "../../../../../hooks/types";
import useUpdateSchedule from "../../../../../hooks/useUpdateSchedule";
import useUploadSchedule from "../../../../../hooks/useUploadSchedule";

import styles from "./styles.module.css";

export interface IFile {
  id: string;
  name: string;
  readableSize: string;
  uploaded?: boolean;
  preview: string;
  file: File | null;
  progress?: number;
  error?: boolean;
  url: string;
}

interface Props {
  selectedPublication: Publication;
  setNewsAndAgendaList: React.Dispatch<
    React.SetStateAction<Record<number, Publication>>
  >;
}

export default function PubTextEditor({
  selectedPublication,
  setNewsAndAgendaList,
}: Readonly<Props>) {
  const isNewPublication = !selectedPublication.file;
  const [publication, setPublication] = useState(selectedPublication);

  const {
    mutate: mutateUpload,
    isSuccess: isSuccessUpload,
    isError: isErrorUpload,
    reset: resetUpload,
  } = useUploadSchedule();

  const {
    mutate: mutateUpdate,
    isSuccess: isSuccessUpdate,
    isError: isErrorUpdate,
    reset: resetUpdate,
  } = useUpdateSchedule();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof Publication
  ) => {
    const { value } = event.target;
    setPublication((prev) => {
      if (prev)
        return {
          ...prev,
          [fieldName]: value,
        };
      return prev;
    });
  };

  function convertFileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader?.result?.toString();
        resolve(base64String);
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  }

  const handleUpload = useCallback(
    async (files: File[]) => {
      const stringBase64 = await convertFileToBase64(files[0]);
      const url = stringBase64 as string;
      setPublication((prev) => {
        if (prev)
          return {
            ...prev,
            fileUrl: url,
            file: new File([files[0]], `${selectedPublication.fileName}.jpg`),
          };
        return prev;
      });
    },
    [convertFileToBase64]
  );

  const onDrop = useCallback(
    (files: File[]) => handleUpload(files),
    [handleUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/jpg": [],
      },
      onDrop,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <p className={styles.dragMessage}>Arraste a imagem para cá...</p>;
    }

    if (isDragReject) {
      return (
        <p className={styles.dragMessage} data-type="error">
          Tipo de arquivo não suportado
        </p>
      );
    }

    return (
      <p className={styles.dragMessage} data-type="success">
        Solte a imagem aqui
      </p>
    );
  }, [isDragActive, isDragReject]);

  function savePub() {
    mutateUpload({ data: publication });
  }

  function updatePub() {
    mutateUpdate({ data: publication });
  }

  function saveOrUpdatePub() {
    isNewPublication ? savePub() : updatePub();
  }

  useEffect(() => {
    if (isSuccessUpload || isSuccessUpdate) {
      toast.success("Salva com sucesso!");
      setNewsAndAgendaList((prev) => ({
        ...prev,
        [Number(publication.fileName.replace("schedule", ""))]: publication,
      }));
      resetUpdate();
      resetUpload();
    } else if (isErrorUpload || isErrorUpdate) {
      toast.error("Erro ao salvar!");
    }
  }, [isSuccessUpload, isSuccessUpdate, isErrorUpload, isErrorUpdate]);

  return (
    <article className={styles.textEditor}>
      <div className={styles.dropImageContainer} {...getRootProps()}>
        <p className={styles.pubCoverLabel}>Capa da publicação:</p>
        {publication?.fileUrl?.length ? (
          <img
            className={styles.pubCover}
            alt="Capa da publicação"
            src={publication.fileUrl}
          />
        ) : (
          <SlCloudUpload className={styles.pubCover} />
        )}
        <input {...getInputProps()} />
        {renderDragMessage()}
      </div>

      <div className={styles.pubField}>
        <label htmlFor="pubcontent">Conteúdo:</label>
        <textarea
          id="pubContent"
          value={publication?.description}
          name="description"
          onChange={(e) => handleChange(e, "description")}
          cols={100}
          rows={10}
        />
      </div>

      <button
        className={styles.savePubButton}
        onClick={() => saveOrUpdatePub()}
      >
        Salvar
      </button>
    </article>
  );
}
