import { configureStore, combineReducers } from "@reduxjs/toolkit";
import count from "./count";

export const rootReducer = combineReducers({
  count: count,
  books: (state = []) => state,
});

export type StoreT = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
