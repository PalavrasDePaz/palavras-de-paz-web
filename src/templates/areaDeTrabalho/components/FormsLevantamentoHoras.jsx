import React, { useState } from "react";

import styles from "../styles/FormsLevantamentoHoras.module.css";

function FormsLevantamentoHoras() {
  const [managementHours, setManagementHours] = useState("0");
  const [communicationHours, setCommunicationHours] = useState("0");
  const [technologyHours, setTechnologyHours] = useState("0");
  const [eventsHours, setEventsHours] = useState("0");
  const [supportHours, setSupportHours] = useState("0");
  const [responseStatus, setResponseStatus] = useState("notResponded");

  function isFormRenderable() {
    const actualDate = new Date();
    const maxDays = 10;
    const actualDay = actualDate.getDate();
    return actualDay <= maxDays && responseStatus !== "responded";
  }

  const RendForm = isFormRenderable();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementação para enviar o formulário para o backend
    setResponseStatus("responded");
  };

  return (
    <section>
      {RendForm ? (
        <div className={styles.containerSection}>
          <div className={styles.h2Container}>
            <h2 className={styles.h2Item}>Levantamento mensal de horas</h2>
          </div>
          <p className={styles.section_p1}>
            A Palavras de Paz está se transformando para ficar melhor para você
            e para todos que fazem o curso ou participam das nossas atividades.
            Para nos ajudar, todos devem declarar as horas trabalhadas por
            atividade executada. Essas horas também serão a base de horas das
            DHA (declarações de horas por atividade).
          </p>
          <p className={styles.section_p2}>
            Avaliadores de cadernos e avaliadores de redações não precisam
            enviar esse formulário. Se você, além de avaliação, realiza também
            outras atividades, as declare neste formulário.
          </p>
          <p className={styles.section_p1}>
            Os formulários devem ser enviados até o 5º dia de cada mês.
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.div_form}>
                <label htmlFor="managementHours">
                  Área de Gestão (gestão de pessoas, captação de recursos
                  humanos, financeiros, comunicação interna, estatisticas, TPRF,
                  contabilidade):
                </label>
                <input
                  type="number"
                  value={managementHours}
                  onChange={(event) => setManagementHours(event.target.value)}
                />
              </div>
              <div className={styles.div_form}>
                <label htmlFor="communicationHours">
                  Área de comunicação (mídias sociais):
                </label>
                <input
                  type="number"
                  value={communicationHours}
                  onChange={(event) =>
                    setCommunicationHours(event.target.value)}
                />
              </div>
              <div className={styles.div_form}>
                <label htmlFor="technologyHours">
                  Área de tecnologia (TI, Web):
                </label>
                <input
                  type="number"
                  value={technologyHours}
                  onChange={(event) => setTechnologyHours(event.target.value)}
                />
              </div>
              <div className={styles.div_form}>
                <label htmlFor="eventsHours">
                  Área de eventos (eventos externos):
                </label>
                <input
                  type="number"
                  value={eventsHours}
                  onChange={(event) => setEventsHours(event.target.value)}
                />
              </div>
              <div className={styles.div_form}>
                <label htmlFor="supportHours">
                  Área de Atendimento (facilitadores, tradução, presenças,
                  estudos, facilitação presencial):
                </label>
                <input
                  type="number"
                  value={supportHours}
                  onChange={(event) => setSupportHours(event.target.value)}
                />
              </div>
              <div className={styles.div_button}>
                <button type="submit"> Enviar</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p>O formulário só pode ser preenchido nos primeiros 5 dias do mês.</p>
      )}
    </section>
  );
}

export default FormsLevantamentoHoras;
