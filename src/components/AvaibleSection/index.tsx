import React from "react";

import { Section } from "./styled";

interface IPROPS {
  title: string;
  children: React.ReactNode;
}

export default function AvailableSection({ title, children }: IPROPS) {
  return (
    <Section>
      <h2>{title}</h2>
      <div className="overflow__container">{children}</div>
    </Section>
  );
}
