import React from "react";

/**
 * Export uma opção vazia para os componentes de select
 */
export default function EmptyOption() {
  return (
    <option value="" hidden disabled>
      Selecione
    </option>
  );
}
