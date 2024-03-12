import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: auto auto;
  margin-bottom: 120px;
  gap: 48px;
  margin-top: 80px;

  @media (max-width: 1040px) {
    grid-template-columns: auto;
  }
`;
