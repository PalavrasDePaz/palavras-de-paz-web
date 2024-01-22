import React from "react";

import FormTemplate from "../templates/formAvaliarCaderno/FormAvaliacaoCadernoTemplate";

interface FormularioAvaliacaoCadernoProps {
  onClose: () => void;
}

const FormularioAvaliacaoCaderno: React.FC<FormularioAvaliacaoCadernoProps> = ({
  onClose,
}) => <FormTemplate onClose={onClose} />;

export default FormularioAvaliacaoCaderno;
