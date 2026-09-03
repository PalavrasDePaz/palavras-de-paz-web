import styled from "styled-components";

export const Titulo = styled.h3`
  font-size: 24px;
  font-weight: bold;
  font-family: "Baloo", Arial, Helvetica, sans-serif !important;
  margin-bottom: 18px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Texto = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: left;
`;

export const Galeria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
  max-width: 100%;
`;

export const Imagem = styled.img`
  flex: 1;
  max-width: 33%;
  height: 100%;
  object-fit: cover;
`;
