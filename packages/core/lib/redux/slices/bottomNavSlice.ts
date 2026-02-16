import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface bottomNavState {
  showBottomNav: boolean;
}

const initialState: bottomNavState = {
  showBottomNav: true,
};

const bottomNavSlice = createSlice({
  initialState,
  name: "bottomNav",
  reducers: {
    setShowBottomNav(state, action: PayloadAction<boolean>) {
      state.showBottomNav = action.payload;
    },
  },
});

export const { setShowBottomNav } = bottomNavSlice.actions;

export const bottomNavReducer = bottomNavSlice.reducer;
