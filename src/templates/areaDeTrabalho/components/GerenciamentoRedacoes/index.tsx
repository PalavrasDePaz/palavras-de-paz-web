import { useState } from "react";

import TabelaAvaliacoes from "./Avaliacoes";
import { Tabs } from "./Tabs";
import TabelaTurmas from "./Turmas";

import styles from "./styles.module.css";

export default function GerenciamentoRedacoes() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabsContent = [
    {
      title: "Turmas",
      content: <TabelaTurmas />,
    },
    {
      title: "Avaliações",
      content: <TabelaAvaliacoes />,
    },
  ];

  return (
    <section className={styles.gerenciamento_section}>
      <h1>Gerenciamento de Redações</h1>
      <Tabs
        tabs={tabsContent}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </section>
  );
}
