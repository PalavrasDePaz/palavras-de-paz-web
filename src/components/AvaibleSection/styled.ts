import styled from "styled-components";

export const Section = styled.section`
  max-width: 90%;
  width: 1417px;
  height: 561px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff;

  h2 {
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0 0;

    background-color: #21aa85;
    font-size: 2.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 34px;
  }

  .overflow__container {
    width: 95.15%;
    height: 401px;
    overflow-y: auto;
    box-sizing: border-box;
    padding-right: 85px;
  }
  .overflow__container::-webkit-scrollbar {
    width: 12px;
    height: 57px;
    position: absolute;
  }

  .overflow__container::-webkit-scrollbar-track {
    background: #f4f4f4;
    position: absolute;
  }

  .overflow__container::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border: 1px solid #f4f4f4;
    position: absolute;
  }
`;
