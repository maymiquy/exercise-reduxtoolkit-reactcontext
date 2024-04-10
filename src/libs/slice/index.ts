import { createSlice } from "@reduxjs/toolkit";

type initialState = {
 count: number;
};

const initialState = {
 count: 0,
};

export const counterSlice = createSlice({
 name: "counter slice",
 initialState,
 reducers: {
  increment: (state) => {
   state.count += 1;
  },
  decrement: (state) => {
   if (state.count > 0) state.count -= 1;
  },
  reset: (state) => {
   state.count = 0;
  },
  incrementByAmount: (state, action) => {
   state.count += action.payload;
  },
 },
});

export const { increment, decrement, reset, incrementByAmount } =
 counterSlice.actions;

console.log("slice:", counterSlice);
