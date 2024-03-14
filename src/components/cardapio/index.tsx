import { Container, Header, Main, Title, ButtonLink } from "./styles";

type CardapioProps = {
  id: number;
  image: any;
  title: String;
  text: String;
  porcao: String;
  preco: number;
};

function Cardapio(props: CardapioProps) {
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
          <ButtonLink>Adicionar ao carrinho</ButtonLink>
        </Main>
      </Container>
    </>
  );
}

export default Cardapio;
