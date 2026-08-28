/* eslint-disable no-console */
import { useState } from "react";

import { api } from "../api/index";

const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_CONFLICT = 409;

interface UserData {
  idVol: number;
  manag: number;
  comm: number;
  tec: number;
  event: number;
  att: number;
}

const usePostVolunteerHours = () => {
  const [responseStatus, setResponseStatus] = useState("notResponded");

  const postVolunteerHours = async (userData: UserData) => {
    try {
      const response = await api.post("/volunteers/hours", userData);

      if (response.status === HTTP_STATUS_CREATED) {
        setResponseStatus("responded");
      } else if (response.status === HTTP_STATUS_BAD_REQUEST) {
        console.error(response.data.message);
      } else if (response.status === HTTP_STATUS_CONFLICT) {
        console.error(response.data.message);
      } else {
        console.error("An unexpected error occurred.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { responseStatus, postVolunteerHours };
};

export default usePostVolunteerHours;

/* 
Envia as horas trabalhadas de um voluntário à API e gerencia o status da resposta.

Retorno:
  Um objeto com duas propriedades:
    responseStatus: String indicando o status da requisição ("notResponded", "responded", ou potencialmente outro valor caso ocorra um erro inesperado).
    postVolunteerHours: Função para enviar as horas do voluntário à API.

Detalhes:
  O código usa o hook useState do React para gerenciar o status da resposta.
  A função postVolunteerHours realiza uma requisição POST à rota da API /volunteers/hours com os dados do voluntário.
  O código trata os seguintes status de resposta da API:
  201 (Created): Sucesso no envio das horas.
  400 (Bad Request): Erro na requisição, provavelmente devido a dados inválidos.
  409 (Conflict): Conflito, provavelmente devido a horas já enviadas para o mesmo período.
  O código usa console.error para registrar erros, mas poderia implementá-los em uma interface de usuário ou mecanismo de logging mais apropriado.
*/
