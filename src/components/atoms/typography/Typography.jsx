import * as S from "./styled";

const Typography = ({
    family,
    padding,
    margin,
    width,
    justify,
    align,
    height,
    direction,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    spacing,
    textAlign,
    ...props
}) => {
    return (
        <S.Typography
            family={family}
            padding={padding}
            margin={margin}
            width={width}
            justify={justify}
            align={align}
            height={height}
            direction={direction}
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={spacing}
            textAlign={textAlign}
        >
            {props.text}
        </S.Typography>
    );
};

export default Typography;