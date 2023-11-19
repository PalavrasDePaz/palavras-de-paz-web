import React, { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

import Box from "../box";
import ButtonForm from "../fixedbutton/ButtonForm";

function Footer() {
  const [smShow, setSmShow] = useState(false);
  return (
    <footer className="footer">
      <div className="line-footer" />
      <div className="medias-footer">
        <a
          href="https://www.youtube.com/channel/UCkmhiQTeUfdvKIY9NG9Navg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              className="rounded"
              id="you"
              src="/static/images/youtube.png"
              width="40px"
              height="40px"
              alt="youtube"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/palavrasdepaz.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              id="insta"
              src="/static/images/instagram.png"
              width="40px"
              height="40px"
              alt="instagram"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/palavrasdepaz/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              id="link"
              src="/static/images/linkedin.png"
              width="40px"
              height="40px"
              alt="linkedin"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
        <a
          href="https://www.facebook.com/palavrasdepaz.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              id="face"
              src="/static/images/facebook.png"
              width="40px"
              height="40px"
              alt="facebook"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
        <a
          href="https://wa.me/5511999756554"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              id="whats"
              src="/static/images/whatsapp.png"
              width="40px"
              height="40px"
              alt="whatsapp"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
      </div>
      <div className="line-footer" />
      <div className="acesso-footer">
        <p className="acesso-paragraph">ACESSO RÁPIDO</p>
      </div>

      <container className="opcoes-footer">
        <div className="colunas-footer">
          <h6 className="footer-title">Quem Somos</h6>
          <a href="/equipe" rel="noopener noreferrer">
            Nossa equipe
          </a>
          <a href="/sobre-nos" rel="noopener noreferrer">
            Nossa História
          </a>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">O Programa</h6>
          <a
            href="https://us02web.zoom.us/j/81046198333"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reunião
          </a>
          <a
            href="https://www.premrawat.com/pt-br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prew Rawat
          </a>
          <a
            href="https://tprf.org/pt-br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TPRF
          </a>
          <a href="/downloads" target="_blank" rel="noopener noreferrer">
            Downloads
          </a>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Voluntários</h6>
          <a
            href="https://form.jotform.com/220305437068653"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cadastro
          </a>
          <a
            href="https://www.atados.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atados
          </a>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Parcerias</h6>
          <a href="/parcerias" target="_blank" rel="noopener noreferrer">
            Objetivo
          </a>
          <button onClick={() => setSmShow(true)}>Contato</button>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Doações</h6>
          <a
            href="/doacoes/relatorio-semestral-2023-01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prestação de contas
          </a>
          <a href="/doacoes" target="_blank" rel="noopener noreferrer">
            PIX
          </a>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Home</h6>
          <a href="/galeria" target="_blank" rel="noopener noreferrer">
            Galeria de fotos
          </a>
          <a href="/publicacoes" target="_blank" rel="noopener noreferrer">
            Publicações
          </a>
          <a href="/depoimentos" target="_blank" rel="noopener noreferrer">
            Depoimentos
          </a>
        </div>
      </container>

      <container className="rodape-footer">
        <div>
          <p>Direitos reservados à Palavra de Paz</p>
        </div>
        <div className="copyright-footer">
          <p>
            <a
              href="/desenvolvedores"
              target="_blank"
              rel="noopener noreferrer"
            >
              ©2022 Desenvolvedores
            </a>
          </p>
        </div>
        <div>
          <p>CNPJ: 05.920.548/0001-73</p>
        </div>
      </container>
      <Modal
        width="100%"
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
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
          <ButtonForm />
        </Modal.Body>
      </Modal>
    </footer>
  );
}

export default Footer;
