import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckoutSummary } from "@workspace/core/types/services/purchase/purchase.types";

export type PromoCodeData = CheckoutSummary & { promo_code: string };

export type PromoCode = {
  data: null | PromoCodeData;
};

const initialState: PromoCode = {
  data: null,
};

const promoCodeSlice = createSlice({
  initialState,
  name: "promoCode",
  reducers: {
    setPromoCodeData(state, action: PayloadAction<PromoCodeData>) {
      state.data = action.payload;
    },

    clearPromoCodeData(state) {
      state.data = null;
    },
  },
});

export const { setPromoCodeData, clearPromoCodeData } = promoCodeSlice.actions;

export const promoCodeReducer = promoCodeSlice.reducer;
