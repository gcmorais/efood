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
import * as yup from "yup";
import { usePurchaseMutation } from "../../services/api";

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

  const [purchase, { isLoading, isSuccess, isError, data }] =
    usePurchaseMutation();

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

  const FinishOperation = () => {
    dispatch(closeModal());
    dispatch(closePayment());
    location.reload();
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
      numberHome: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cvv: "",
      expirationMonth: "",
      expirationYear: "",
    },
    validationSchema: yup.object({
      receiver: yup
        .string()
        .min(5, "O recebedor precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      adress: yup
        .string()
        .min(5, "O endereço precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      city: yup
        .string()
        .min(5, "O nome da cidade precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      cep: yup
        .string()
        .min(5, "O cep precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      numberHome: yup.number().required("O campo é obrigatório"),
      complement: yup.string(),

      // card validations
      cardName: yup
        .string()
        .min(5, "O nome do cartão precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      cardNumber: yup
        .string()
        .min(5, "O nome do cartão precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      cvv: yup.number().required("O campo é obrigatório"),
      expirationMonth: yup.number().required("O campo é obrigatório"),
      expirationYear: yup.number().required("O campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.numberHome),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear),
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number,
        })),
      });
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return message;
    return "";
  };

  if (isSuccess) {
    dispatch(closePayment());
  }

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
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage("receiver", form.errors.receiver)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="adress">Endereço</label>
                    <input
                      id="adress"
                      type="text"
                      name="adress"
                      value={form.values.adress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage("adress", form.errors.adress)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage("city", form.errors.city)}</small>
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
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage("cep", form.errors.cep)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="numberHome">Número</label>
                      <input
                        id="numberHome"
                        type="number"
                        name="numberHome"
                        value={form.values.numberHome}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage("numberHome", form.errors.numberHome)}
                      </small>
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
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage("complement", form.errors.complement)}
                    </small>
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
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage("cardName", form.errors.cardName)}
                    </small>
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
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage("cardNumber", form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cvv">CVV</label>
                      <input
                        id="cvv"
                        type="number"
                        name="cvv"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage("cvv", form.errors.cvv)}</small>
                    </InputGroup>
                  </NumberArea>
                  <NumberArea>
                    <InputGroup>
                      <label htmlFor="expirationMonth">Mẽs de vencimento</label>
                      <input
                        id="expirationMonth"
                        type="number"
                        name="expirationMonth"
                        value={form.values.expirationMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          "expirationMonth",
                          form.errors.expirationMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expirationYear">Ano de vencimento</label>
                      <input
                        id="expirationYear"
                        type="number"
                        name="expirationYear"
                        value={form.values.expirationYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          "expirationYear",
                          form.errors.expirationYear
                        )}
                      </small>
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
            {isSuccess && data && (
              <>
                <h3>Pedido realizado - {data.orderId}</h3>
                <ContentArea>
                  <p className="margin-top">
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p className="margin-top">
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p className="margin-top">
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p className="margin-top">
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                </ContentArea>
                <Footer>
                  <button onClick={FinishOperation}>Concluir</button>
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
