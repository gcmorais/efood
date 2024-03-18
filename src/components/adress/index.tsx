import { useDispatch, useSelector } from "react-redux";
import {
  Close,
  Container,
  ContentArea,
  ModalContainer,
  InputGroup,
  Footer,
  NumberArea,
} from "./styles";

import { RootReducer } from "../../store";
import {
  closeAdress,
  open,
  closeModal,
  closePayment,
  openPayment,
  openAdress,
} from "../../store/reducers/cart";
import { useFormik } from "formik";

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

function AdressModal() {
  const { adressIsOpen, items, isOpenModal, paymentIsOpen } = useSelector(
    (state: RootReducer) => state.cart
  );
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(closePayment());
  };

  const toPayment = () => {
    dispatch(closeAdress());
    dispatch(openPayment());
  };

  const backToCart = () => {
    dispatch(closeModal());
    dispatch(open());
  };

  const backToAdress = () => {
    dispatch(closePayment());
    dispatch(openAdress());
  };

  const form = useFormik({
    initialValues: {
      receiver: "",
      adress: "",
      city: "",
      cep: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cvv: "",
      expirationMonth: "",
      expirationYear: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Container className={isOpenModal ? "is-open" : ""}>
        <ModalContainer>
          <Close>
            <button type="button" onClick={handleCloseModal}>
              <img src="/close.svg" alt="close-icon" />
            </button>
          </Close>
          <form onSubmit={form.handleSubmit}>
            {adressIsOpen && (
              <>
                <h3>Entrega</h3>
                <ContentArea>
                  <InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                      id="receiver"
                      type="text"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="adress">Endereço</label>
                    <input
                      id="adress"
                      type="text"
                      name="adress"
                      value={form.values.adress}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <NumberArea>
                    <InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                  </NumberArea>
                  <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                </ContentArea>
                <Footer>
                  <button onClick={toPayment}>Continuar com o pagamento</button>
                  <button onClick={backToCart}>Voltar para o carrinho</button>
                </Footer>
              </>
            )}
            {paymentIsOpen && (
              <>
                <h3>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                </h3>
                <ContentArea>
                  <InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                      id="cardName"
                      type="text"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <NumberArea>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cvv">CVV</label>
                      <input
                        id="cvv"
                        type="text"
                        name="cvv"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                  </NumberArea>
                  <NumberArea>
                    <InputGroup>
                      <label htmlFor="expirationMonth">Mẽs de vencimento</label>
                      <input
                        id="expirationMonth"
                        type="text"
                        name="expirationMonth"
                        value={form.values.expirationMonth}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expirationYear">Ano de vencimento</label>
                      <input
                        id="expirationYear"
                        type="text"
                        name="expirationYear"
                        value={form.values.expirationYear}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                  </NumberArea>
                </ContentArea>
                <Footer>
                  <button type="submit">Finalizar pagamento</button>
                  <button onClick={backToAdress}>
                    Voltar para a edição de endereço
                  </button>
                </Footer>
              </>
            )}
          </form>
        </ModalContainer>
      </Container>
    </>
  );
}

export default AdressModal;
