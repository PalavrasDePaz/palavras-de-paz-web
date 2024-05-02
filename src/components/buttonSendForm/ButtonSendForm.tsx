import style from "./ButtonSendForm.module.css";

type ButtonSendFormProps = {
  text: string;
  onClick: () => void;
};

const ButtonSendForm: React.FC<ButtonSendFormProps> = ({
  text,
  onClick,
}: ButtonSendFormProps) => (
  <div className={style.container}>
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default ButtonSendForm;
