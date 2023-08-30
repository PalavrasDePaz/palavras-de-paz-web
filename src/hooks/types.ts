export type User = {
  email: string;
  name: string;
  idvol: number;
};

export type Notebook = {
  studentName: string;
  studentId: number;
  reservationDate: string;
  notebookId: string;
};

export type Essays = {
  idclass: number;
  place: string;
  dateReserved: string;
  dateConcluded: string;
  folderLink: string;
};
