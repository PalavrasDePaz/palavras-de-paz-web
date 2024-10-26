/* eslint-disable max-len */
import Link from "next/link";

import styles from "../styles/Voluntarie-se-Button.module.css";

export default function VoluntarieSeButton() {
  return (
    <div className={styles.inscricoes}>
      <h2 className={styles.title}>Complete seu cadastro como voluntário</h2>

      <div className="d-flex justify-content-center border-0">
        <Link href="/voluntarie-se">
          <button className={styles.button}>Voluntarie-se</button>
        </Link>
      </div>
    </div>
  );
}
