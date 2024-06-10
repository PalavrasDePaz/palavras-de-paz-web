import * as yup from "yup";

import { REQUIRED_FIELD } from "../../constants";

export const bookClassSchema = yup.object().shape({
  idclass: yup.number().required(REQUIRED_FIELD),
  reportReceiveDate: yup.string().required(REQUIRED_FIELD),
  loanDate: yup.string().required(REQUIRED_FIELD),
  returnDate: yup.string().required(REQUIRED_FIELD),
  reportElaborationDate: yup.string().required(REQUIRED_FIELD),
  received: yup.string().required(REQUIRED_FIELD),
  yesList: yup.string().required(REQUIRED_FIELD),
  presenceList: yup.number().required(REQUIRED_FIELD),
  qrl: yup.number().required(REQUIRED_FIELD),
  sendDateParec: yup.string().required(REQUIRED_FIELD),
  presSedex: yup.string().required(REQUIRED_FIELD),
  sendDateFunap: yup.string().required(REQUIRED_FIELD),
  presSedex2: yup.string().required(REQUIRED_FIELD),
  endEvaluationDate: yup.string().required(REQUIRED_FIELD),
  parec: yup.string().required(REQUIRED_FIELD),
  idvol: yup.number().required(REQUIRED_FIELD),
  folderLink: yup.string().required(REQUIRED_FIELD),
  place: yup
    .object()
    .shape({
      closed: yup.number().required(REQUIRED_FIELD),
      sex: yup.string().required(REQUIRED_FIELD),
      addr: yup.string().required(REQUIRED_FIELD),
      mode: yup.string().required(REQUIRED_FIELD),
      coord: yup.string().required(REQUIRED_FIELD),
      fullName: yup.string().required(REQUIRED_FIELD),
      id: yup.number().required(REQUIRED_FIELD),
    })
    .required(REQUIRED_FIELD),
  bookEvaluations: yup.array().required(REQUIRED_FIELD),
});

export type BookClass = yup.InferType<typeof bookClassSchema>;
