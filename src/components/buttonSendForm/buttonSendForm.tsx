type ButtonSendFormProps = {
  text: string;
  onClick: () => void;
};

const ButtonSendForm: React.FC<ButtonSendFormProps> = ({
  text,
  onClick,
}: ButtonSendFormProps) => <button onClick={onClick}>{text}</button>;

export default ButtonSendForm;
