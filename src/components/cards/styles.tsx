import styled from "styled-components";
import { Colors } from "../../styles";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 472px;

  border: 1px solid red;
  background-color: #fff;

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
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`;

export const Card = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  right: 16px;
  top: 16px;

  p {
    height: 26px;
    font-size: 12px;
    font-weight: 900;
    padding: 6px 4px;
    background-color: ${Colors.red};
    color: ${Colors.paleOrange};
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  p {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 7px;

  span {
    display: flex;
    font-size: 18px;
    align-items: center;
    font-weight: bold;

    img {
      margin-left: 8px;
      margin-bottom: 4px;
    }
  }
`;

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  background-color: ${Colors.red};
  color: ${Colors.paleOrange};
  margin: 10px 7px;
`;
