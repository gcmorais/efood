import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <div>
        <img src="/logo.svg" alt="efood-logo" />
        <ul>
          <li>
            <a href="#">
              <img src="/insta.svg" alt="insta-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/facebook-round-svgrepo-com 1.svg" alt="face-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/Group.svg" alt="x-logo" />
            </a>
          </li>
        </ul>
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </Container>
  );
}

export default Footer;
