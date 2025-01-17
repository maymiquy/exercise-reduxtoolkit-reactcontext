import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/libs/slice";

export const store = configureStore({
 reducer: {
  counterSlice: counterSlice.reducer,
 },
});

export type IRootState = ReturnType<typeof store.getState>;
