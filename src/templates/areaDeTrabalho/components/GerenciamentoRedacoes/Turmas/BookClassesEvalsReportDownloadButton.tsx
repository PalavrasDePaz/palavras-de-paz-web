import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";

import { Class } from "../../../../../hooks/types";
import useGetBookClassEvalsReport from "../../../../../hooks/useGetBookClassEvalsReport";

import styles from "./styles.module.css";

interface props {
  classesToDownload: Class[];
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

  const { mutate } = useGetBookClassEvalsReport(setDownloadItemStatus);

  useEffect(() => {
    if (toDownload) {
      const status = {} as Record<string, "error" | "loading" | "success">;
      classesToDownload.forEach((classs) => {
        status[classs.idclass.toString()] = "success";
      });
      setDownloadItemStatus({ ...status });
      mutate({
        bookClassIds: classesToDownload.map((classs) =>
          classs.idclass.toString()
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
