/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line simple-import-sort/imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import DoacaoPix from "./DoacaoPix";

import Center from "../center";

function Doacoes() {
  return (
    <Center>
      <div className="doacao-main">
        <div className="doacao-main-texto">
          <div className="doacao-texto">
            <p>
              Doar é um ato genuíno de bondade que faz a diferença na vida não
              só de quem recebe, mas também de quem doa, pois traz sentimentos
              de alegria, satisfação e plenitude.
            </p>

            <p>
              {" "}
              Também nos tornamos mais justos e igualitários, pois ao contribuir
              para suprir as necessidades do próximo, contribuimos para a
              melhora das instituições, das pessoas e da sociedade como um todo.
            </p>
            <p>
              Desde já gostaríamos de agradecer pela sua doação e dizer que ela
              é fundamental, pois este ato de compaixão e amor ao próximo nos
              permitirá continuar a:
            </p>
          </div>
        </div>
        <div className="doacoes-image">
          <Image
            src="/static/images/doacoes.png"
            width={456}
            height={680}
            alt="mão entregando um papel a outra mão"
          />
        </div>
      </div>
      <div />
      <div className="doacoes-texto-icones doacoes-icones">
        <div className="text-center">
          <Image
            src="/static/images/transformar.png"
            width="100%"
            height="100%"
            alt=""
          />
          <p className="display-6">Transformar vidas</p>
        </div>
        <div className="text-center">
          <Image
            src="/static/images/sorriso.png"
            width="100%"
            height="100%"
            alt=""
          />
          <p className="display-6">Gerar sorrisos</p>
        </div>
        <div className="text-center">
          <Image
            src="/static/images/paz.png"
            width="100%"
            height="100%"
            alt=""
          />
          <p className="display-6">Promover a paz</p>
        </div>
      </div>

      <Link href="/doacoes/relatorio-semestral-2023-01">
        <div className="relatorio-link text-center">
          RELATÓRIO DO 1º SEMESTRE DE 2023
        </div>
      </Link>

      <div>
        <div className="doacoes-atraves text-center">
          <p>DOE ATRAVÉS DE</p>
        </div>

        <div className="meio-de-doacao">
          <p>Conheça nossa nova plataforma de doações!</p>
          <p>Clique no botão de doar e faça parte dessa corrente do bem.</p>
          <p>
            Com sua contribuição podemos manter as atividades atuais expandir
            nossos sonhos de um mundo em Paz.
          </p>
          <a
            href="https://palavrasdepaz.colabore.org/doacoes/single_step"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doe Agora
          </a>
        </div>

        <div className="doacoes-atraves text-center">
          <p>DOE TAMBÉM POR</p>
        </div>

        <div className="doacoes-empresas ">
          <DoacaoPix />

          <div className="doacoes-images-empresas ">
            <h2 className="text-black">Transferência</h2>
            <div className="doacoes-images-empresas d-flex justify-content-center border-0">
              <h3>Itau ag: 0646</h3>
              <h3>conta: 66704-8</h3>
              <h3>CNPJ:</h3>
              <h3> 05920548/0001-73</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-paz">
        <div className="doacoes-banner-texto">
          <p>"Eu quero ver a paz dançando no coração de todo ser humano."</p>
          <p>Prem Rawat</p>
        </div>
      </div>

      <div className="doacoes-contas">
        <a href="/doacoes/relatorio-semestral-2023-01">
          <p>Prestação de contas</p>
        </a>

        <div>
          {" "}
          <Button href="/voluntarios" className="btn-voluntario">
            Seja um voluntário
          </Button>
        </div>
      </div>
    </Center>
  );
}

export default Doacoes;
