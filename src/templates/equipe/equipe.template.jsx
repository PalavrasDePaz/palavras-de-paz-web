/* eslint-disable max-lines */
/* eslint-disable react/jsx-key */
import Image from 'next/image';
import Box from '../../components/box';
import Typography from '../../components/typography';
import Header from '../../components/header/Header';
import card1 from '../../../public/static/images/equipe/Ellipse2-1.svg';
import card2 from '../../../public/static/images/equipe/Ellipse2-2.svg';
import card3 from '../../../public/static/images/equipe/Ellipse2-3.svg';
import card4 from '../../../public/static/images/equipe/Ellipse2-4.svg';
import card5 from '../../../public/static/images/equipe/Ellipse2-6.svg';
import card6 from '../../../public/static/images/equipe/Ellipse-A.svg';
import card7 from '../../../public/static/images/equipe/Ellipse2-8.svg';
import card8 from '../../../public/static/images/equipe/Ellipse2-9.svg';
import card9 from '../../../public/static/images/equipe/Ellipse2-10.svg';
import card10 from '../../../public/static/images/equipe/Ellipse2-11.svg';
import card11 from '../../../public/static/images/equipe/Ellipse2-12.svg';
import card12 from '../../../public/static/images/equipe/Ellipse2.svg';
import card13 from '../../../public/static/images/equipe/Ellipse2-5.svg';

import Footer from '../../components/footer/Footer';
import Button from '../../components/button/button';
import FixedButton from '../../components/fixedbutton/FixedButton';

export default function ParceirosTemplate() {
  return (
    <div>
      <Header />
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
          fontSize="36px"
          color="white"
          text="SEJA NOSSO PARCEIRO"
        />
      </div>

      <Box
        margin="0 auto"
        flexWrap="wrap"
        maxWidth="1416px"
        align="center"
        justify="space-around"
      >
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card11 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['IVETE BELFORT', <br />, 'PRESIDENTE DA ONG'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>

        <Box
          padding="16px"
          textAlign="center"
          border="1px solid #0FE0AA"
          maxWidth="920px"
          direction="column"
          justify="center"
        >
          <Typography
            text="“Enxergamos um mundo onde a paz
            seja, não apenas um sonho possível para poucos,
            mas sim uma realidade praticável para todos.
            A paz sempre foi a principal
            busca da humanidade ao longo da história, e
            por isso, sabemos o desafio que é alcançá-la. Por isto, contamos com
            uma equipe multidisciplinar, onde cada um é responsável por uma tarefa.
            Conheça nossa equipe.”"
          />
          <Typography margin="0 auto" text="Palavras da Presidente" />
        </Box>
      </Box>

      <Box
        maxWidth="1416px"
        margin="24px auto"
        flexWrap="wrap"
        gap="16%"
        align="center"
        justify="center"
      >

        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card6 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['ANA PAULA BORO', <br />,
              'SOCIAL MEDIA'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card1 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['ANAÍDE SURANO', <br />,
              'ESTATÍSTICAS'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card2 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['ANNA SQUADRONI', <br />,
              'HELP DESK CADERNO DOS DETENTOS'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card3 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['CLEIDE DINARDI', <br />, 'AVALIAÇÃO DOS CADERNOS'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card4 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['DIVA DA SILVA', <br />, 'FACILITADORA'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card12 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['FERNANDA SERRA', <br />, 'TRADUÇÃO'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card5 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['GIANFRANCO BOCCEDI', <br />, 'T.I'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card13 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={
              [
                'MÔNICA LOPES',
                <br />,
                'COORDENADORIADE INTEGRIDADE E EXPERIÊNCIA']
            }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card7 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['PAOLA SQUADRONI', <br />, 'CLUBE DE LEITURA'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card8 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['PAULLA KOCHUTT', <br />, 'CURSOS PARA VOLUNTÁRIADOS'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card9 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['SUSANNE BUSSEM', <br />, 'CURSO PARA VOLUNTÁRIOS'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image
            src={ card10 }
            alt=""
            width="150%"
            height="150%"
          />
          <Typography
            text={ ['TALITA GIANE', <br />, 'MORADORES EM SITUAÇÃO DE RUA'] }
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>

      </Box>

      <Box justify="center" padding="0 0 32px 0 " gap="48px" margin="24px 0">
        <Button
          href="/desenvolvedores"
          justify="center"
          width="200px"
          height="48px"
          color="black"
          text="Desenvolvedores"
        />
      </Box>

      <FixedButton />
      <Footer />
    </div>
  );
}
