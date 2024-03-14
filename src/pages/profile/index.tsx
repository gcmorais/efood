import { useEffect, useState } from "react";
import ProfileHeader from "../../components/profileHeader";
import { useParams } from "react-router-dom";
import { ContainerBanner, Main } from "./styles";
import Footer from "../../components/footer";
import Cardapio from "../../components/cardapio";
import { Food } from "../home";
import { useGetDishesQuery } from "../../services/api";

function Profile() {
  const { id } = useParams();
  const { data: food } = useGetDishesQuery(id!);

  return (
    <>
      <ProfileHeader />
      <>
        <ContainerBanner>
          <img src={food?.capa} alt="capa" />
          <div>
            <p>{food?.tipo}</p>
            <p>{food?.titulo}</p>
          </div>
        </ContainerBanner>
        <Main>
          {food?.cardapio?.map((item: any) => {
            return (
              <Cardapio
                key={item.id}
                id={item.id}
                image={item.foto}
                text={item.descricao}
                title={item.nome}
                porcao={item.porcao}
                preco={item.preco}
              />
            );
          })}
        </Main>
      </>
      <Footer />
    </>
  );
}

export default Profile;
