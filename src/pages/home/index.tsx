import React from "react";
import HomeHeader from "../../components/homeHeader";
import Cards from "../../components/cards";
import { Main } from "./styles";
import Footer from "../../components/footer";

function Home() {
  return (
    <>
      <HomeHeader />
      <Main>
        <Cards
          btnText="Saiba mais"
          note="4.5"
          tag={["Destaque da Semana", "Japonesa"]}
          text="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          title="Hioki Sushi"
          image="/card1.png"
        />
        <Cards
          btnText="Saiba mais"
          note="4.6"
          tag={["Italiana"]}
          text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="La Dolce Vita Trattoria"
          image="/card2.png"
        />
        <Cards
          btnText="Saiba mais"
          note="4.6"
          tag={["Italiana"]}
          text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="La Dolce Vita Trattoria"
          image="/card2.png"
        />
        <Cards
          btnText="Saiba mais"
          note="4.6"
          tag={["Italiana"]}
          text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="La Dolce Vita Trattoria"
          image="/card2.png"
        />
        <Cards
          btnText="Saiba mais"
          note="4.6"
          tag={["Italiana"]}
          text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="La Dolce Vita Trattoria"
          image="/card2.png"
        />
        <Cards
          btnText="Saiba mais"
          note="4.6"
          tag={["Italiana"]}
          text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          title="La Dolce Vita Trattoria"
          image="/card2.png"
        />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
