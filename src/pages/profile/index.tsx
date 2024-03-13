import { useEffect, useState } from "react";
import ProfileHeader from "../../components/profileHeader";
import { useParams } from "react-router-dom";
import { ContainerBanner, Main } from "./styles";
import Footer from "../../components/footer";
import Cardapio from "../../components/cardapio";
import { Food } from "../home";

function Profile() {
  const [food, setFood] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setOpenModal] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  console.log(food);

  return (
    <>
      <ProfileHeader />
      <>
        {isLoading && <p>Carregando...</p>}
        <ContainerBanner>
          <img src={food.capa} alt="capa" />
          <div>
            <p>{food.tipo}</p>
            <p>{food.titulo}</p>
          </div>
        </ContainerBanner>
        <Main>
          {food.cardapio?.map((item: any) => {
            return (
              <Cardapio
                key={item.id}
                id={item.id}
                image={item.foto}
                text={item.descricao}
                title={item.nome}
                porcao={item.porcao}
                preco={item.preco}
                setOpenModal={() => setOpenModal(true)}
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
