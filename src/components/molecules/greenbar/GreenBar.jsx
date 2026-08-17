import Box from "../../box";
import Typography from "../../typography";

import * as S from "./styled";

import style from "./styles.module.css";

export default function GreenBar() {
  return (
    <div style={{ zIndex: 5 }}>
      <S.GreenContainer>
        <Box
          padding="0.5rem 0"
          bg="rgb(27, 139, 109)"
          justify="flex-start"
          align="center"
          direction="column"
        >
          <p className={style.title}>
            <span className={style.animated_number_1} /> mil+
          </p>
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="participantes do Programa"
            fontSize="25px"
            justify="center"
          />
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="de Educação para Paz"
            fontSize="25px"
            justify="center"
          />
        </Box>

        <Box
          padding="0.5rem 0"
          bg="rgba(33, 170, 133, 1)"
          justify="flex-start"
          align="center"
          direction="column"
        >
          <p className={style.title}>
            <span className={style.animated_number_2} />+
          </p>
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="unidades prisionais"
            fontSize="25px"
            justify="center"
          />
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="com Curso e/ou Livro"
            fontSize="25px"
            justify="center"
          />
        </Box>

        <Box
          padding="0.5rem 0"
          bg="rgba(24, 202, 153, 1)"
          justify="flex-start"
          align="center"
          direction="column"
        >
          <p className={style.title}>
            <span className={style.animated_number_3} />+
          </p>
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="livros doados às Unidades Prisionais"
            fontSize="25px"
            justify="center"
          />
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="nos 5 anos de atuação"
            fontSize="25px"
            justify="center"
          />
        </Box>

        <Box
          padding="0.5rem 0"
          bg="rgba(15, 224, 170, 1)"
          justify="flex-start"
          align="center"
          direction="column"
        >
          <p className={style.title}>
            <span className={style.animated_number_4} />+
          </p>
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="redações produzidas"
            fontSize="25px"
            justify="center"
          />
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="pelos participantes do Programa"
            fontSize="25px"
            justify="center"
          />
        </Box>

        <Box
          padding="0.5rem 0"
          bg="rgb(15, 241, 181)"
          justify="flex-start"
          align="center"
          direction="column"
        >
          <p className={style.title}>
            <span className={style.animated_number_5} />+
          </p>
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="voluntários ativos"
            fontSize="25px"
            justify="center"
          />
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="em todo o Brasil"
            fontSize="25px"
            justify="center"
          />
        </Box>
      </S.GreenContainer>
    </div>
  );
}
