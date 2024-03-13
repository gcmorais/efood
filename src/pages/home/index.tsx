import React, { useEffect, useState } from "react";
import HomeHeader from "../../components/homeHeader";
import Cards from "../../components/cards";
import { Main } from "./styles";
import Footer from "../../components/footer";

export interface Cardapio {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export type Food = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
};

function Home() {
  const [food, setFood] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setFood(res))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <HomeHeader />
      <Main>
        {isLoading && <p>Carregando...</p>}
        {food.map((item) => {
          return (
            <Cards
              key={item.id}
              id={item.id}
              btnText="Saiba mais"
              note={item.avaliacao}
              tag={[item.tipo]}
              text={item.descricao}
              title={item.titulo}
              image={item.capa}
            />
          );
        })}
      </Main>
      <Footer />
    </>
  );
}

export default Home;
