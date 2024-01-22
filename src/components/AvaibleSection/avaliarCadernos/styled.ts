import styled from "styled-components";

export const Section = styled.section`
  .main_content__container {
    display: flex;
    flex-direction: column;
  }

  .column h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .checkbox {
      width: 155px;
      display: flex;
      justify-content: center;
    }

    .name {
      max-width: 135px;
      font-size: 0.875rem;
    }

    .numero_turma {
      width: 84.88px;
      display: flex;
      justify-content: center;
    }
  }
`;
