import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";

import { Class } from "../../../../../hooks/types";
import useGetBookClassReport from "../../../../../hooks/useGetBookClassReport";

import styles from "./styles.module.css";

interface props {
  classesToDownload: Class[];
  isCheckboxChecked: boolean;
  setDownloadItemStatus: Dispatch<
    SetStateAction<Record<string, "error" | "loading" | "success">>
  >;
}

export default function BookClassesReportDownloadButton({
  classesToDownload,
  isCheckboxChecked,
  setDownloadItemStatus,
}: props) {
  const [toDownload, setToDownload] = useState(false);
  const [finishedDownloads, setFinishedDownloads] = useState(0);

  const { mutate } = useGetBookClassReport(
    setDownloadItemStatus,
    setFinishedDownloads
  );

  useEffect(() => {
    if (finishedDownloads === classesToDownload.length) {
      setToDownload(false);
    } else if (toDownload) {
      if (finishedDownloads === 0) {
        // setting all items from list to loading
        const status = {} as Record<string, "error" | "loading" | "success">;
        classesToDownload.forEach((classs) => {
          status[classs.idclass.toString()] = "loading";
        });
        setDownloadItemStatus({ ...status });
      }
      mutate({
        bookClassId: classesToDownload[finishedDownloads]?.idclass.toString(),
      });
    }
  }, [toDownload, finishedDownloads]);

  return (
    <button disabled={!isCheckboxChecked} onClick={() => setToDownload(true)}>
      <span className={styles.turmas_button_text}>Baixar Turmas</span>
      <span className={styles.turmas_button_icon}>
        <HiDownload size={24} />
      </span>
    </button>
  );
}
