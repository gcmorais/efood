import { useEffect, useState } from "react";
import HomeHeader from "../../components/homeHeader";
import Cards from "../../components/cards";
import { Main } from "./styles";
import Footer from "../../components/footer";

import { useGetAllRestaurantsQuery } from "../../services/api";

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
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
};

function Home() {
  const { data: food, isLoading } = useGetAllRestaurantsQuery();

  return (
    <>
      <HomeHeader />
      <Main>
        {isLoading && <p>Carregando...</p>}
        {food?.map((item) => {
          return (
            <Cards
              key={item.id}
              id={item.id}
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
