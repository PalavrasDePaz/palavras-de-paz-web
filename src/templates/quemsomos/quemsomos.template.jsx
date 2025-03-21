/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import Image from "next/image";

import card1 from "../../../public/static/images/quemsomos/CameraIdentification.svg";
import card2 from "../../../public/static/images/quemsomos/PuzzleMatching.svg";
import card3 from "../../../public/static/images/quemsomos/ValorSecundario.svg";
import Banner from "../../components/banner";
import Box from "../../components/box";
import Button from "../../components/button/button";
import Center from "../../components/center";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Typography from "../../components/typography";

export default function QuemSomosTemplate() {
  return (
    <div>
      <Header />
      <Center>
        <Banner title="QUEM SOMOS" />

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <video width="600" controls>
            <source src="/static/videos/about.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

        <Box width="88%" margin="auto" direction="column">
          <div>
            <Typography
              margin="48px 0 20px 0"
              fontSize="20px"
              align="start"
              text="A ONG Palavras de Paz é uma organização sem fins lucrativos
            e gerida por voluntários,  tendo como objetivo ajudar as
            pessoas a encontrar a própria paz.
            Esse objetivo é perseguido através de uma licença obtida para pelo TPRF
            (Programa de  Educação para a Paz da Fundação Prem Rawat)."
            />

            <Typography
              margin="0 0 20px 0"
              fontSize="20px"
              align="start"
              text="Acreditamos que esse programa, internacionalmente reconhecido,
            pode ajudar diferentes  comunidades em situação de vulnerabilidade a
            resgatarem sua auto-estima, força interior,  esperança e muitos outros
            recursos que levam a uma vida de paz."
            />
            <Typography
              margin="0 0 20px 0"
              fontSize="20px"
              align="start"
              text="Ao invés de descrever ou definir a paz, o programa
            empodera os indivíduos a alcançar seu próprio entendimento.
            Todos podem se beneficiar. O programa já se provou eficiente em
            uma variedade de situações, incluindo centros comunitários, grupos
            de jovens, escolas, programas de educação para adultos, grupos de
            veteranos de guerra, centros de aposentados, abrigos de moradores
            em situação de rua, instituições de reabilitação de dependentes
            químicos e penitenciárias."
            />
          </div>

          <Box
            justify="space-around"
            flexWrap="wrap"
            direction="column"
            width="100%"
          >
            <Box
              direction="column"
              justify="center"
              width="100%"
              textAlign="center"
            >
              <Image src={card1} alt="" width="100%" height="100%" />
              <p style={{ fontSize: "20px" }}>MISSÃO</p>
              <p style={{ textAlign: "left", fontSize: "18px" }}>
                Promover a paz pessoal e a transformação social por meio do
                Programa de Educação para a Paz, ajudando comunidades
                vulneráveis, presidiários e universitários a descobrir sua força
                interior e desenvolver os recursos necessários para uma vida
                digna e plena.
              </p>
            </Box>
            <Box
              direction="column"
              justify="center"
              width="100%"
              textAlign="center"
            >
              <Image src={card2} alt="" width="100%" height="100%" />
              <p style={{ fontSize: "20px" }}>VISÃO</p>
              <p style={{ textAlign: "left", fontSize: "18px" }}>
                Construir um mundo onde a paz seja uma realidade acessível para
                todos, fortalecendo indivíduos e comunidades por meio do
                autoconhecimento, da escolha consciente e da esperança.
              </p>
            </Box>
            <Box
              direction="column"
              justify="center"
              width="100%"
              textAlign="center"
            >
              <Image src={card3} alt="" width="100%" height="100%" />
              <p style={{ fontSize: "20px" }}>VALORES</p>
              <p style={{ textAlign: "left", fontSize: "18px" }}>
                1. Paz e dignidade: Garantir que a paz seja reconhecida como um
                direito fundamental, promovendo o respeito à dignidade e à
                liberdade de escolha de cada pessoa.{" "}
              </p>
              <p style={{ textAlign: "left", fontSize: "18px" }}>
                2. Autoconhecimento: Incentivar cada indivíduo a descobrir sua
                força interior e a apreciar as ferramentas inatas que levam à
                transformação pessoal e comunitária
              </p>
              <p style={{ textAlign: "left", fontSize: "18px" }}>
                3. Esperança e clareza: Inspirar confiança no futuro e a clareza
                necessária para enfrentar os desafios da vida com propósito e
                serenidade.
              </p>
              <p style={{ textAlign: "left", fontSize: "18px" }}>
                4. Voluntariado como base: Valorizar o trabalho em equipe, o
                acolhimento e o comprometimento de cada voluntário como pilares
                para o sucesso da missão.
              </p>
              <p style={{ textAlign: "left", fontSize: "18px" }}>
                5. Gratuidade e acesso: Oferecer o Programa de Educação para a
                Paz de forma gratuita, reafirmando o compromisso de tornar a paz
                acessível a todos.
              </p>
            </Box>
          </Box>
        </Box>
        <Banner title="NOSSA HISTÓRIA" />

        <Box width="80%" margin="auto" direction="column" align="center">
          <div>
            <Typography
              margin="40px 0"
              fontSize="20px"
              align="start"
              text="A ONG Palavras de Paz é uma organização sem fins lucrativos e gerida por voluntários, tendo como objetivo ajudar as pessoas a encontrar a própria paz. Esse objetivo é perseguido através de uma licença obtida para pelo TPRF (Programa de Educação para a Paz da Fundação Prem Rawat)."
            />
            <Typography
              margin="40px 0"
              fontSize="20px"
              align="start"
              text="Acreditamos que esse programa, internacionalmente reconhecido, pode ajudar diferentes comunidades em situação de vulnerabilidade a resgatarem sua auto-estima, força interior, esperança e muitos outros recursos que levam a uma vida de paz."
            />
            <Typography
              margin="24px 0"
              fontSize="20px"
              align="start"
              text="Ao invés de descrever ou definir a paz, o programa empodera os indivíduos a alcançar seu próprio entendimento. Todos podem se beneficiar. O programa já se provou eficiente em uma variedade de situações, incluindo centros comunitários, grupos de jovens, escolas, programas de educação para adultos, grupos de veteranos de guerra, centros de aposentados, abrigos de moradores em situação de rua, instituições de reabilitação de dependentes químicos e penitenciárias."
            />
            <Typography
              margin="24px 0"
              fontSize="20px"
              align="start"
              text="Os projetos possuem diversos parceiro, entre eles: ESAF do Ministério da Fazenda; Receita Federal de São Paulo; Secretaria da Justiça e Cidadania do Estado de São Paulo; Fundo Social e Solidariedade do Estado de São Paulo; Polícia Militar; várias Unidades Penitenciárias com o apoio da FUNAP (Fundação de Amparo ao Preso Trabalhador); Prefeitura da Cidade de São Paulo; SENAC; PUC; Faculdade São Bento; UNIBES; BIBLIASPA; entre outros."
            />
          </div>
          <Button
            href="/equipe"
            text="Nossa equipe"
            justify="center"
            width="200px"
            margin="20px 0 40px 0"
            height="56px"
            color="black"
            hover="rgba(33, 170, 133, 1)"
            font_size="font-size"
          />
        </Box>
      </Center>
      <FixedButton />
      <Footer />
    </div>
  );
}
