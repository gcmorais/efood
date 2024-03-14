import { Card, Container, Header, Main, Title, ButtonLink } from "./styles";

type CardsProps = {
  id: number;
  image: any;
  title: String;
  text: String;
  tag: Array<String>;
  note: number;
};

function Cards(props: CardsProps) {
  const propValues = [props];

  return (
    <Container>
      <Header>
        <Card>
          {propValues.map((item) => {
            return <p key={item.id}>{item.tag}</p>;
          })}
        </Card>
        <img src={props.image} alt="image-card" />
      </Header>
      <Main>
        <Title>
          <h3>{props.title}</h3>
          <span>
            <p>{props.note}</p>
            <img src="/estrela.svg" alt="star" />
          </span>
        </Title>
        <p>{props.text}</p>
        <ButtonLink to={`/profile/${props.id}`}>Saiba mais</ButtonLink>
      </Main>
    </Container>
  );
}

export default Cards;
