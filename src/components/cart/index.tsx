import { useDispatch, useSelector } from "react-redux";
import {
  Close,
  Container,
  ContentArea,
  ImageArea,
  ModalContainer,
  TextArea,
  Footer,
} from "./styles";
import { PiTrashLight } from "react-icons/pi";

import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

function CartMenu() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <Container className={isOpen ? "is-open" : ""}>
        <ModalContainer>
          <Close>
            <button type="button" onClick={closeModal}>
              <img src="/close.svg" alt="close-icon" />
            </button>
          </Close>
          {items.map((item) => {
            return (
              <ContentArea key={item.id}>
                <ImageArea>
                  <img src={item.foto} alt="food-img" />
                </ImageArea>
                <TextArea>
                  <h2>{item.nome}</h2>
                  <p>R$ {item.preco}</p>
                  <button onClick={() => handleRemove(item.id)}>
                    <PiTrashLight style={{ color: "#E66767" }} />
                  </button>
                </TextArea>
              </ContentArea>
            );
          })}
          <Footer>
            <span>
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice())}</p>
            </span>
            <button onClick={() => console.log("teste")}>
              Continuar com a entrega
            </button>
          </Footer>
        </ModalContainer>
      </Container>
    </>
  );
}

export default CartMenu;
