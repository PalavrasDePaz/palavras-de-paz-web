export type User = {
  email: string;
  name: string;
  idvol: number;
  city: string;
  state: string;
  phoneNumber: string;
  country: string;
  password: string;
};

export type Notebook = {
  notebookId: number;
  studentId: number;
  classId: number;
  studentName: string;
  reservationDate: string;
  notebookPath: string;
};

export type Essays = {
  idclass: number;
  place: string;
  dateReserved: string;
  dateConcluded: string;
  folderLink: string;
};
