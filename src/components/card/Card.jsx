/* eslint-disable jsx-a11y/media-has-caption */
import * as S from "./styled";

function Card() {
  return (
    <S.CardContainer>
      <S.CardContent>
        <video controls style={{ width: "100%", maxWidth: 300 }}>
          <source src="/static/videos/depoimentos1.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </S.CardContent>

      <S.CardContent>
        <video controls style={{ width: "100%", maxWidth: 300 }}>
          <source src="/static/videos/depoimentos2.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </S.CardContent>

      <S.CardContent>
        <video controls style={{ width: "100%", maxWidth: 300 }}>
          <source src="/static/videos/depoimentos3.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </S.CardContent>
    </S.CardContainer>
  );
}

export default Card;
