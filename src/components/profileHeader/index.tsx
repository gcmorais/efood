import { Container, Header } from "./styles";

function ProfileHeader() {
  return (
    <Container>
      <Header>
        <p>Restaurantes</p>
        <img src="/logo.svg" alt="efood-logo"></img>
        <p>0 produto(s) no carrinho</p>
      </Header>
    </Container>
  );
}

export default ProfileHeader;
