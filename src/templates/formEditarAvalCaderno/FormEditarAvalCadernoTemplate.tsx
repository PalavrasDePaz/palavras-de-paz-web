import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useGetNotebookById from "../../hooks/useGetNotebookById";
import usePutNotebookEditEvalForm from "../../hooks/usePutNotebookEditEvalForm";
import BtnSubmit from "../formEditarTurmaRedacao/components/ButtonSalavarAlteracoes";
import ItemTurma from "../formEditarTurmaRedacao/components/ItemTurma";

import { NotebookEval } from "./schema";

import style from "./styles/FormEditarAvalCadernoTemplate.module.css";

/* eslint-disable max-lines */
/* eslint-disable max-len */

interface props {
  initialData: NotebookEval;
  evaluationId: number;
  viewOnly: boolean;
}

const subjectOptions = [
  "1. Discordo totalmente",
  "2. Discordo",
  "3. Não sei",
  "4. Concordo",
  "5. Concordo totalmente",
];

export default function FormEditarAvalCadernoTemplate({
  initialData,
  evaluationId,
  viewOnly,
}: props) {
  const [formData, setFormData] = useState<NotebookEval>(initialData);

  const {
    data: responseData,
    isSuccess,
    isLoading,
    isError,
  } = useGetNotebookById(evaluationId.toString());
  const {
    mutate: mutatePutBookEval,
    isSuccess: isMutateSuccess,
    data: mutateResponseData,
  } = usePutNotebookEditEvalForm();

  useEffect(() => {
    if (responseData && isSuccess) {
      setFormData(responseData.data);
    }
  }, [responseData, isSuccess]);

  useEffect(() => {
    if (mutateResponseData && isMutateSuccess) {
      toast.success("Atualizado com sucesso!", {
        autoClose: 600,
      });
    }
  }, [mutateResponseData, isMutateSuccess]);

  const handleSubmit = () => {
    const formDataToSend = {
      ...formData,
      evaluatedDate: new Date().toISOString(),
    } as Partial<NotebookEval>;
    delete formDataToSend.idpep;
    delete formDataToSend.idcad;
    delete formDataToSend.notebookDirectory;
    delete formDataToSend.fullName;
    delete formDataToSend.reservationDate; // ver qual dos dois remover
    delete formDataToSend.evaluatedDate; // ver qual dos dois remover
    mutatePutBookEval({
      data: formDataToSend as any,
      notebookEvalId: evaluationId.toString(),
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof NotebookEval
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newData = {
        ...prevFormData,
        [fieldName]: value,
      };
      return newData;
    });
  };

  return (
    <>
      {isError && <p>Erro ao carregar os dados</p>}
      {isLoading && (
        <div className={style.loadingSpinnerContainer}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && !isError && (
        <main className={style.container}>
          <section key={formData.idvol}>
            <div className={style.containerHeader}>
              <div className={style.containerHeaderStudentName}>
                <h1 className={style.localizacaoTitulo}>
                  {formData.studentName}
                </h1>
                <p className={style.subtitulo}>
                  Aqui você consegue alterar as informações desta turma
                </p>
              </div>
            </div>

            <div className={style.noEdit}>
              <p>
                Id do Voluntário: <span>{formData.idvol}</span>
              </p>
            </div>

            <ItemTurma
              inputType="textarea"
              label="Matrícula do Aluno"
              value={formData.studentRegistration}
              placeholder=""
              onChange={(event) => handleChange(event, "studentRegistration")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Nome do Aluno"
              value={formData.studentName}
              placeholder=""
              onChange={(event) => handleChange(event, "studentName")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Nome do Aluno"
              value={formData.studentName}
              placeholder=""
              onChange={(event) => handleChange(event, "studentName")}
              viewOnly={viewOnly}
            />
            <h3 className={style.sectionTitle}>Conteúdos Relevantes</h3>
            <ItemTurma
              inputType="textarea"
              label="Selecione um trecho onde se percebe o entendimento e a evolução do participante - em até 3 linhas"
              value={formData.relevantContent}
              placeholder="Insira os conteúdos relevantes"
              onChange={(event) => handleChange(event, "relevantContent")}
              viewOnly={viewOnly}
            />
            <h3 className={style.sectionTitle}>Avaliação da Questão 1</h3>
            <ItemTurma
              inputType="selectbox"
              label='a) "Eu sei que é possível sentir paz em minha vida."'
              value={formData.subject1}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject1")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='b) "Eu sei que um dos meus recursos internos é a capacidade de apreciar e aproveitar a vida."'
              value={formData.subject2}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject2")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='c) "Eu sei que tenho forças internas que posso usar para me ajudar na vida."'
              value={formData.subject3}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject3")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='d) "À medida que me torno mais auto-consciente, posso viver a vida mais conscientemente."'
              value={formData.subject4}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject4")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='e) "Eu entendo que recorrer ao meu recurso interno de clareza para me ajudar na vida."'
              value={formData.subject5}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject5")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='f) "Eu entendo a importância de conhecer algo por experiência própria, em vez de apenas acreditar em algo."'
              value={formData.subject6}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject6")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='g) "Reconheço que, como ser humano, tenho uma dignidade inata, independentemente das circunstâncias."'
              value={formData.subject7}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject7")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='h) "Reconheço que tenho a liberdade e o poder de fazer escolhas diárias e que essas escolhas afetam meu bem estar."'
              value={formData.subject8}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject8")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='i) "Eu entendo que a esperança é um recurso interno que pode me ajudar a lidar com os momentos desafiadores da vida."'
              value={formData.subject9}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject9")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />
            <ItemTurma
              inputType="selectbox"
              label='j) "Eu entendo que posso sentir contentamento, não importa o que aconteça em minha vida."'
              value={formData.subject10}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "subject10")}
              viewOnly={viewOnly}
              options={subjectOptions}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 2</h3>
            <ItemTurma
              inputType="selectbox"
              label="Qual a probabilidade de você recomendar o Programa de Educação para a Paz a outra pessoa?"
              value={formData.a1}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "a1")}
              viewOnly={viewOnly}
              options={[
                "Muito provavelmente",
                "Provavelmente",
                "Neutro",
                "Improvável",
                "Muito improvável",
                "Não sei",
              ]}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 3</h3>
            <ItemTurma
              inputType="textarea"
              label="Resposta do(a) aluno(a) - Escreva o que mais gostou no programa:"
              value={formData.a2}
              placeholder="Insira uma resposta"
              onChange={(event) => handleChange(event, "a2")}
              viewOnly={viewOnly}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 4</h3>
            <ItemTurma
              inputType="textarea"
              label="Resposta do aluno(a) - Existe algo no Programa que poderia ser melhorado?"
              value={formData.a3}
              placeholder="Insira uma resposta"
              onChange={(event) => handleChange(event, "a3")}
              viewOnly={viewOnly}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 5</h3>
            <ItemTurma
              inputType="selectbox"
              label="Resposta do(a) aluno(a) - O Programa ajudou sua vida?"
              value={formData.a9}
              placeholder="Selecione uma alternativa"
              onChange={(event) => handleChange(event, "a9")}
              viewOnly={viewOnly}
              options={["Sim", "Não"]}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 6</h3>
            <ItemTurma
              inputType="textarea"
              label="Resposta do(a) aluno(a): Justifique a resposta da questão 5 (O Programa ajudou em sua vida?):"
              value={formData.a10}
              placeholder="Insira uma resposta"
              onChange={(event) => handleChange(event, "a10")}
              viewOnly={viewOnly}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 7</h3>
            <ItemTurma
              inputType="selectbox"
              label="Resposta do(a) aluno(a) - Quantos anos você tem?"
              value={formData.a5}
              placeholder="Selecione uma alternativa"
              onChange={(event) => handleChange(event, "a5")}
              viewOnly={viewOnly}
              options={["Até 35 anos", "36 a 55 anos", "Mais de 55"]}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 8</h3>
            <ItemTurma
              inputType="selectbox"
              label="Resposta do(a) aluno(a) - Você é?"
              value={formData.a6}
              placeholder="Selecione uma alternativa"
              onChange={(event) => handleChange(event, "a6")}
              viewOnly={viewOnly}
              options={["Masculino", "Feminino", "Outros", "Não consta"]}
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 9</h3>
            <ItemTurma
              inputType="selectbox"
              label="Resposta do(a) aluno(a) - Você é?"
              value={formData.a8}
              placeholder="Selecione uma alternativa"
              onChange={(event) => handleChange(event, "a8")}
              viewOnly={viewOnly}
              options={[
                "Ensino fundamental incompleto",
                "Ensino fundamental completo",
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo",
                "Não consta",
              ]}
              otherOption
            />

            <h3 className={style.sectionTitle}>Avaliação da Questão 10</h3>
            <ItemTurma
              inputType="textarea"
              label="Resposta do(a) aluno(a): O que aprendeu no curso e quer levar para o resto da vida?"
              value={formData.a7}
              placeholder="Insira uma resposta"
              onChange={(event) => handleChange(event, "a7")}
              viewOnly={viewOnly}
            />

            <h3 className={style.sectionTitle}>Conclusão do Avaliador</h3>
            <ItemTurma
              inputType="textarea"
              label="Descreva sua percepção sobre o desenvolvimento do aluno:"
              value={formData.conclusion}
              placeholder="Insira sua conclusão"
              onChange={(event) => handleChange(event, "conclusion")}
              viewOnly={viewOnly}
            />

            <BtnSubmit onClick={handleSubmit} />
          </section>
        </main>
      )}
    </>
  );
}
