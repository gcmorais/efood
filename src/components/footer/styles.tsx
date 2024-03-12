import styled from "styled-components";
import { Colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 298px;
  text-align: center;
  background-color: ${Colors.paleOrange};

  img {
    width: 125px;
    height: 57.5px;
    margin-top: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 8px;
    list-style: none;

    li {
      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
  }

  p {
    font-size: 10px;
  }
`;
