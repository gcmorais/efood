import React from "react";
import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <div>
        <img src="../../../public/logo.svg" alt="efood-logo" />
        <ul>
          <li>
            <a href="#">
              <img src="../../../public/insta.svg" alt="insta-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="../../../public/facebook-round-svgrepo-com 1.svg"
                alt="face-logo"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../public/Group.svg" alt="x-logo" />
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
