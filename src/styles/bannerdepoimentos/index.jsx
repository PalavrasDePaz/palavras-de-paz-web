import styled from 'styled-components';

const StyledDiv = styled.div `
    font-family: 'Baloo', Arial, Helvetica, sans-serif;
    width: 88.5rem;
    max-width: 100%;
    margin: 0 auto;
    font-weight: 700;
    height: 11rem;
    background: rgba(33, 170, 133, 0.8);
    background: -webkit-linear-gradient(to right, rgba(33, 170, 133, 0.8), #0FE0AA);
    background: linear-gradient(to right, rgba(33, 170, 133, 0.8), #0FE0AA);
`;

const StyledP = styled.p `
    font-size: 3.25rem;
    color: #ffffff;
    text-align: end;
    padding-top: 6.25rem;
    padding-right: 3.125rem;

    @media (max-width: 48rem) {
      font-size: 2rem;
    }
`;

export { StyledDiv, StyledP };
