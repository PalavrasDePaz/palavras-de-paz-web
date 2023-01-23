import * as S from "./styled";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Typography } from "../atoms/typography/Typography";
import Box from "../atoms/box/Box";


export default function FixedButton() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);


  return (

    <>

      <S.FixedBtn onClick={() => setSmShow(true)} className="animate__animated animate__fadeInRight animate__delay-4s">CONTATO</S.FixedBtn>

      <Modal
        width="100%"
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Box display="flex" direction="column">
            <Modal.Title id="example-modal-sizes-title-sm" className="text-center mt-4">
              CONTATO
            </Modal.Title>
            <div>
              <p className="text-center">
                <br />Fique à vontade.
                Retornaremos em breve.</p>
            </div>
          </Box>
        </Modal.Header>
        <Modal.Body>
          {/* formulario de contato */}
          <form action="https://formsubmit.co/info@palavrasdepaz.org" method="POST">
            <div className="mb-3">
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_autoresponse" value="Agradecemos o contato! Responderemos sua mensagem em breve!" />
              <input type="hidden" name="_subject" value="Mensagem via site da ONG!" />
              <input type="hidden" name="_next" value="https://palavrasdepaz.org" />
              <label className="form-label">Nome</label>
              <input type="name" className="form-control" placeholder="Digite seu nome" name="Nome" required />
              <label className="form-label">Email</label>
              <input type="email" name="Email" className="form-control" placeholder="Digite seu email" required />
              <label className="form-label">Assunto</label>
              <input type="text" name="Assunto" className="form-control" placeholder="Assunto da sua mensagem" />
              <label className="form-label">Mensagem</label>
              <textarea type="text" name="Mensagem" className="form-control" required />
            </div>
            <Box display="flex" justify="center">
              <button type="submit" style={{ background: "rgba(33,170,133,1)", border: "none", borderRadius: "10px", textAlign: "center", padding: "8px 24px", color: "white", fontWeight: "bold", letterSpacing: "0.1em" }}>ENVIAR</button>
            </Box>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        style={{ width: "476px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            CONTATO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>

  )
}
