import Image from "next/image";
import Box from "../atoms/box/Box";
import Typography from "../atoms/typography/Typography";
import * as S from "./styled";
import depo_1 from '../../../public/static/images/depo_1.png'
import depo_2 from '../../../public/static/images/depo_2.png'

function Card() {
    return (

        <>
            <S.CardContainer>
                <S.CardContent>
                    <S.IconContainer>

                        <Image objectFit="cover" style={{ borderRadius: "50%" }} width="120px" height="120px" src={depo_2} alt="" />
                    </S.IconContainer>
                    <Typography fontSize="24px" margin="-32px 0 0 0" padding="0 16px 16px 16px" text="Tenho muito orgulho em ter apoiado a parceria entre nossas instituições porque acredito no trabalho em rede principalmente quando as organizações tem como propósito construir uma sociedade melhor, mais justa e democrática. Levar a cultura de  paz para ambientes de aprisionamento e pensar em como a juventude pode pautar a educação para a paz atrelada aos objetivos do desenvolvimento sustentável é muito interessante." />
                    <Typography fontSize="16px" fontWeight="600" padding="0 16px 16px 16px" text="Mariana Prado/Parceira/International Youth Day" />

                </S.CardContent>

                <S.CardContent>
                    <S.IconContainer>
                        <Image objectFit="cover" style={{ borderRadius: "50%" }} width="120px" height="120px" src={depo_1} alt="" />
                    </S.IconContainer>
                    <Typography fontSize="24px" margin="-32px 0 0 0" padding="0 16px 16px 16px" text="Como voluntária do Programa de Educação para a Paz, me tornei mais atenta às minhas necessidades emocionais aprendendo muito sobre mim mesma, apenas doando um pouco do meu tempo, em algo tão sensível e visivelmente transformador. A paz, tema  do programa é o que nos move, mostrando que fazer algo mais, colhendo bons resultados, pode ser grandioso e nos encher de esperança para um mundo melhor." />
                    <Typography fontSize="16px" fontWeight="600" padding="0 16px 16px 16px" text="Silene/Voluntária"/>
                </S.CardContent>
            </S.CardContainer>
        </>
    );
}

export default Card;
