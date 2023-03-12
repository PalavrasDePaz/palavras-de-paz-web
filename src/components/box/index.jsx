import propTypes from 'prop-types';
import * as S from './styled';

function Box({
  bg,
  width,
  justify,
  align,
  height,
  direction,
  shadow,
  color,
  margin,
  padding,
  children,
  position,
  radius,
  gap,
  textAlign,
  flexWrap,
  maxWidth,
  border,
}) {
  return (
    <S.Box
      padding={ padding }
      margin={ margin }
      color={ color }
      bg={ bg }
      width={ width }
      height={ height }
      justify={ justify }
      align={ align }
      direction={ direction }
      shadow={ shadow }
      position={ position }
      gap={ gap }
      radius={ radius }
      textAlign={ textAlign }
      flexWrap={ flexWrap }
      maxWidth={ maxWidth }
      border={ border }
    >
      {children}
    </S.Box>
  );
}

Box.propTypes = {
  bg: propTypes.string,
  width: propTypes.string,
  justify: propTypes.string,
  align: propTypes.string,
  height: propTypes.string,
  direction: propTypes.string,
  shadow: propTypes.string,
  color: propTypes.string,
  margin: propTypes.string,
  padding: propTypes.string,
  position: propTypes.string,
  radius: propTypes.string,
  gap: propTypes.string,
  textAlign: propTypes.string,
  flexWrap: propTypes.string,
  maxWidth: propTypes.string,
  border: propTypes.string,
  children: propTypes.node.isRequired,
}.isRequired;

export default Box;
