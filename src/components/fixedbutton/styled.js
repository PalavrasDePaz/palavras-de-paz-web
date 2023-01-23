import styled from "styled-components";

export const FixedBtn = styled.a`
    position: fixed;
    bottom: 333px;
    right: 0;
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border-radius: 16px 0 0 16px;
    background-color: var(--primary-color);
    padding: 16px 32px;
    z-index: 1;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #fff
    }
`