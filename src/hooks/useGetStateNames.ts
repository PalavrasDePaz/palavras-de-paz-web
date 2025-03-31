import { useEffect, useState } from "react";

const useGetStateNames = () => {
  const [stateNames, setStateNames] = useState([]);

  interface State {
    id: number;
    sigla: string;
    nome: string;
    regiao: {
      id: number;
      sigla: string;
      nome: string;
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/11|12|13|14|15|16|17|21|22|23|24|25|26|27|28|29|31|32|33|35|41|42|43|50|51|52|53?orderBy=nome"
        );
        const states = await response.json();
        const names = states.map((state: State) => state.nome);
        setStateNames(names);
      } catch (error) {
        // console.error('Erro getting State:', error);
      }
    };

    fetchData();
  }, []);

  return stateNames;
};

export default useGetStateNames;

/* 
Busca e armazena uma lista de nomes de estados brasileiros a partir de uma API do IBGE.

Retorno:
  Um array de strings contendo os nomes dos estados.

Detalhes:
  O código utiliza o hook useEffect do React para buscar os dados na inicialização do componente.
*/
