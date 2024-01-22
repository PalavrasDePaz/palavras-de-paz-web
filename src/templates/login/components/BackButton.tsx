import React from "react";
import Link from "next/link";

import styles from "../styles/LoginForm.module.css";

export default function BackButton() {
  return (
    <Link href="/" className={styles.loginFormButtonBack}>
      <button className={styles.loginFormButtonBack}>Voltar para a home</button>
    </Link>
  );
}
