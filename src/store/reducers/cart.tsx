import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapio, Food } from "../../pages/home";

type CartState = {
  items: Cardapio[];
  isOpen: boolean;
  adressIsOpen: boolean;
  isOpenModal: boolean;
  paymentIsOpen: boolean;
  desableButton: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  adressIsOpen: false,
  isOpenModal: false,
  paymentIsOpen: false,
  desableButton: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
    openAdress: (state) => {
      state.adressIsOpen = true;
    },
    closeAdress: (state) => {
      state.adressIsOpen = false;
    },
    openPayment: (state) => {
      state.paymentIsOpen = true;
    },
    closePayment: (state) => {
      state.paymentIsOpen = false;
    },
    disabled: (state) => {
      state.desableButton = true;
    },
    worked: (state) => {
      state.desableButton = false;
    },
  },
});

export const {
  add,
  open,
  close,
  remove,
  openAdress,
  closeAdress,
  openModal,
  closeModal,
  openPayment,
  closePayment,
  disabled,
  worked,
} = cartSlice.actions;
export default cartSlice.reducer;
