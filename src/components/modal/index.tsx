import { useDispatch } from "react-redux";
import {
  Close,
  Container,
  ContentArea,
  ImageArea,
  ModalContainer,
  TextArea,
} from "./styles";
import { open, add } from "../../store/reducers/cart";
import CartMenu from "../cart";
import { Cardapio } from "../../pages/home";

type Props = {
  food: Cardapio;
  isOpen: any;
  setOpenModal: any;
};

function Modal({ food, isOpen, setOpenModal }: Props) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(open());
    dispatch(add(food));
    setOpenModal();
  };

  if (isOpen) {
    return (
      <>
        <Container>
          <ModalContainer>
            <Close>
              <button type="button" onClick={setOpenModal}>
                <img src="/close.svg" alt="close-icon" />
              </button>
            </Close>
            <ContentArea>
              <ImageArea>
                <img src={food.foto} alt="food-img" />
              </ImageArea>
              <TextArea>
                <h2>{food.nome}</h2>
                <p>{food.descricao}</p>
                <p>{food.porcao}</p>
                <button onClick={openModal}>
                  Adicionar ao carrinho - R$ {food.preco}
                </button>
              </TextArea>
            </ContentArea>
          </ModalContainer>
        </Container>
        <CartMenu />
      </>
    );
  }

  return null;
}

export default Modal;
