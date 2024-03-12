import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  text-align: center;
  align-items: center;
  padding: 46px 0 40px;
  height: 384px;
  background-image: url("../../../public/Vector.svg");

  img {
    width: 125px;
    height: 57.5px;
  }

  h1 {
    font-weight: 900;
    font-size: 36px;
  }
`;
