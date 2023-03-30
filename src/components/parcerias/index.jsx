import Image from 'next/image';
import Box from '../box';
import Typography from '../typography';
import card1 from '../../../public/static/images/parceiro/Building.svg';
import card2 from '../../../public/static/images/parceiro/Enterprise.svg';
import card3 from '../../../public/static/images/parceiro/GraduationScroll.svg';
import card4 from '../../../public/static/images/parceiro/NonProfit.svg';
import card5 from '../../../public/static/images/parceiro/School.svg';
import banner from '../../../public/static/images/parceiro/image1.svg';
import Button from '../button/button';
import FixedButton from '../fixedbutton/FixedButton';
import Center from '../center';

function Partners() {
  return (
    <Center>
      <div
        className="banner-gradient"
        style={ {
          zIndex: -2,
          display: 'flex',
          height: '176px',
          padding: '10px',
          alignItems: 'end',
          justifyContent: 'end',
        } }
      >
        <Typography
          margin="100px 0 0 0"
          fontWeight="700"
          fontSize="52px"
          color="white"
          text="SEJA NOSSO PARCEIRO"
        />
      </div>

      <Box width="88%" margin="auto" direction="column">
        <Typography
          margin="80px 0 80px 0"
          fontSize="24px"
          align="start"
          text="Temos como objetivo, através de nosso programa,
              ajudar as pessoas a acessarem suas ferramentas internas para
              encontrar a própria paz. A principal maneira que estamos
              disseminando o programa é a partir de parcerias com instituições
              de todos os setores, como, por exemplo:"
        />

        <Box justify="space-around" flexWrap="wrap">
          <Box
            direction="column"
            justify="center"
            width="160px"
            textAlign="center"
          >
            <Image src={ card1 } alt="" width="100%" height="100%" />
            <p>
              Entidades
              públicas
            </p>
          </Box>

          <Box
            direction="column"
            justify="center"
            width="160px"
            textAlign="center"
          >
            <Image src={ card2 } alt="" width="100%" height="100%" />
            <p>
              Empresas
              privadas
            </p>
          </Box>

          <Box
            direction="column"
            justify="center"
            width="160px"
            textAlign="center"
          >
            <Image src={ card4 } alt="" width="100%" height="100%" />
            <p>
              Órgãos
              {' '}
              governamentais
            </p>
          </Box>

          <Box
            direction="column"
            justify="center"
            width="160px"
            textAlign="center"
          >
            <Image src={ card3 } alt="" width="100%" height="100%" />
            <p>Universidades</p>
          </Box>

          <Box
            direction="column"
            justify="center"
            width="160px"
            textAlign="center"
          >
            <Image src={ card5 } alt="" width="100%" height="100%" />
            <p>Escolas</p>
          </Box>
        </Box>

        <div>
          <Typography
            margin="80px 0 40px 0"
            fontSize="24px"
            align="start"
            text="O Programa é uma série de workshops que ajudam
              as pessoas a descobrirem a própria força interior e paz
              pessoal, sendo encorajados a compartilharem seus entendimentos
              sobre os temas e escreverem suas reflexões. Dando assim, a
              oportunidade de refletirem sobre si mesmo e sobre seus recursos
              interiores como    escolha, esperança e dignidade."
          />
        </div>

        <Box
          direction="column"
          justify="center"
          align="center"
          gap="8px"
          margin="24px auto"
        >
          <Image src={ banner } alt="" />
        </Box>
      </Box>

      <Box
        width="70%"
        margin="auto"
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <div>
          <Typography
            fontWeight="700"
            margin="0 0 40px 0"
            fontSize="24px"
            text="Ficaremos muito felizes com a possibilidade de
              trabalharmos juntos e sermos parceiros nessa jornada de
              resgate da humanidade!"
          />
        </div>
        <Button
          margin="0 0 20px 0"
          fontWeight="600"
          text="Fale diretamente com o presidente da ONG"
          justify="center"
          width="55vw"
          height="56px"
          color="black"
          bg="#B4EFE0"
          href="https://wa.me/5511999756554"
        />
      </Box>

      <Box justify="center" padding="0 0 32px 0 " gap="48px" margin="24px 0">
        <Button
          href="/depoimentos"
          justify="center"
          textAlign="center"
          width="200px"
          height="48px"
          color="black"
          text="Mais Depoimentos"
          hover="rgba(33, 170, 133, 1)"
          font_size="font-size"
        />
        <Button
          href="/galeria"
          justify="center"
          textAlign="center"
          width="200px"
          height="48px"
          color="black"
          text="Galeria de Fotos"
          hover="rgba(33, 170, 133, 1)"
          font_size="font-size"
        />
      </Box>
      <FixedButton />
    </Center>
  );
}

export default Partners;
