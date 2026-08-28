import { useEffect, useState } from "react";

import { api } from "../api/index";

const HTTP_OK = 200;

export const useRequestStatus = (idVol: number) => {
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);

  useEffect(() => {
    api
      .head(`/volunteers/hours/${idVol}`)
      .then((response) => {
        if (response.status === HTTP_OK) {
          setIsRequestSuccessful(true);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, [idVol]);

  return isRequestSuccessful;
};

/* 
Verifica o status de uma requisição HTTP HEAD à API para determinar se a informação de horas de um voluntário está disponível.

Parâmetros: 
  idVol: Número, ID do voluntário.

Retorno: 
  Booleano, indica se a requisição foi bem-sucedida (status 200).

Observações:
  O hook dispara a requisição novamente se o idVol for alterado.
  A API e a função api são responsabilidades externas.
*/
