import React from "react";

import FormTemplate from "../templates/formAvaliarRedacao/FormAvaliacaoRedacaoTemplate";

interface FormularioAvaliacaoRedacaoProps {
  onClose: () => void;
}

const FormularioAvaliacaoRedacao: React.FC<FormularioAvaliacaoRedacaoProps> = ({
  onClose,
}) => <FormTemplate onClose={onClose} />;

export default FormularioAvaliacaoRedacao;
