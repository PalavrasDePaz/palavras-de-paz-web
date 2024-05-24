/* eslint-disable react/jsx-max-depth */
import styles from "./styles.module.css";

export default function TabelaAvaliacoes() {
  return (
    <div className={styles.avaliacoes_itens}>
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
              <td>Nome da turma</td>
              <td>12345</td>
              <td>Uni. Prisional</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
