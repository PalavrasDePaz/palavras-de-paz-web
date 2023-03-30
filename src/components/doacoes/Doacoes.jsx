/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

function Doacoes() {
  return (
    <>
      <container className="doacao-main">
        <div className="doacao-main-texto">
          <div className="doacao-texto">
            <p>
              Doar é um ato genuíno de bondade que faz a diferença na vida não
              só de quem recebe, mas também de quem doa, pois traz sentimentos
              de alegria, satisfação e plenitude.
            </p>

            <p>
              {' '}
              Também nos tornamos mais justos e igualitários, pois ao
              contribuir para suprir as necessidades do próximo, contribuimos
              para a melhora das instituições, das pessoas e da sociedade como
              um todo.
            </p>
            <p>
              Desde já gostaríamos de agradecer pela sua doação e dizer que
              ela é fundamental, pois este ato de compaixão e amor ao próximo
              nos permitirá continuar a:
            </p>
          </div>
        </div>
        <div className="doacoes-image">
          <Image
            src="/static/images/doacoes.png"
            width="421px"
            height="494px"
            alt=""
          />
        </div>
      </container>
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

      <container>
        <div className="doacoes-atraves text-center">
          <p>DOE ATRAVÉS</p>
        </div>

        <div className="doacoes-empresas my-3">
          <div className="doacoes-pix">
            <Image
              src="/static/images/pix.png"
              width="277%"
              height="92%"
              alt=""
            />
            <Image
              src="/static/images/cnpj.png"
              width="320%"
              height="75%"
              alt=""
            />
          </div>

          <div className="doacoes-images-empresas">
            <Image
              src="/static/images/paypal.png"
              width="227%"
              height="95%"
              alt=""
            />

            <Image
              src="/static/images/american.png"
              width="61%"
              height="61%"
              alt=""
            />
            <Image
              src="/static/images/elo.png"
              width="68%"
              height="67%"
              alt=""
            />
            <Image
              src="/static/images/master.png"
              width="74%"
              height="61%"
              alt=""
            />
            <Image
              src="/static/images/visa.png"
              width="108%"
              height="40%"
              alt=""
            />
            <Image
              src="/static/images/hiper.png"
              width="100%"
              height="48%"
              alt=""
            />
          </div>
        </div>
      </container>

      <container className="banner-paz">
        <div className="doacoes-banner-texto">
          <p>"Eu quero ver a paz dançando no coração de todo ser humano."</p>
          <p>Prem Rawat</p>
        </div>
      </container>

      <container className="doacoes-contas">
        <a href="/">
          <p>Prestação de contas</p>
        </a>

        <div>
          {' '}
          <Button
            href="/voluntarios"
            className="btn-voluntario"
          >
            Seja um voluntário
          </Button>
        </div>

      </container>
    </>
  );
}

export default Doacoes;
