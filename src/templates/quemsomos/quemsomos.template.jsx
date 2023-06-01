/* eslint-disable react/jsx-max-depth */
import Image from 'next/image';

import card1 from '../../../public/static/images/quemsomos/CameraIdentification.svg';
import card2 from '../../../public/static/images/quemsomos/PuzzleMatching.svg';
import card3 from '../../../public/static/images/quemsomos/ValorSecundario.svg';
import Banner from '../../components/banner';
import Box from '../../components/box';
import Button from '../../components/button/button';
import Center from '../../components/center';
import FixedButton from '../../components/fixedbutton/FixedButton';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Typography from '../../components/typography';

export default function QuemSomosTemplate() {
  return (
    <div>
      <Header />
      <Center>
        <Banner title="QUEM SOMOS" />
        <Box width="88%" margin="auto" direction="column">
          <div>
            <Typography
              margin="48px 0 20px 0"
              fontSize="24px"
              align="start"
              text="A ONG Palavras de Paz é uma organização sem fins lucrativos
            e gerida por voluntários,  tendo como objetivo ajudar as
            pessoas a encontrar a própria paz.
            Esse objetivo é perseguido através de uma licença obtida para pelo TPRF
            (Programa de  Educação para a Paz da Fundação Prem Rawat)."
            />

            <Typography
              margin="0 0 20px 0"
              fontSize="24px"
              align="start"
              text="Acreditamos que esse programa, internacionalmente reconhecido,
            pode ajudar diferentes  comunidades em situação de vulnerabilidade a
            resgatarem sua auto-estima, força interior,  esperança e muitos outros
            recursos que levam a uma vida de paz."
            />
            <Typography
              margin="0 "
              fontSize="24px"
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

          <Box justify="space-around" flexWrap="wrap">
            <Box
              direction="column"
              justify="center"
              width="160px"
              textAlign="center"
            >
              <Image src={ card1 } alt="" width="100%" height="100%" />
              <p>MISSÃO</p>
              <p>Ajudar as pessoas a descobrir a própria força interior</p>
            </Box>
            <Box
              direction="column"
              justify="center"
              width="160px"
              textAlign="center"
            >
              <Image src={ card2 } alt="" width="100%" height="100%" />
              <p>VISÃO</p>
              <p>Enxergamos um mundo onde a paz seja possível para todos</p>
            </Box>
            <Box
              direction="column"
              justify="center"
              width="160px"
              textAlign="center"
            >
              <Image src={ card3 } alt="" width="100%" height="100%" />
              <p>VALORES</p>
              <p>Autoconhecimento, Paz, Dignidade, Esperança e Liberdade</p>
            </Box>
          </Box>
        </Box>
        <Banner title="NOSSA HISTÓRIA" />

        <Box width="80%" margin="auto" direction="column" align="center">
          <div>
            <Typography
              margin="40px 0"
              fontSize="24px"
              align="start"
              text="Após um primeiro contato com vídeos de Prem Rawat,
              nos encantamos com sua maneira simples e didática de explicar
              conceitos fundamentais para se viver uma vida de paz e percebemos
              a transformação que tais ensinamentos fariam na vida da população
              brasileira. "
            />
            <Typography
              margin="24px 0"
              fontSize="24px"
              align="start"
              text="Em 2003, fundamos a ONG, onde até 2013 transmitíamos
              os vídeos de Prem Rawat para o Canal Comunitário de televisão. "
            />
            <Typography
              margin="24px 0"
              fontSize="24px"
              align="start"
              text="Em 2011, paralelamente, firmamos parcerias com muitas
              entidades e associações e conseguimos levar o programa para
              os presídios de SP, trabalho que se estende até hoje.
              Nos últimos anos conseguimos alcançar outras comunidades, levando o programa
              também para alunos e professores de escolas, universitários
              em várias faculdades,
              membros de centros culturais, funcionários de associações
              e empresas, idosos,
              dependentes químicos, moradores em situação de rua e refugiados. "
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
