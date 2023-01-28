import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function OPrograma() {
  return (
    <div className="mt-5">
      <div className="programa-texto">
        <p>
          O Programa de Educação para a Paz é uma série inovadora de workshops, foi desenvolvido pela Fundação The Prem Rawat Foundation (TPRF) e conta com a ajuda de voluntários comprometidos. Consiste em dez aulas, cada uma com foco em um tema específico, é uma proposta educacional transformadora que ajuda as pessoas a descobrirem a própria força interior e paz pessoal.
          <br />
          Os participantes são encorajados a compartilharem seus entendimentos sobre os temas e escreverem suas reflexões em um caderno durante os workshops, dando a oportunidade de refletirem sobre sua própria humanidade.
          O conteúdo de cada tema é extraído de palestras internacionais de Prem Rawat.
          Cujos temas são:
        </p>
      </div>

      <container className="container-programa">
        <div className="d-flex flex-column gap-3">
          <div className="paz-icon">
            <Image src="/static/images/icons/paz.png" width="80px" height="80px" alt="Paz-icon" />
            <p>Paz</p>
          </div>

          <div className="paz-icon">
            <Image src="/static/images/icons/apreciacao.png" width="80px" height="80px" alt="apreciacao-icon" />
            <p>Apreciação</p>
          </div>

          <div className="paz-icon">
            <Image src="/static/images/icons/forcainterior.png" width="80px" height="80px" alt="forca-icon" />
            <p>Força interior</p>
          </div>

          <div className="paz-icon">
            <Image src="/static/images/icons/consciencia.png" width="80px" height="80px" alt="consciência-icon" />
            <p>Consciência</p>
          </div>

          <div className="paz-icon">
            <Image src="/static/images/icons/clareza.png" width="80px" height="80px" alt="clareza-icon" />
            <p>Clareza</p>
          </div>
        </div>
        {/* segundo */}
        <div className="d-flex flex-column gap-3">

          <div className="paz-icon">
            <Image src="/static/images/icons/entendimento.png" width="80px" height="80px" alt="clareza-icon" />
            <p>Entendimento</p>
          </div>

          <div className="paz-icon">
            <Image src="/static/images/icons/dignidade.png" width="80px" height="80px" alt="diginidade-icon" />
            <p>Diginidade</p>
          </div>

          <div className="paz-icon">
            <Image src="/static/images/icons/escolha.png" width="80px" height="80px" alt="escolha-icon" />
            <p>Escolha</p>
          </div>

          <div className="paz-icon">
            <Image src="/static/images/icons/esperanca.png" width="80px" height="80px" alt="esperanca-icon" />
            <p>Esperança</p>
          </div>

          <div className="paz-icon d-flex flex-wrap justify-content-center">
            <Image src="/static/images/icons/contentamento.png" width="80px" height="80px" alt="contentamento-icon" />
            <p>Contentamento</p>
          </div>
        </div>
      </container>
      <div className="programa-texto">
        <p className="text-center">
          Você é nosso convidado para participar de um encontro do ​Programa de Educação para a Paz que ocorre todos os dias, das 19h30min às 20h30min, pela plataforma Zoom.
          <br />
          De modo gratuito, online e ao vivo.
        </p>
      </div>
      <div className="my-5 programa-button">
        <p><a className="text-decoration-none text-dark" href="https://us02web.zoom.us/j/81046198333">Participe da Reunião</a></p>
      </div>
      <div className="programa-texto">
        <p>
          O programa está em fase de expansão no Brasil e por isso queremos alcançar cada vez mais comunidades em situação de vulnerabilidade social e assim, alinhar a nossa estratégia com a ONU, ajudando o país com suas metas de desenvolvimento e amplificar o alcance dos Objetivos do Desenvolvimento Sustentável (ODS) da Agenda 2030 da ONU.
          Para isso precisamos cada vez mais divulgar nossa trabalho e aumentar o número de parcerias e voluntários.
        </p>
      </div>
      <div className="container-programa-button">
        <div className="programa-button2">
          <Link href="/voluntarios"><p className="text-center" style={{ cursor: 'pointer' }}>Seja um voluntário</p></Link>
        </div>

        <div className="programa-button2 user-select-none">
          <Link href="/parcerias"><p className="text-center" style={{ cursor: 'pointer' }}>Seja um parceiro</p></Link>
        </div>

      </div>

    </div>
  );
}

export default OPrograma;
