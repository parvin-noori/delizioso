import cartSlice from "@/features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});

export default store;
