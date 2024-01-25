import React, { ChangeEvent } from "react";

interface CampoEditavelProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CampoEditavel: React.FC<CampoEditavelProps> = ({
  label,
  value,
  onChange,
}) => (
  <label>
    {label}:
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default CampoEditavel;
