// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx"; // apunta al mismo nivel

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
