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

const config = {
  readonly: false,
  placeholder: "",
  uploader: {
    insertImageAsBase64URI: true,
    imagesExtensions: ["jpg", "png", "jpeg"],
    process: (
      formData: FormData,
      xhr: XMLHttpRequest,
      editor: any,
      files: File[]
    ) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event?.target?.result;
        editor.selection.insertImage(base64String);
      };
      reader.readAsDataURL(files[0]);
      return false;
    },
  },
};

interface Props {
  publicationId: number | null;
  publicationList: Publication[];
  setPublicationList: React.Dispatch<React.SetStateAction<Publication[]>>;
}

export default function PubTextEditor({
  publicationId,
  publicationList,
  setPublicationList,
}: Props) {
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (publicationId === null) {
      setSelectedPublication({
        id: null,
        img: "",
        content: "",
        createdAt: null,
      });
    } else {
      const searchedPublication = publicationList.filter(
        (data) => data.id === publicationId
      )[0];
      if (searchedPublication) {
        setSelectedPublication(searchedPublication);
      }
    }
  }, [publicationId]);

  useEffect(() => {
    if (selectedPublication?.content !== undefined) {
      setContent(selectedPublication.content);
    }
  }, [selectedPublication]);

  useEffect(() => {
    if (selectedPublication) {
      setSelectedPublication({
        ...selectedPublication,
        content,
      });
    }
  }, [content]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof Publication
  ) => {
    const { value } = event.target;
    setSelectedPublication((prev) => {
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
      if (selectedPublication)
        setSelectedPublication((prev) => {
          if (prev)
            return {
              ...prev,
              img: url,
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

  function saveInStorage(list: Publication[]) {
    try {
      localStorage.setItem("newsAndAgendaList", JSON.stringify(list));
      toast.success("Salvo com sucesso!", {
        autoClose: 600,
      });
      return true;
    } catch (error) {
      toast.info("Seu limite de espaço foi atingido!");
      return false;
    }
  }

  // chamar mutate pra salvar no backend em breve
  function savePub() {
    if (selectedPublication) {
      // fazer futuras validações nesse trecho
      setPublicationList((prev) => {
        if (selectedPublication.id !== null) {
          const filteredList = [...prev].filter(
            (item) => item.id !== selectedPublication.id
          );
          const newList = [...filteredList, selectedPublication];
          const saved = saveInStorage(newList);
          return saved ? newList : prev;
        }
        const newList = [
          ...prev,
          {
            ...selectedPublication,
            id: publicationList.length + 1,
            createdAt: new Date(),
          },
        ];
        const saved = saveInStorage(newList);
        return saved ? newList : prev;
      });
    }
  }

  return (
    <article className={styles.textEditor}>
      <div className={styles.dropImageContainer} {...getRootProps()}>
        <p className={styles.pubCoverLabel}>Capa da publicação:</p>
        {selectedPublication?.img && (
          <img
            className={styles.pubCover}
            alt="Capa da publicação"
            src={selectedPublication.img}
          />
        )}
        {!selectedPublication?.img && (
          <SlCloudUpload className={styles.pubCover} />
        )}
        <input {...getInputProps()} />
        {renderDragMessage()}
      </div>

      <div className={styles.pubField}>
        <label htmlFor="pubcontent">Conteúdo:</label>
        <textarea
          id="pubContent"
          value={selectedPublication?.content}
          name="content"
          onChange={(e) => handleChange(e, "content")}
          cols={100}
          rows={10}
        />
      </div>

      <button className={styles.savePubButton} onClick={() => savePub()}>
        Salvar
      </button>
    </article>
  );
}
