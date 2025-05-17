/* eslint-disable jsx-a11y/media-has-caption */
import Image from "next/image";

import textos from "./depoTextos";

const NUMBER_OF_CONTAINER = 5;

function DepoimentosMain() {
  return (
    <section className="main-container">
      {textos.map((depo, index) => (
        <div
          key={depo.name}
          className={
            index === 2 || index === NUMBER_OF_CONTAINER
              ? "grid-col-span-2"
              : "grid-col"
          }
        >
          <div className="depoimentos-photos">
            <Image src={depo.image} width="100%" height="100%" />
          </div>

          <div className="depoimentos-text">
            <p>
              {depo.texto}
              <br />
              <b>{depo.name}</b>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default DepoimentosMain;
