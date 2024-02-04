'use client'
import { createSlice } from "@reduxjs/toolkit";

let initialState;
if (localStorage.getItem('tokens')) {
  initialState = {
    tokens: JSON.parse(localStorage.getItem('tokens'))
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
