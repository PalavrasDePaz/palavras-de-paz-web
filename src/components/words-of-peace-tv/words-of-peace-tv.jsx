/* eslint-disable max-len */

import React from "react";

import imagem1 from "../../../public/static/images/tv/1.jpg";
import imagem2 from "../../../public/static/images/tv/2.jpg";
import imagem3 from "../../../public/static/images/tv/3.jpg";

import { Galeria, Imagem, Texto, Titulo, VideoContainer } from "./style";

function WordsOfPeaceTVComponent() {
  return (
    <div className="mt-5">
      <div className="programa-texto">
        <VideoContainer>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nTnmqvEU1fY?si=NDr-4oj8XSquFgBk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </VideoContainer>

        <Titulo>Assista ao Palavras de Paz na COMBRASILTV:</Titulo>

        <Texto>
          🌐 Online{" "}
          <a
            href="https://www.combrasiltv.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            combrasiltv.com.br
          </a>
          <br />
          📡 TV por satélite Oi TV – Canal 28 Sky Brasil – Canal 28 Claro TV –
          Canal 03 Vivo TV – Canal 239 Nossa TV – Canal 20
          <br />
          📺 TV a cabo Claro TV – Canal 06 Cabo Telecom – Canal 108
          <br />
          💻 Plataformas digitais CXTV Simulcast Guigo TV – Canal 915 IPTV
          Brasil – Canal 177 CDN TV – Canal 167
        </Texto>

        <Galeria>
          <Imagem src={imagem1.src} alt="Prem Rewat" />
          <Imagem src={imagem2.src} alt="Prem Rewat" />
          <Imagem src={imagem3.src} alt="Prem Rewat em Barcelona" />
        </Galeria>
      </div>
    </div>
  );
}

export default WordsOfPeaceTVComponent;
