import {
  Close,
  Container,
  ContentArea,
  ImageArea,
  ModalContainer,
  TextArea,
} from "./styles";

type ModalProps = {
  image: any;
  title: String;
  text: String;
  porcao: String;
  preco: number;
  isOpen: Boolean;
  setOpenModal: any;
};

function Modal(props: ModalProps) {
  if (props.isOpen) {
    return (
      <>
        <Container className={isOpen ? "is-open" : ""}>
          <ModalContainer>
            <Close>
              <button type="button" onClick={props.setOpenModal}>
                <img src="/close.svg" alt="close-icon" />
              </button>
            </Close>
            <ContentArea>
              <ImageArea>
                <img src={props.image} alt="food-img" />
              </ImageArea>
              <TextArea>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <p>{props.porcao}</p>
                <button>Adicionar ao carrinho - R$ {props.preco}</button>
              </TextArea>
            </ContentArea>
          </ModalContainer>
        </Container>
      </>
    );
  }

  return null;
}

export default Modal;
