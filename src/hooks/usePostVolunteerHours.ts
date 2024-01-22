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
