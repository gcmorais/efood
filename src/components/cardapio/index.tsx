import { Container, Header, Main, Title, ButtonLink } from "./styles";
import Modal from "../modal";
import { useState } from "react";
import { Cardapio } from "../../pages/home";

type Props = {
  food: Cardapio;
};

function CardapioPage({ food }: Props) {
  const [openModalCardapio, setOpenModalCardapio] = useState(false);

  return (
    <>
      <Container>
        <p>{food.id}</p>
        <Header>
          <img src={food.foto} alt="image-card" />
        </Header>
        <Main>
          <Title>
            <h3>{food.nome}</h3>
          </Title>
          <p>{food.descricao}</p>
          <ButtonLink onClick={() => setOpenModalCardapio(true)}>
            Adicionar ao carrinho
          </ButtonLink>
        </Main>
      </Container>
      <Modal
        isOpen={openModalCardapio}
        setOpenModal={() => setOpenModalCardapio(false)}
        food={food}
      />
    </>
  );
}

export default CardapioPage;
