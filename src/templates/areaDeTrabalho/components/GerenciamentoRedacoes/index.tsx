import { useState } from "react";

import { Class } from "../../../../hooks/types";

import TabelaAvaliacoes from "./Avaliacoes";
import { Tabs } from "./Tabs";
import TabelaTurmas from "./Turmas";

import styles from "./styles.module.css";

export default function GerenciamentoRedacoes() {
  const [selectedClasses, setSelectedClasses] = useState<Class[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentPageTurmas, setCurrentPageTurmas] = useState(1);

  const tabsContent = [
    {
      title: "Turmas",
      content: (
        <TabelaTurmas
          selectedClasses={selectedClasses}
          setSelectedClasses={setSelectedClasses}
          currentPage={currentPageTurmas}
          setCurrentPage={setCurrentPageTurmas}
          setActiveTab={setActiveTab}
        />
      ),
    },
    {
      title: "Avaliações",
      content: <TabelaAvaliacoes selectedClasses={selectedClasses} />,
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
