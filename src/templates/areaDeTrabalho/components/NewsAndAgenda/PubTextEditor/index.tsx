/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-expressions */

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { filesize } from "filesize";
import { useDropzone } from "react-dropzone";
import { SlCloudUpload } from "react-icons/sl";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.css";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface Publication {
  id: number | null;
  img: string | null;
  content?: string;
}

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

  const editor = useRef(null);

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
      const newUploadedFile: IFile = {
        file: files[0],
        id: uuidv4(),
        name: files[0].name,
        readableSize: filesize(files[0].size),
        preview: URL.createObjectURL(files[0]),
        progress: 0,
        uploaded: false,
        error: false,
        url: "",
      };

      const stringBase64 = await convertFileToBase64(files[0]);
      newUploadedFile.url = stringBase64 as string;
      if (selectedPublication)
        setSelectedPublication((prev) => {
          if (prev)
            return {
              ...prev,
              img: newUploadedFile.url,
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

  useEffect(() => {
    if (selectedPublication) {
      const id =
        selectedPublication.id !== null
          ? selectedPublication.id
          : publicationList.length + 1;
      setSelectedPublication({
        ...selectedPublication,
        id,
        content,
      });
    }
  }, [content]);

  // chamar mutate pra salvar no backend em breve
  function savePub() {
    if (selectedPublication) {
      // fazer futuras validações nesse trecho
      setPublicationList((prev) => {
        const filteredList = [...prev].filter(
          (item) => item.id !== selectedPublication.id
        );
        return [...filteredList, selectedPublication];
      });
      toast.success("Salvo com sucesso!", {
        autoClose: 600,
      });
    }
    
  }

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      onDrop,
    });

  useEffect(() => {
    if (publicationId === null) {
      setSelectedPublication({
        id: null,
        img: null,
        content: "",
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

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <p className={styles.dragMessage}>Arraste a imagem aqui...</p>;
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

  return (
    <article className={styles.textEditor}>
      <div className={styles.dropImageContainer} {...getRootProps()}>
        <p className={styles.fieldDescription}>Capa da publicação: *</p>
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
      <p className={styles.fieldDescription}>Conteúdo da publicação: *</p>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {}}
      />
      <button className={styles.savePubButton} onClick={() => savePub()}>
        Salvar
      </button>
    </article>
  );
}
