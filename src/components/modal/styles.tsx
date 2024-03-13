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

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 992px;
  height: 344px;
  background-color: ${Colors.red};

  @media (max-width: 1040px) {
    width: 90%;
    height: 50%;
  }
  @media (max-width: 710px) {
    width: 95%;
    height: 95%;
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
  align-items: center;
  gap: 24px;
  padding: 0 32px 32px 32px;
  color: white;

  @media (max-width: 710px) {
    flex-flow: column;
  }
`;

export const ImageArea = styled.div`
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`;

export const TextArea = styled.div`
  display: flex;
  height: 280px;
  flex-flow: column;
  justify-content: space-between;

  p {
    font-size: 14px;
    line-height: 22px;
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
  }
`;
