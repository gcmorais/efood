import styled from "styled-components";
import { Colors } from "../../styles";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;

  display: none;
  justify-content: end;

  &.is-open {
    display: flex;
  }
`;

export const ModalContainer = styled.div`
  width: 360px;
  height: 100%;
  background-color: ${Colors.red};
  padding: 8px;
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 8px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.red};
  background-color: ${Colors.paleOrange};
  padding: 8px;
  gap: 8px;

  & {
    margin-top: 16px;
  }
`;

export const ImageArea = styled.div`
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const TextArea = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: end;
  }
`;

export const Footer = styled.div`
  margin-top: 40px;

  span {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    p {
      font-size: 14px;
      font-weight: bold;
      color: ${Colors.paleOrange};
    }
  }

  button {
    width: 218px;
    height: 24px;
    background-color: ${Colors.paleOrange};
    border: none;
    color: ${Colors.red};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
  }
`;
