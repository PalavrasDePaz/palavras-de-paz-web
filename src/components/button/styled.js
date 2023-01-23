import styled, { css } from "styled-components";

export const Button = styled.a`
  ${({ align, bg, margin, padding, width, height, shadow, color, familyFont, justify, fontWeight }) => css`
    display: flex;
    flex-direction: row;
    justify-content: ${justify};
    align-items: center;
    width: ${width};
    height: ${height};
    border-radius: 15px;
    color: ${color};
    background-color: ${bg};
    margin: ${margin};
    padding: ${padding};
    box-shadow: ${shadow};
    font-family: ${familyFont};
    font-weight: ${fontWeight}; 
    cursor: pointer;
    border: 1px solid rgba(24, 202, 153, 1);
    outline: 0;
    text-decoration: none;
    text-align: ${align};
    transition: all 0.3s ease-in-out;
    &:hover {
      filter: brightness(1.1);
    `}`;