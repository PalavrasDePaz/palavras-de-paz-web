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
