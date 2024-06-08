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

export type Class = {
  endEvaluationDate: string;
  folderLink: null | string;
  idclass: number;
  idvol: number;
  loanDate: string;
  parec: null | string;
  place: number;
  placeName: string;
  presSedex: string;
  presSedex2: string;
  presenceList: number;
  qrl: number;
  received: string;
  reportElaborationDate: string;
  reportReceiveDate: string;
  returnDate: null | string;
  sendDateFunap: string;
  sendDateParec: string;
  volunteerName: string;
  yesList: string;
};
