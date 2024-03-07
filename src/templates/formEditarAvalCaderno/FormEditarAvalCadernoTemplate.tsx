import { ChangeEvent, useState } from "react";

import HeaderForm from "../../components/headerForm/HeaderForm";
import BtnDownload from "../formEditarTurmaRedacao/components/ButtonDownloadRelatorios";
import BtnSubmit from "../formEditarTurmaRedacao/components/ButtonSalavarAlteracoes";
import ItemTurma from "../formEditarTurmaRedacao/components/ItemTurma";

import { FormData } from "./types/FormData";

import style from "./styles/FormEditarAvalCadernoTemplate.module.css";

// Dados iniciais para testar o formulário de forma provisória
const initialData: FormData[] = [
  {
    nomeAvaliado: "José Gomes Filho",
    matricula: 1,
    id: 1,
    conteudosRelevantes: "lore ipsum",
    questao1: "lore ipsum",
    questao2: "lore ipsum",
    questao3: "lore ipsum",
    questao4: "lore ipsum",
    questao5: "lore ipsum",
    questao6: "lore ipsum",
    questao7: "lore ipsum",
    questao8: "lore ipsum",
    questao9: "lore ipsum",
    questao10: "lore ipsum",
    conclusaoAvaliador: "lore ipsum",
  },
];

export default function FormEditarAvalCadernoTemplate() {
  const [formData, setFormData] = useState<FormData[]>(initialData);

  const handleSubmit = () => {
    // Implemente a lógica para salvar todas as alterações (pode enviar para um servidor, atualizar o estado global, etc.)
    // Exemplo: console.log('Salvando alterações:', formData);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    fieldName: keyof FormData
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newData = [...prevFormData];
      newData[index] = {
        ...newData[index],
        [fieldName]: value,
      };
      return newData;
    });
  };

  return (
    <>
      <HeaderForm />
      <main className={style.container}>
        {formData.map((data, index) => (
          <section key={data.id}>
            <div>
              <h1 className={style.localizacaoTitulo}>{data.nomeAvaliado}</h1>
              <p className={style.subtitulo}>
                Aqui você consegue alterar as informações desta turma
              </p>
              <BtnDownload />
            </div>

            <div className={style.noEdit}>
              <p>
                Matrícula: <span>{data.matricula}</span>
              </p>
              <p>
                Id: <span>{data.id}</span>
              </p>
            </div>

            <ItemTurma
              inputType="textarea"
              label="Conteúdos relevantes"
              value={data.conteudosRelevantes}
              placeholder="Insira os conteúdos relevantes"
              onChange={(event) =>
                handleChange(event, index, "conteudosRelevantes")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 1:"
              value={data.questao1}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao1")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 2:"
              value={data.questao2}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao2")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 3:"
              value={data.questao3}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao3")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 4:"
              value={data.questao4}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao4")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 5:"
              value={data.questao5}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao5")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 6:"
              value={data.questao6}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao6")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 7:"
              value={data.questao7}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao7")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 8:"
              value={data.questao8}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao8")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 9:"
              value={data.questao9}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao9")}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 10:"
              value={data.questao10}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, index, "questao10")}
            />
            <ItemTurma
              inputType="textarea"
              label="Conclusão do avaliador"
              value={data.conclusaoAvaliador}
              placeholder="Insira a conclusão do avaliador"
              onChange={(event) =>
                handleChange(event, index, "conclusaoAvaliador")}
            />

            <BtnSubmit onClick={handleSubmit} />
          </section>
        ))}
      </main>
    </>
  );
}
