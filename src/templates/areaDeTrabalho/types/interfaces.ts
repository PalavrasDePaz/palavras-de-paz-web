export interface INotebooks {
  notebookId: number;
  studentId: number;
  classId: number;
  studentName: string;
  reservationDate: string;
  notebookPath: string;
  reserved?: boolean;
}

export interface IEssays {
  idclass: number;
  place: string;
  dateReserved: string;
  dateConcluded: string;
  folderLink: string;
  reserved: boolean;
}
