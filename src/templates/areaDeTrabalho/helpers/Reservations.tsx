import { api } from "../../../api";
import { IEssays } from "../types/interfaces";

export const putReservationData = async (
  volunteerId: number,
  classId: number
) => {
  const reserveData = { idvol: volunteerId, idclass: classId };
  const response = await api.put("/book-club-class/reservation", reserveData);
  return response.data;
};

export const putRevertReservationData = async (
  volunteerId: number,
  classId: number
) => {
  const reserveData = { idvol: volunteerId, idclass: classId };
  const response = await api.put(
    `/book-club-class/revert-reservation/${classId}`,
    reserveData
  );
  return response.data;
};

export const sortedEssayReserved = (essays: IEssays[]) =>
  essays.sort(
    (a, b) =>
      new Date(a.dateReserved).getTime() - new Date(b.dateReserved).getTime()
  );

export const sortedEssayNotReserved = (essays: IEssays[]) =>
  essays.sort((a, b) => a.idclass - b.idclass);
