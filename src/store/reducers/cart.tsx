import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../pages/home";

type CartState = {
  items: Food[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      state.items.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
