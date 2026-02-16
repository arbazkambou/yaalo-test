import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@workspace/core/lib/redux/slices/cartSlice";
import { promoCodeReducer } from "@workspace/core/lib/redux/slices/promoCodeSlice";
import { bottomNavReducer } from "@workspace/core/lib/redux/slices/bottomNavSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    promoCode: promoCodeReducer,
    bottomNav: bottomNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisPatch = typeof store.dispatch;
