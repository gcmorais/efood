import styled from "styled-components";
import { Colors } from "../../styles";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${Colors.red};

  p {
    margin: 0 7px;
  }

  button {
    margin: 0 7px;
  }
`;

export const Header = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  p {
    height: 190px;
    font-size: 14px;
    line-height: 22px;
    color: ${Colors.paleOrange};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 7px;

  h3 {
    color: ${Colors.paleOrange};
  }
`;

export const ButtonLink = styled(Link)`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Colors.paleOrange};
  color: ${Colors.red};
  margin: 10px 7px;
`;
