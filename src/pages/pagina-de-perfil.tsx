import React from "react";

import useGetUser from "../hooks/useGetUser";
import PerfilComponent from "../templates/areaDeTrabalho/components/Pagina-de-perfil";

export default function PerfilPage() {
  useGetUser();

  return <PerfilComponent />;
}
