/* eslint-disable react/jsx-max-depth */
import { useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";

import SearchBar from "../../../../../components/forms/searchBar";

import styles from "./styles.module.css";

type TabelaAvaliacoesProps = {
  handleChangeActiveTab: () => void;
};

export default function TabelaAvaliacoes({
  handleChangeActiveTab,
}: TabelaAvaliacoesProps) {
  return (
    <div className={styles.avaliacoes_itens}>
      {/* <div className={styles.avaliacoes_actions}>
        <div className={styles.avaliacoes_searchBar}>
          <SearchBar />
        </div>
        <div className={styles.avaliacoes_buttons_actions}>
          <button>
            <span className={styles.avaliacoes_button_text}>Editar</span>
            <span className={styles.avaliacoes_button_icon}>
              <MdEditNote size={24} />
            </span>
          </button>
          <button disabled>
            <span className={styles.avaliacoes_button_text}>Baixar</span>
            <span className={styles.avaliacoes_button_icon}>
              <HiDownload size={24} />
            </span>
          </button>
        </div>
      </div> */}
      <div className={styles.avaliacoes_table_container}>
        <table className={styles.avaliacoes_table}>
          <thead>
            <tr>
              <th> </th>
              <th>Nome</th>
              <th>ID</th>
              <th>Uni. Prisional</th>
              <th> </th>
            </tr>
          </thead>
          <tbody className={styles.avaliacoes_tbody}>
            <tr className={styles.avaliacoes_tr}>
              <td>
                <input type="checkbox" />
              </td>
              <td>Jean Carlos Barreiros dos Santos</td>
              <td>12345</td>
              <td>Uni. Prisional</td>
              <td>Preencher</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className={styles.avaliacoes_pagination}>
        <span>Exibindo de 01 a 10 de 2300 no total.</span>
      </div> */}
    </div>
  );
}
