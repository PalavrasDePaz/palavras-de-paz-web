import PropTypes from "prop-types";

import style from "../styles/FormEditarTurmaRedacaoTemplate.module.css";

interface BtnSubmitProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const BtnSubmit: React.FC<BtnSubmitProps> = ({ onClick }) => (
  <button type="button" onClick={onClick} className={style.btnSubmit}>
    Salvar alterações
  </button>
);

// não sei porque o eslint pediu prop-types para TS, mas aqui está
BtnSubmit.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnSubmit;
