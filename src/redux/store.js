import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // Example reducer
import authReducer from "./reducer/auth";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth :authReducer
  },
});
