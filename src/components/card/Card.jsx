import * as S from "./styled";

function Card() {
  return (
    <S.CardContainer>
      <S.CardContent>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1068413699?h=88e8e87e82"
          width="840"
          height="560"
          allowfullscreen
        />
      </S.CardContent>

      <S.CardContent>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1068416301?h=45da83ff2c"
          width="840"
          height="560"
          allowfullscreen
        />
      </S.CardContent>
    </S.CardContainer>
  );
}

export default Card;
