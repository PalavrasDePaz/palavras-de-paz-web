import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import * as S from './styled';
import Box from '../box';
import Button from '../button/button';

export default function FixedButton() {
  const [smShow, setSmShow] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const HEIGHT_TO_SHOW_BUTTON = 500;
  const HEIGHT_TO_SHOW_BUTTON_MOBILE = 3500;
  const WIDTH_TO_SHOW_BUTTON_MOBILE = 768;

  const handleScroll = () => {
    setHeight(window.scrollY);
  };

  const handleResize = () => {
    if (window.innerWidth >= WIDTH_TO_SHOW_BUTTON_MOBILE) {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <>
      {width <= WIDTH_TO_SHOW_BUTTON_MOBILE && height <= HEIGHT_TO_SHOW_BUTTON_MOBILE && (
        <S.FixedBtnMobile
          onClick={ () => setSmShow(true) }
          className="animate__animated animate__fadeInRight"
        >
          <img
            src="/static/images/msg_icon.svg"
            width="45px"
            height="45px"
            alt=""
          />
        </S.FixedBtnMobile>
      )}

      {width >= WIDTH_TO_SHOW_BUTTON_MOBILE && height >= HEIGHT_TO_SHOW_BUTTON && (
        <S.FixedBtn
          onClick={ () => setSmShow(true) }
          className="animate__animated animate__fadeInRight"
        >
          CONTATO
        </S.FixedBtn>
      )}

      <Modal
        width="100%"
        size="sm"
        show={ smShow }
        onHide={ () => setSmShow(false) }
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Box display="flex" direction="column">
            <Modal.Title
              id="example-modal-sizes-title-sm"
              className="text-center mt-4"
            >
              CONTATO
            </Modal.Title>
            <p className="text-center">
              Fique à vontade. Retornaremos em breve.
            </p>
          </Box>
        </Modal.Header>

        <Modal.Body>
          <form
            action="https://formsubmit.co/info@palavrasdepaz.org"
            method="POST"
            className="form-modal"
          >
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Agradecemos o contato! Responderemos sua mensagem em breve!"
            />
            <input
              type="hidden"
              name="_subject"
              value="Mensagem via site da ONG!"
            />
            <input
              type="hidden"
              name="_next"
              value="https://palavrasdepaz.org"
            />
            <label htmlFor="name" className="form-label">Nome</label>
            <input
              id="name"
              type="name"
              className="form-control"
              placeholder="Digite seu nome"
              name="Nome"
              required
            />
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              name="Email"
              className="form-control"
              placeholder="Digite seu email"
              required
            />
            <label htmlFor="assunto" className="form-label">Assunto</label>
            <input
              type="text"
              id="assunto"
              name="Assunto"
              className="form-control"
              placeholder="Assunto da sua mensagem"
            />
            <label htmlFor="mensagem" className="form-label">Mensagem</label>

            <textarea
              id="mensagem"
              type="text"
              name="Mensagem"
              className="form-control"
              required
            />

            <Button
              type="submit"
              bg="rgba(33,170,133,1)"
              border="none"
              borderRadius="0.6rem"
              justify="center"
              padding="8px 24px"
              color="white"
              fontWeight="bold"
              letterSpacing="0.1em"
              margin="1.25rem 0"
              text="ENVIAR"
              font_size="1.25rem"
              width="50%"
              shadow={ false }
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
