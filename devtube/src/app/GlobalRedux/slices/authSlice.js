'use client'
import { createSlice } from "@reduxjs/toolkit";

const tokensFromStorage = localStorage.getItem('tokens')
let initialState;
if (tokensFromStorage) {
  initialState = {
    tokens: JSON.parse(tokensFromStorage)
  };
} else {
  initialState = {
    tokens: null
  };
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setStorage: (state, action) => {
      state.tokens = action.payload;
      localStorage.setItem('tokens', JSON.stringify(action.payload));
    }
  }
});

export const { setStorage } = authSlice.actions;
export default authSlice.reducer;
