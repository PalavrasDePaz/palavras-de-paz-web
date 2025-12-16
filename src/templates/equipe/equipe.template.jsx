/* eslint-disable max-len */
/* eslint-disable max-lines */
/* eslint-disable react/jsx-key */
import Image from "next/image";

import alexandre from "../../../public/static/images/equipe/alexandre.jpg";
import beatrizDouto from "../../../public/static/images/equipe/beatriz-douto.png";
import carolinaAssaf from "../../../public/static/images/equipe/carolina-assaf.jpg";
import daniloJesi from "../../../public/static/images/equipe/danilo-jesi.png";
import card13 from "../../../public/static/images/equipe/Ellipse2-5.svg";
import card5 from "../../../public/static/images/equipe/Ellipse2-6.svg";
import card8 from "../../../public/static/images/equipe/Ellipse2-9.svg";
import card11 from "../../../public/static/images/equipe/Ellipse2-12.svg";
import fernanda from "../../../public/static/images/equipe/fernanda.jpg";
import igorCoelho from "../../../public/static/images/equipe/igor-coelho.png";
import julianaAndrade from "../../../public/static/images/equipe/juliana-andrade.png";
import keturiMonteiro from "../../../public/static/images/equipe/keturi-monteiro.jpg";
import layslaSantos from "../../../public/static/images/equipe/laysla-santos.jpg";
import mariliaRibeiro from "../../../public/static/images/equipe/marilia-ribeiro.png";
import soraia from "../../../public/static/images/equipe/soraia.png";
import talitaMelo from "../../../public/static/images/equipe/talita-melo.jpg";
import zezeCole from "../../../public/static/images/equipe/zeze-cole.png";
import Banner from "../../components/banner";
import Box from "../../components/box";
import Button from "../../components/button/button";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Typography from "../../components/typography";

export default function ParceirosTemplate() {
  return (
    <div>
      <Header />
      <Banner title="NOSSA EQUIPE" />
      <Box
        margin="0 auto"
        flexWrap="wrap"
        maxWidth="1416px"
        align="center"
        justify="space-around"
      >
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image src={card11} alt="" width="150%" height="150%" />
          <Typography
            text={["IVETE BELFORT", <br />, "PRESIDENTE DA ONG"]}
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
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={carolinaAssaf}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={[
              "CAROLINA ASSAF ISERI",
              <br />,
              "COORDENADORA DO SETOR DE REFLEXÕES",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={soraia}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={["SORAIA", <br />, "FACILITADORA - SUPORTE EVENTOS"]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={beatrizDouto}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={[
              "BEATRIZ DOUTO",
              <br />,
              "COORDENADORA DE TRADUÇÃO E REVISÃO",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={alexandre}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={["ALEXANDRE", <br />, "COORDENADOR DE RECURSOS FINANCEIROS"]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={julianaAndrade}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={[
              "JULIANA ANDRADE",
              <br />,
              "GESTÃO DE PESSOAS - BUSINESS PARTNER",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={mariliaRibeiro}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={["MARILIA RIBEIRO", <br />, "SUPORTE TI E AVALIAÇÕES"]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image src={card5} alt="" width="150%" height="150%" />
          <Typography
            text={["GIANFRANCO BOCCEDI", <br />, "T.I"]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image src={card13} alt="" width="150%" height="150%" />
          <Typography
            text={[
              "MÔNICA LOPES",
              <br />,
              "COORDENADORIADE INTEGRIDADE E EXPERIÊNCIA",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={fernanda}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={["FERNANDA", <br />, "COORDENADORA DE QUALIDADE"]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={keturiMonteiro}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={[
              "KETURI MONTEIRO",
              <br />,
              "COORDENADORA DE RECRUTAMENTO, SELEÇÃO E ONBOARDING",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={talitaMelo}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={[
              "TALITA MELO",
              <br />,
              "COORDENADORA DE COMUNICAÇÕES E MÍDIAS SOCIAIS",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <Image src={card8} alt="" width="150%" height="150%" />
          <Typography
            text={[
              "PAULLA KOCHUTT",
              <br />,
              "COORDENADORA DAS AVALIAÇÕES DE REDAÇÕES DO LIVRO E COORDENADORA DE CAPTAÇÃO DE RECURSOS",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={layslaSantos}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={[
              "LAYSLA SANTOS",
              <br />,
              "COORDENADORA DE CARGOS E SALÁRIOS",
            ]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={zezeCole}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={["ZEZE COLE", <br />, "FACILITADORA E OPERADORA"]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={igorCoelho}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={["IGOR COELHO", <br />, "FACILITADOR E SUPORTE TI"]}
            fontWeight="bold"
            fontSize="12px"
            textAlign="center"
          />
        </Box>
        <Box width="150px" direction="column" align="center" margin="20px 0">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#05c290",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src={daniloJesi}
              alt=""
              width="150"
              height="150"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <Typography
            text={["DANILO JESI", <br />, "FACILITADOR"]}
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
