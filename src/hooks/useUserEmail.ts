import { useEffect, useState } from "react";

const useUserEmail = () => {
  const [userEmail, setUserEmail] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("userEmail") || undefined;
      setUserEmail(email);
    }
  }, []);

  return userEmail;
};

export default useUserEmail;

/* 
Busca o e-mail do usuário armazenado no localStorage do navegador e o armazena em um estado React.

Retorno:
  Uma string contendo o e-mail do usuário armazenado no localStorage, ou undefined se não encontrado.

Detalhes:
  O código utiliza o hook useEffect do React para buscar o e-mail do localStorage somente no efeito colateral inicial ([] como dependência).
  O código verifica se a variável window existe antes de acessar o localStorage (evita erros em ambientes Node.js).
  O estado userEmail é utilizado para armazenar o e-mail recuperado.
*/
