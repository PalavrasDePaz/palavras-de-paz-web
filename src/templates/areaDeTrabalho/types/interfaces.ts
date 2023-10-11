export interface INotebooks {
  notebookId: number;
  studentId: number;
  classId: number;
  studentName: string;
  reservationDate: string;
  notebookPath: string;
  reserved?: boolean;
}
