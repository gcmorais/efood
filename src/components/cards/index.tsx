import { Card, Container, Header, Main, Title, ButtonLink } from "./styles";

type CardsProps = {
  id: Number;
  image: any;
  title: String;
  text: String;
  tag: Array<String>;
  note: Number;
  btnText: String;
};

function Cards(props: CardsProps) {
  const tagText = props.tag;

  return (
    <Container>
      <Header>
        <Card>
          {tagText.map((item) => {
            return <p>{item}</p>;
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
        <ButtonLink to={`/profile/${props.id}`}>{props.btnText}</ButtonLink>
      </Main>
    </Container>
  );
}

export default Cards;
