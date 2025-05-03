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

      <div className="grid-col-span-2">
        <div
          className="depoimentos-text"
          style={{ justifyContent: "center", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            <video controls style={{ width: "100%", maxWidth: 300 }}>
              <source src="/static/videos/depoimentos.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          <b style={{ fontSize: "1.25rem", marginBottom: 30 }}>
            Daniel/Diretor de CPP de Jardinópolis
          </b>
        </div>
      </div>
    </section>
  );
}

export default DepoimentosMain;
