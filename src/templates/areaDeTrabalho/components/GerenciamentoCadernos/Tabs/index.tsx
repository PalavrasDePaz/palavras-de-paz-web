import React from "react";

import styles from "./styles.module.css";

type Tab = {
  title: string;
  content: React.ReactNode;
  showTab?: boolean;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (number: number) => void;
};

export function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  const visibleTabs = tabs.filter((tab) => tab.showTab !== false);
  return (
    <div className={styles.tab_container}>
      <div className={styles.tabs_container}>
        {visibleTabs.map((tab, index) => (
          <button
            className={
              activeTab === index
                ? `${styles.button} ${styles.button_active} `
                : styles.button
            }
            key={tab.title}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tab_content_container}>
        {visibleTabs.length > 0 && visibleTabs[activeTab].content}
      </div>
    </div>
  );
}
