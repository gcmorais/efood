import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 186px;
  background-image: url("/Vector.svg");
  padding: 0 13%;

  img {
    width: 125px;
    height: 57.5px;
    margin-left: 83px;
  }

  p {
    font-weight: 900;
    font-size: 18px;
  }

  @media (max-width: 710px) {
    img {
      display: none;
    }
  }
`;
