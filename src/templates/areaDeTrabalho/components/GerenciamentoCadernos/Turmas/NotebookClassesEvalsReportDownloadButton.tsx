/* eslint-disable max-len */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";

import { NotebookClass } from "../../../../../hooks/types";
import useGetNotebookClassEvalsReport from "../../../../../hooks/useGetNotebookClassEvalsReport";

import styles from "./styles.module.css";

interface props {
  classesToDownload: NotebookClass[];
  isCheckboxChecked: boolean;
  setDownloadItemStatus: Dispatch<
    SetStateAction<Record<string, "error" | "loading" | "success">>
  >;
}

export default function BookClassesEvalsReportDownloadButton({
  classesToDownload,
  isCheckboxChecked,
  setDownloadItemStatus,
}: props) {
  const [toDownload, setToDownload] = useState(false);

  const { mutate } = useGetNotebookClassEvalsReport(setDownloadItemStatus);

  useEffect(() => {
    if (toDownload) {
      const status = {} as Record<string, "error" | "loading" | "success">;
      classesToDownload.forEach((classs) => {
        status[classs.id.toString()] = "success";
      });
      setDownloadItemStatus({ ...status });
      mutate({
        notebookClassIds: classesToDownload.map((classs) =>
          classs.id.toString()
        ),
      });
      setToDownload(false);
    }
  }, [toDownload]);

  return (
    <button disabled={!isCheckboxChecked} onClick={() => setToDownload(true)}>
      <span className={styles.turmas_button_text}>Baixar</span>
      <span className={styles.turmas_button_icon}>
        <HiDownload size={24} />
      </span>
    </button>
  );
}
