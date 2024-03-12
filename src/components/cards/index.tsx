import { useNavigate } from "react-router-dom";
import { Card, Container, Header, Main, Title } from "./styles";

type CardsProps = {
  image: any;
  title: String;
  text: String;
  tag: Array<String>;
  note: String;
  btnText: String;
};

function Cards(props: CardsProps) {
  const navigate = useNavigate();

  const tagText = props.tag;

  function redirect() {
    navigate("/profile");
  }

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
            {props.note}
            <img src="../../../public/estrela.svg" alt="star" />
          </span>
        </Title>
        <p>{props.text}</p>
        <button type="button" onClick={redirect}>
          {props.btnText}
        </button>
      </Main>
    </Container>
  );
}

export default Cards;
