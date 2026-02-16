"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CART_FULL_MESSAGE } from "@workspace/core/constants/messages.constants";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  data_quantity: number;
  data_unit: string;
  package_validity: number;
  package_validity_unit: string;
  image_url: string;
  unlimited: boolean;
  quantity: number;
  // provider: string;
  // recurring: number;
  // can_renew: boolean;
  package_type: string;
}

export interface CartState extends CartItem {
  total_price: number;
}

export interface CartSliceState {
  items: CartState[];
  error: string | null;
  showCartDetail: boolean;
  tempItemQuantity: number;
}

const initialState: CartSliceState = {
  items: loadFromLocalStorage(),
  error: null,
  showCartDetail: false,
  tempItemQuantity: 1,
};

function saveItems(items: CartState[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },

    addItem(state, action: PayloadAction<CartItem>) {
      const cartItem = action.payload;
      const totalQuantity = getTotalQuantity(state.items);

      // Prevent quantity > 5
      if (totalQuantity + cartItem.quantity > 5) {
        state.error = CART_FULL_MESSAGE;

        return;
      }

      state.error = null;

      const existing = state.items.find((item) => item.id === cartItem.id);

      state.tempItemQuantity = 1;

      if (existing) {
        existing.quantity += cartItem.quantity;
        existing.total_price = Number(
          (existing.price * existing.quantity).toFixed(2)
        );

        saveItems(state.items);
        return;
      }

      // If new item
      const newItem: CartState = {
        ...cartItem,
        total_price: Number((cartItem.price * cartItem.quantity).toFixed(2)),
      };

      state.items.push(newItem);
      saveItems(state.items);
    },

    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveItems(state.items);
      state.error = null;
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const totalQuantity = getTotalQuantity(state.items);

      if (totalQuantity >= 5) {
        state.error = CART_FULL_MESSAGE;
        return;
      }

      const item = state.items.find((item) => item.id === action.payload);
      if (!item) return;

      item.quantity++;
      item.total_price = Number((item.price * item.quantity).toFixed(2));

      saveItems(state.items);
      state.error = null;
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        item.quantity--;
        item.total_price = Number((item.price * item.quantity).toFixed(2));
      }

      saveItems(state.items);
      state.error = null;
    },

    increaseTempItemQuantity(state) {
      const totalCartQuantity = getTotalQuantity(state.items);
      const isCartFull = state.tempItemQuantity + totalCartQuantity >= 5;
      if (isCartFull) {
        state.error = CART_FULL_MESSAGE;
        return;
      }
      state.tempItemQuantity++;
    },

    decreaseTempItemQuantity(state) {
      if (state.tempItemQuantity === 1) {
        return;
      }
      state.tempItemQuantity--;
    },

    // enableRenew(
    //   state,
    //   action: PayloadAction<{ id: string; isRenew: boolean }>
    // ) {
    //   const { id, isRenew } = action.payload;
    //   const item = state.items.find((item) => item.id === id);

    //   if (item) {
    //     item.recurring = isRenew ? 1 : 0;
    //     saveItems(state.items);
    //     state.error = null;
    //   }
    // },

    handleShowCartDetail(state, action: PayloadAction<boolean>) {
      state.showCartDetail = action.payload;
    },

    clearCart(state) {
      state.items = [];
      saveItems(state.items);
      state.error = null;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  clearError,
  handleShowCartDetail,
  increaseTempItemQuantity,
  decreaseTempItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export function loadFromLocalStorage(): CartState[] {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cartItems");
    return stored ? (JSON.parse(stored) as CartState[]) : [];
  }
  return [];
}

export function getTotalQuantity(items: CartState[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalCartPrice(items: CartState[]) {
  return Number(
    items.reduce((acc, cur) => acc + cur.total_price, 0).toFixed(2)
  );
}

export function getTotalQuantityById(items: CartState[], itemId: string) {
  return items.find((item) => item.id === itemId)?.quantity;
}
