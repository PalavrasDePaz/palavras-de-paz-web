import { ChangeEvent, useState } from "react";

import BtnSubmit from "../formEditarTurmaRedacao/components/ButtonSalavarAlteracoes";
import ItemTurma from "../formEditarTurmaRedacao/components/ItemTurma";

import { FormData } from "./types/FormData";

import style from "./styles/FormEditarAvalLivro.module.css";

// Dados iniciais para testar o formulário de forma provisória
const initialData: FormData[] = [
  {
    nomeAvaliado: "José Gomes Filho",
    matricula: 1,
    idAvaliador: 1,
    nomeAvaliador: "exemplo exemplo",
    numeroTurma: 1,
    dataEHora: "00:00 - 01/01/1900",
    dataValidacao: "00:00 - 01/01/1900",
    estetica: "lore ipsum",
    dignidade: "lore ipsum",
    clareza: "lore ipsum",
    plagio: "lore ipsum",
    observacao: "lore ipsum",
    conceito: "lore ipsum",
    opniao: "lore ipsum",
    sociedade: "lore ipsum",
    plagioParcial: "lore ipsum",
    relevantes: "lore ipsum",
    redacao: "lore ipsum",
    portugues: "lore ipsum",
    historiaObservacao: "lore ipsum",
    historiaRelatorio: "lore ipsum",
  },
];

export default function FormEditarAvalLivroTemplate() {
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
    <main className={style.container}>
      {formData.map((data, index) => (
        <section key={data.matricula}>
          <h1 className={style.localizacaoTitulo}>{data.nomeAvaliado}</h1>

          <ItemTurma
            inputType="input"
            label="Matrícula"
            value={data.matricula}
            placeholder="Insira a matrícula"
            onChange={(event) => handleChange(event, index, "matricula")}
          />
          <div className={style.noEdit}>
            <p>
              ID do avaliador: <span>{data.idAvaliador}</span>
              <span>{data.nomeAvaliador}</span>
            </p>
            <p>
              Nome: <span>{data.numeroTurma}</span>
            </p>
            <p>
              Número da turma: <span>{data.numeroTurma}</span>
            </p>
            <p>
              Data e hora: <span>{data.dataEHora}</span>
            </p>
            <p>
              Data de validação: <span>{data.dataValidacao}</span>
            </p>
          </div>

          <ItemTurma
            inputType="textarea"
            label="Estética"
            value={data.estetica}
            placeholder="Insira a estética"
            onChange={(event) => handleChange(event, index, "estetica")}
          />
          <ItemTurma
            inputType="textarea"
            label="Dignidade"
            value={data.dignidade}
            placeholder="Insira a dignidade"
            onChange={(event) => handleChange(event, index, "dignidade")}
          />
          <ItemTurma
            inputType="textarea"
            label="Clareza"
            value={data.clareza}
            placeholder="Insira a clareza"
            onChange={(event) => handleChange(event, index, "clareza")}
          />
          <ItemTurma
            inputType="textarea"
            label="Plágio"
            value={data.plagio}
            placeholder="Insira o plágio"
            onChange={(event) => handleChange(event, index, "plagio")}
          />
          <ItemTurma
            inputType="textarea"
            label="Observação"
            value={data.observacao}
            placeholder="Insira a observação"
            onChange={(event) => handleChange(event, index, "observacao")}
          />
          <ItemTurma
            inputType="textarea"
            label="Conceito"
            value={data.conceito}
            placeholder="Insira o conceito"
            onChange={(event) => handleChange(event, index, "conceito")}
          />
          <ItemTurma
            inputType="textarea"
            label="Opnião"
            value={data.opniao}
            placeholder="Insira a opnião"
            onChange={(event) => handleChange(event, index, "opniao")}
          />
          <ItemTurma
            inputType="textarea"
            label="Sociedade"
            value={data.sociedade}
            placeholder="Insira a sociedade"
            onChange={(event) => handleChange(event, index, "sociedade")}
          />
          <ItemTurma
            inputType="textarea"
            label="Plágio parcial"
            value={data.plagioParcial}
            placeholder="Insira o plágio parcial"
            onChange={(event) => handleChange(event, index, "plagioParcial")}
          />
          <ItemTurma
            inputType="textarea"
            label="Relevantes"
            value={data.relevantes}
            placeholder="Insira os relevantes"
            onChange={(event) => handleChange(event, index, "relevantes")}
          />
          <ItemTurma
            inputType="textarea"
            label="Redação"
            value={data.redacao}
            placeholder="Insira a redação"
            onChange={(event) => handleChange(event, index, "redacao")}
          />
          <ItemTurma
            inputType="textarea"
            label="Português"
            value={data.portugues}
            placeholder="Insira o português"
            onChange={(event) => handleChange(event, index, "portugues")}
          />
          <ItemTurma
            inputType="textarea"
            label="História observação"
            value={data.historiaObservacao}
            placeholder="Insira a história observação"
            onChange={(event) =>
              handleChange(event, index, "historiaObservacao")}
          />
          <ItemTurma
            inputType="textarea"
            label="História relatório"
            value={data.historiaRelatorio}
            placeholder="Insira a história relatório"
            onChange={(event) =>
              handleChange(event, index, "historiaRelatorio")}
          />

          <BtnSubmit onClick={handleSubmit} />
        </section>
      ))}
    </main>
  );
}
