import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="line-footer" />
      <div className="medias-footer">
        <Link
          href="https://www.youtube.com/channel/UCkmhiQTeUfdvKIY9NG9Navg"
          target="_blank"
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
        </Link>
        <Link
          href="https://www.instagram.com/palavrasdepaz.br/"
          target="_blank"
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
        </Link>
        <Link
          href="https://www.linkedin.com/company/palavrasdepaz/mycompany/"
          target="_blank"
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
        </Link>
        <Link href="https://www.facebook.com/palavrasdepaz.br" target="_blank">
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
        </Link>
        <Link href="https://wa.me/5511999756554" target="_blank">
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
        </Link>
      </div>
      <div className="line-footer" />
      <div className="acesso-footer">
        <p className="acesso-paragraph">ACESSO RÁPIDO</p>
      </div>

      <container className="opcoes-footer">
        <div className="colunas-footer">
          <h6 className="footer-title">Quem Somos</h6>
          <Link href="/equipe">Nossa equipe</Link>
          <Link href="/sobre-nos">Nossa História</Link>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">O Programa</h6>
          <Link href="https://us02web.zoom.us/j/81046198333 ">Reunião</Link>
          <Link
            href="https://www.premrawat.com/pt-br/"
            target="_blank"
            rel="noopener"
          >
            Prew Rawat
          </Link>
          <Link href="https://tprf.org/pt-br/" target="_blank" rel="noopener">
            TPRF
          </Link>
          <Link href="/">Downloads</Link>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Voluntários</h6>
          <Link href="https://form.jotform.com/220305437068653">Cadastro</Link>
          <Link href="https://www.atados.com.br/" target="_blank">
            Atados
          </Link>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Parcerias</h6>
          <Link href="/parcerias">Objetivo</Link>
          <Link href="/">Contato</Link>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Doações</h6>
          <Link href="/doacoes/relatorio-semestral-2023-01">
            Prestação de contas
          </Link>
          <Link href="/doacoes">PIX</Link>
          <Link href="/doacoes">PayPal</Link>
        </div>

        <div className="colunas-footer">
          <h6 className="footer-title">Home</h6>
          <Link href="/galeria">Galeria de fotos</Link>
          <Link href="/publicacoes">Publicações</Link>
          <Link href="/depoimentos">Depoimentos</Link>
        </div>
      </container>

      <container className="rodape-footer">
        <div>
          <p>Direitos reservados à Palavra de Paz</p>
        </div>
        <div className="copyright-footer">
          <p>
            <Link href="/desenvolvedores">©2022 Desenvolvedores</Link>
          </p>
        </div>
        <div>
          <p>CNPJ: 05.920.548/0001-73</p>
        </div>
      </container>
    </footer>
  );
}

export default Footer;
