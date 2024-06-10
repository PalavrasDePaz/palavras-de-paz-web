import { IEssays } from "./interfaces";

export type ItemTurmaAvaliacaoProps = {
  essaysIn: IEssays[];
  setEssaysIn: React.Dispatch<React.SetStateAction<IEssays[]>>;
  idclass: number;
  place: string;
  idvol: number;
  dateReserved: string;
  dateConcluded: string;
  reserved: boolean;
};

export type OpenFormularioProps = {
  idClass: number;
  idVol: number;
  Place: string;
  DateReserved: string;
  DateConcluded: string;
  Reserved: boolean;
};
