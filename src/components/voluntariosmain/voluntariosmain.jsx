/* eslint-disable react/jsx-max-depth */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import LogoVoluntarios from "../../../public/static/images/voluntarios.png";
// import cadastroTemplate from "../../templates/cadastro/CadastroTemplate";
import Center from "../center";

import styles from "./VoluntariosMain.module.css";

function VoluntariosMain() {
  return (
    <>
      <Center>
        <container className="voluntarios-container1">
          <div className="voluntarios-texto">
            <p>
              Voluntário é um cidadão que ao perceber diferenças sociais,
              disponibiliza o seu tempo para atuar em pró de outros seres
              humanos e assim contribui com um mundo novo. A remuneração de um
              voluntário é em formato de aprendizado, experiência, satisfação e
              realização.
            </p>
            <p>
              Em nosso programa há várias modalidades de voluntariado, você pode
              contribuir tanto presencial quanto remoto, mas atenção aos
              requisitos.
            </p>
          </div>
          <div>
            <Image
              src={LogoVoluntarios}
              alt="imagens-voluntarios"
              width="576px"
              height="462px"
            />
          </div>
        </container>

        {/* comeco do container 2 */}

        <container className="voluntarios-principal">
          <div className="voluntarios-container-main">
            <div className="voluntarios-titulo-card">
              <h3>MODALIDADES</h3>
            </div>

            <div className="voluntarios-text">
              <p>
                Avaliador de Reflexões de detentos que fazem o curso de Educação
                para Paz; Parecerista do Clube de Leitura nas prisões;
                Participantes de eventos com moradores de rua; Facilitadores do
                curso; Tradutores; Operador do Zoom e outras plataformas; Social
                media (redes sociais).
              </p>
            </div>
          </div>

          <container className="voluntarios-container-main">
            <div className="voluntarios-titulo-card">
              <h3>REQUISITOS</h3>
            </div>

            <div className="voluntarios-text">
              <p>
                Ter mais de 18 anos; Dispor de computador e/ou celular; Ter
                completado um Programa de Educação para a Paz (workshops); Ter
                comprometimento com prazos e tarefas; Ter sigilo com dados e
                informações; Ter suspensão de julgamento; Capacidade de
                trabalhar em equipe.
              </p>
              <a
                href="arquivosDownload/CodigoDeEtica.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="link-codigo-etica"
              >
                Código de Ética do Palavras de Paz
              </a>
            </div>
          </container>
        </container>
        <div className="voluntarios-botton">
          <p>
            Se você quer fazer parte da equipe, se cadastre, mesmo que não tenha
            feito qualquer workshop, nossa equipe entrará em contato. Outra
            opção é procurar pelo{" "}
            <a
              className={styles.atadosLink}
              href="https://www.atados.com.br/ong/programa-de-educacao-para-paz/vagas"
              target="_blank"
              rel="noreferrer"
            >
              Atados
            </a>
          </p>
        </div>

        <container className="voluntarios-container-button">
          <div className="voluntarios-style-button">
            {new Date() >= new Date("2023-12-17") ? (
              <p>
                <Link href="/cadastro" className={styles.linkCadastro}>
                  CADASTRO
                </Link>
              </p>
            ) : (
              <p>
                <Link
                  href="https://form.jotform.com/220305437068653"
                  className={styles.linkCadastro}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://form.jotform.com/220305437068653"
                  >
                    CADASTRO
                  </a>
                </Link>
              </p>
            )}
          </div>
        </container>
      </Center>
      <div className="voluntarios-banner-botton">
        <p>&quot;Precisamos nos ver como fonte de paz. Se adotarmos essa</p>
        <p>abordagem, a paz chegará&quot;</p>
        <p>Prem Rawat</p>
      </div>

      <div className="voluntarios-button-doacao">
        <Link href="/doacoes">Faça uma doação</Link>
      </div>
    </>
  );
}

export default VoluntariosMain;
