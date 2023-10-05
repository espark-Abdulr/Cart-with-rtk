import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../constants/productsConstants";

const initialState = {
  cart: [],
  items: productsData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "CartSlice",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let filter = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (filter >= 0) {
        state.cart[filter].quantity = state.cart[filter].quantity + 1;
      } else {
        state.cart.push(action.payload);
      }
      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          state.cart[i].quantity = state.cart[i].quantity + 1;
          break;
        }
      }
    },
  },
});
export const { addToCart, getCartTotal, deleteItem, increment } =
  cartSlice.actions;
export default cartSlice.reducer;
