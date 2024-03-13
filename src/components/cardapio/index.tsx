import { Container, Header, Main, Title, ButtonLink } from "./styles";

type CardapioProps = {
  id: Number;
  image: any;
  title: String;
  text: String;
};

function Cardapio(props: CardapioProps) {
  return (
    <Container>
      <Header>
        <img src={props.image} alt="image-card" />
      </Header>
      <Main>
        <Title>
          <h3>{props.title}</h3>
        </Title>
        <p>{props.text}</p>
        <ButtonLink to={`/profile/${props.id}`}>
          Adicionar ao carrinho
        </ButtonLink>
      </Main>
    </Container>
  );
}

export default Cardapio;
