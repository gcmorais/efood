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

  h3 {
    color: ${Colors.paleOrange};
    font-size: 16px;
    font-weight: bold;
    margin-left: 8px;
    margin-bottom: 16px;
  }
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
  flex-flow: column;
  align-items: center;
  padding: 0 8px;
  gap: 8px;

  & {
    margin-top: 16px;
  }

  p {
    color: ${Colors.paleOrange};
  }

  .success-message {
    font-size: 14px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;

  label {
    color: ${Colors.paleOrange};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 11px;
    display: block;
  }

  input {
    background-color: ${Colors.paleOrange};
    border: 1px solid white;
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
  }

  small {
    color: ${Colors.paleOrange};
  }
`;

export const NumberArea = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  flex: auto;
`;

export const Footer = styled.div`
  margin-top: 24px;
  padding: 8px;

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

  .disabled {
    cursor: not-allowed;
    background-color: rgb(229, 229, 229) !important;
    pointer-events: none;
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

  :last-child {
    margin-top: 8px;
  }
`;
