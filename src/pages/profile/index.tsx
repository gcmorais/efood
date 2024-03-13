import { useEffect, useState } from "react";
import ProfileHeader from "../../components/profileHeader";
import { useParams } from "react-router-dom";
import { ContainerBanner, Main } from "./styles";
import Footer from "../../components/footer";
import { Food } from "../home";
import Cardapio from "../../components/cardapio";
import Modal from "../../components/modal";

function Profile() {
  const [food, setFood] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

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
          {food.cardapio?.map((item) => {
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
