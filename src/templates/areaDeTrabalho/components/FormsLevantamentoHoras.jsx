import React, { useState } from "react";
// import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { api } from "../../../api/index";
import HeaderForm from "../../../components/headerForm/HeaderForm";
import { useGetUser } from "../../../hooks";
import useUserEmail from "../../../hooks/useUserEmail";

import styles from "../styles/FormsLevantamentoHoras.module.css";

const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_CONFLICT = 409;

function FormLvntHoras() {
  const { handleSubmit, register } = useForm();
  const [managementHours, setManagementHours] = useState(0);
  const [communicationHours, setCommunicationHours] = useState(0);
  const [technologyHours, setTechnologyHours] = useState(0);
  const [eventsHours, setEventsHours] = useState(0);
  const [attHours, setAttHours] = useState(0);
  const [formsResponded, setFormsResponded] = useState("notResponded");

  function isFormRenderable() {
    const actualDate = new Date();
    const maxDays = 10;
    const actualDay = actualDate.getDate();
    return actualDay <= maxDays && formsResponded !== "responded";
  }

  const userEmail = useUserEmail();
  const { data: user } = useGetUser(userEmail);
  // const { push } = useRouter();

  const RendForm = isFormRenderable();

  const onSubmitBtn = async (data) => {
    try {
      const apiResponse = await api.post("/volunteers/hours", {
        idVol: user.idvol,
        manag: data.managementHours,
        comm: data.communicationHours,
        tec: data.technologyHours,
        event: data.eventsHours,
        att: data.supportHours,
      });

      if (apiResponse.status === HTTP_STATUS_CREATED) {
        setFormsResponded("responded");
      } else if (apiResponse.status === HTTP_STATUS_BAD_REQUEST) {
        setFormsResponded("responded");
      } else if (apiResponse.status === HTTP_STATUS_CONFLICT) {
        setFormsResponded("responded");
      } else {
        // console.error('An unexpected error occurred.');
      }
    } catch (error) {
      // console.log(error);
      // console.log('Response:', error.response);
    }
  };

  // const backToDesktop = () => {
  //   push("/area-de-trabalho");
  // };

  return (
    <section>
      {RendForm ? (
        <>
          <HeaderForm />
          <div className={styles.h2Container}>
            <h2 className={styles.h2Item}>Levantamento mensal de horas</h2>
          </div>
          <div className={styles.containerSection}>
            <p className={styles.section_p1}>
              A Palavras de Paz está se transformando para ficar melhor para
              você e para todos que fazem o curso ou participam das nossas
              atividades. Para nos ajudar, todos devem declarar as horas
              trabalhadas por atividade executada. Essas horas também serão a
              base de horas das DHA (declarações de horas por atividade).
            </p>
            <p className={styles.section_p2}>
              Avaliadores de cadernos e avaliadores de redações não precisam
              enviar esse formulário. Se você, além de avaliação, realiza também
              outras atividades, as declare neste formulário.
            </p>
            <p className={styles.section_p1}>
              Os formulários devem ser enviados até o 5º dia de cada mês.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmitBtn)}>
            <div className={styles.div_form}>
              <label htmlFor="managementHours">
                ÁREA DE DE GESTÃO (gestão de pessoas, captação de recursos
                humanos, financeiros, comunicação interna, estatisticas, TPRF,
                contabilidade):
              </label>
              <input
                type="number"
                {...register("managementHours")}
                value={managementHours}
                onChange={(event) => setManagementHours(event.target.value)}
              />
            </div>
            <div className={styles.div_form}>
              <label htmlFor="communicationHours">
                ÁREA DE COMUNICAÇÃO (mídias sociais):
              </label>
              <input
                type="number"
                {...register("communicationHours")}
                value={communicationHours}
                onChange={(event) => setCommunicationHours(event.target.value)}
              />
            </div>
            <div className={styles.div_form}>
              <label htmlFor="technologyHours">
                ÁREA DE TECNOLOGIA (TI, Web):
              </label>
              <input
                type="number"
                {...register("technologyHours")}
                value={technologyHours}
                onChange={(event) => setTechnologyHours(event.target.value)}
              />
            </div>
            <div className={styles.div_form}>
              <label htmlFor="eventsHours">
                ÁREA DE EVENTOS (eventos externos):
              </label>
              <input
                type="number"
                {...register("eventsHours")}
                value={eventsHours}
                onChange={(event) => setEventsHours(event.target.value)}
              />
            </div>
            <div className={styles.div_form}>
              <label htmlFor="supportHours">
                ÁREA DE ATENDIMENTO (facilitadores, tradução, presenças,
                estudos, facilitação presencial):
              </label>
              <input
                type="number"
                {...register("supportHours")}
                value={attHours}
                onChange={(event) => setAttHours(event.target.value)}
              />
            </div>
            <div className={styles.div_button}>
              <button type="submit"> Enviar</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <HeaderForm />
          <p className={styles.completionMessage}>
            Obrigado. Seus dados foram gravados.
          </p>
          {/* <button onClick={ backToDesktop }>Voltar para Área de Trabalho</button> */}
        </>
      )}
    </section>
  );
}

export default FormLvntHoras;
