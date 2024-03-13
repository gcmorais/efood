import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: auto auto auto;
  margin-bottom: 120px;
  gap: 48px;
  margin-top: 80px;

  @media (max-width: 1040px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 710px) {
    grid-template-columns: auto;
  }
`;

export const ContainerBanner = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: brightness(0.5) opacity(0.9);
  }

  div {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    left: 235px;
    height: 100%;

    p {
      font-size: 32px;
      font-weight: 100;
      color: white;
    }

    :last-child {
      font-weight: 900;
    }
  }
`;
