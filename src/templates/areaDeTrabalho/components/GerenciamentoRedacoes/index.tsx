/* eslint-disable react/jsx-max-depth */
import { useCallback, useState } from "react";

import TabelaAvaliacoes from "./Avaliacoes";
import { Tabs } from "./Tabs";
import TabelaTurmas from "./Turmas";

import styles from "./styles.module.css";

type GerenciamentoRedacoeProps = {
  idvol: number;
};

export default function GerenciamentoRedacoes({
  idvol,
}: GerenciamentoRedacoeProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChangeActiveTab = useCallback(() => {
    setActiveTab((prevActiveTab) => (prevActiveTab === 0 ? 1 : 0));
  }, []);

  const tabsContent = [
    {
      title: "Turmas",
      content: (
        <TabelaTurmas
          handleChangeActiveTab={handleChangeActiveTab}
          idvol={idvol}
        />
      ),
    },
    {
      title: "Avaliações",
      content: (
        <TabelaAvaliacoes handleChangeActiveTab={handleChangeActiveTab} />
      ),
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
