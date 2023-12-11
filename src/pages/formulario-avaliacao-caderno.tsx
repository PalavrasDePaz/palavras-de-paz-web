import React from "react";

import FormAvalCadTemplate from "../templates/forms/FormAvaliacaoCadernoTemplate";

interface FormularioAvaliacaoCadernoProps {
  onClose: () => void;
}

const FormularioAvaliacaoCaderno: React.FC<FormularioAvaliacaoCadernoProps> = ({
  onClose,
}) => <FormAvalCadTemplate onClose={onClose} />;

export default FormularioAvaliacaoCaderno;
