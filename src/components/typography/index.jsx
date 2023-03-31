import propTypes from 'prop-types';
import * as S from './styled';

function Typography({
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
}) {
  return (
    <S.Typography
      family={ family }
      padding={ padding }
      margin={ margin }
      width={ width }
      justify={ justify }
      align={ align }
      height={ height }
      direction={ direction }
      color={ color }
      fontWeight={ fontWeight }
      fontSize={ fontSize }
      lineHeight={ lineHeight }
      letterSpacing={ spacing }
      textAlign={ textAlign }
    >
      {props.text}
    </S.Typography>
  );
}

Typography.propTypes = {
  family: propTypes.string,
  padding: propTypes.string,
  margin: propTypes.string,
  width: propTypes.string,
  justify: propTypes.string,
  align: propTypes.string,
  height: propTypes.string,
  direction: propTypes.string,
  color: propTypes.string,
  fontWeight: propTypes.string,
  fontSize: propTypes.string,
  lineHeight: propTypes.string,
  spacing: propTypes.string,
  textAlign: propTypes.string,
  text: propTypes.string,
}.isRequired;

export default Typography;
