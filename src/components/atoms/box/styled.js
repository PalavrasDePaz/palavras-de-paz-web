import styled, { css } from 'styled-components';

export const Box = styled.div`
  ${({
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
    position,
    gap,
    radius,
    textAlign,
    flexWrap,
    maxWidth,
    border,
  }) => css`
    background-color: ${bg};
    width: ${width};
    height: ${height};
    display: flex;
    flex-wrap: ${flexWrap};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    box-shadow: ${shadow};
    color: ${color};
    margin: ${margin};
    padding: ${padding};
    position: ${position};
    border-radius: ${radius};
    gap: ${gap};
    text-align: ${textAlign};
    z-index: 3;
    max-width: ${maxWidth};
    border: ${border};
  `}
`;
