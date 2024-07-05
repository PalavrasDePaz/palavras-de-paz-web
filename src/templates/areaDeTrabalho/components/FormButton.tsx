import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/AvaliarRedacoes.module.css";

interface FormButtonProps {
  idClass: number;
  idVol: number;
  place: string;
  dateReserved: string | null;
  dateConcluded: string | null;
  reserved: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  idClass,
  idVol,
  place,
  dateReserved,
  dateConcluded,
  reserved,
}) => {
  const router = useRouter();
  const handleOpenFormulario = () => {
    localStorage.removeItem("form");
    router.push({
      pathname: "/formulario-avaliacao-redacao",
      query: { idClass, idVol, place, dateReserved, dateConcluded, reserved },
    });
  };

  return (
    <button
      className={styles.avaliarRedacoes_status_preencher_on}
      onClick={handleOpenFormulario}
    >
      Preencher Formulário
    </button>
  );
};

export default FormButton;
