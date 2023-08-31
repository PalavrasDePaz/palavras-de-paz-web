import React from "react";

const BtnGestao = () => {
  function handleClick() {
    return console.log("enviado");
  }
  return <button onClick={handleClick}>Baixar</button>;
};

export default BtnGestao;
