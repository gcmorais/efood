import { useDispatch, useSelector } from "react-redux";
import { Container, Header } from "./styles";
import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";
import CartMenu from "../cart";

function ProfileHeader() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };
  return (
    <>
      <Container>
        <Header>
          <p>Restaurantes</p>
          <img src="/logo.svg" alt="efood-logo"></img>
          <div onClick={openCart}>
            <p>{items.length} produto(s) no carrinho</p>
          </div>
        </Header>
      </Container>
      <CartMenu />
    </>
  );
}

export default ProfileHeader;
