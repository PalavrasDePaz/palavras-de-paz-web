import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import LogoVoluntarios from '../../../public/static/images/voluntarios.png';
import Center from '../atoms/center/Center';

function VoluntariosMain() {
  return (
    <>
      <Center>
        <container className="voluntarios-container1">

          <div className="voluntarios-texto">
            <p>
              Voluntário é um cidadão que ao perceber diferenças sociais, disponibiliza o seu tempo para atuar em pró de outros seres humanos e assim contribui com um mundo novo. A remuneração de um voluntário é em formato de aprendizado, experiência, satisfação e realização.
            </p>
            <p>Em nosso programa há várias modalidades de voluntariado, você pode contribuir tanto presencial quanto remoto, mas atenção aos requisitos.</p>
          </div>
          <div>
            <Image src={LogoVoluntarios} alt="imagens-voluntarios" width="576px" height="462px" />
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
                Avaliador de Cadernos de detentos que fazem o curso de Educação para Paz;
                Parecerista do Clube de Leitura nas prisões;
                Participantes de eventos com moradores de rua;
                Facilitadores do curso;
                Tradutores;
                Operador do Zoom e outras plataformas;
                Social media (redes sociais).

              </p>
            </div>

          </div>

          <container className="voluntarios-container-main">

            <div className="voluntarios-titulo-card">
              <h3>REQUISITOS</h3>
            </div>

            <div className="voluntarios-text">
              <p>
                Ter mais de 18 anos;
                Dispor de computador e/ou celular;
                Ter completado um Programa de Educação para a Paz (workshops);
                Ter comprometimento com prazos e tarefas;
                Ter sigilo com dados e informações;
                Ter suspensão de julgamento;
                Capacidade de trabalhar em equipe.
              </p>
            </div>
          </container>
        </container>
        <div className="voluntarios-botton">
          <p>
            Se você quer fazer parte
            da equipe, se cadastre, mesmo que não tenha feito qualquer workshop, nossa equipe entrará em contato. Outra opção é se inscrever pelo Atados.
          </p>
        </div>

        <container className="voluntarios-container-button">

          <div className="voluntarios-style-button">
            <p><Link style={{ color: 'white' }} href="https://form.jotform.com/220305437068653" alt="formulario de inscrição">CADASTRO</Link></p>
          </div>

          <div className="voluntarios-style-button">
            <p><Link style={{ color: 'white' }} href="https://www.atados.com.br/ong/programa-de-educacao-para-paz/vagas" alt="link atados">ATADOS</Link></p>

          </div>

        </container>

      </Center>
      <div className="voluntarios-banner-botton">
        <p>``Precisamos nos ver como fonte de paz. Se adotarmos essa</p>
        <p>abordagem, a paz chegará´´</p>
        <p>Prem Rawat</p>
      </div>
      <Center>
        <div className="voluntarios-button-doacao">
          <Link href="/doacoes">Faça uma doação</Link>
        </div>
      </Center>
    </>
  );
}

export default VoluntariosMain;
