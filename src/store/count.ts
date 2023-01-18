import { createSlice } from "@reduxjs/toolkit";
import { rootReducer } from "./index";

const initialState: number = 0;

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => (state > 0 ? state - 1 : 0),
    reset: (state) => (state = 0),
  },
});

// Action creators generated via `createSlice`
export const { increment, decrement, reset } = countSlice.actions;

// Selector
export const countSelector = (state: ReturnType<typeof rootReducer>) =>
  state.count;

// Reducer
export default countSlice.reducer;
