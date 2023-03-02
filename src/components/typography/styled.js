import styled, { css } from 'styled-components';

export const Typography = styled.p`
  ${({
    family,
    width,
    justify,
    align,
    height,
    direction,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    margin,
    padding,
    spacing,
    textAlign,

  }) => css`
    width: ${width};
    height: ${height};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    color: ${color};
    margin: ${margin};
    padding: ${padding};
    font-family: ${family};
    letter-spacing: ${spacing};
    text-align: ${textAlign};
  `}
`;
