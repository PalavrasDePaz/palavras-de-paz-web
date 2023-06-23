import styled from "styled-components";

export const FixedBtn = styled.a`
  position: fixed;
  bottom: 20.62rem;
  right: 0;
  width: 10rem;
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
    color: #fff;
  }
`;

export const FixedBtnMobile = styled.a`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1rem;
  right: 1rem;
  width: 5rem;
  height: 5rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border-radius: 100%;
  background-color: var(--primary-color);
  z-index: 99999;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
