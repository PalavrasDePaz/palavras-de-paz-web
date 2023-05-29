import propTypes from 'prop-types';

import * as S from './styled';

function Button({
  align,
  bg,
  margin,
  padding,
  width,
  height,
  shadow,
  color,
  familyFont,
  href,
  justify,
  fontWeight,
  hover,
  fontSize,
  ...props
}) {
  return (
    <S.Button
      fontWeight={ fontWeight }
      justify={ justify }
      align={ align }
      bg={ bg }
      margin={ margin }
      padding={ padding }
      width={ width }
      height={ height }
      shadow={ shadow }
      color={ color }
      familyFont={ familyFont }
      href={ href }
      hover={ hover }
      font_size={ fontSize }
    >
      {props.text}
    </S.Button>
  );
}

Button.propTypes = {
  align: propTypes.string,
  bg: propTypes.string,
  margin: propTypes.string,
  padding: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  shadow: propTypes.string,
  color: propTypes.string,
  familyFont: propTypes.string,
  href: propTypes.string,
  justify: propTypes.string,
  fontWeight: propTypes.string,
  hover: propTypes.string,
  font_size: propTypes.string,
  text: propTypes.string,
}.isRequired;

export default Button;
