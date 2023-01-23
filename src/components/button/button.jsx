import * as S from "./styled";

function Button({ align, bg, margin, padding, width, height, shadow, color, familyFont, href, justify, fontWeight, ...props }) {
    return (
        <S.Button fontWeight={fontWeight} justify={justify} align={align} bg={bg} margin={margin} padding={padding} width={width} height={height} shadow={shadow} color={color} familyFont={familyFont} href={href}> {props.text}</S.Button>
    );
}

export default Button;
