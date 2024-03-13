import { useState } from "react";
import { Container, Header, Main, Title, ButtonLink } from "./styles";
import Modal from "../modal";

type CardapioProps = {
  id: number;
  image: any;
  title: String;
  text: String;
  porcao: String;
  preco: number;
  setOpenModal: any;
};

function Cardapio(props: CardapioProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <p>{props.id}</p>
        <Header>
          <img src={props.image} alt="image-card" />
        </Header>
        <Main>
          <Title>
            <h3>{props.title}</h3>
          </Title>
          <p>{props.text}</p>
          <ButtonLink onClick={() => setOpenModal(true)}>
            Adicionar ao carrinho
          </ButtonLink>
        </Main>
      </Container>
      <Modal
        isOpen={openModal}
        setOpenModal={() => setOpenModal(false)}
        title={props.title}
        text={props.text}
        image={props.image}
        porcao={props.porcao}
        preco={props.preco}
      />
    </>
  );
}

export default Cardapio;
