import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";

const store = configureStore({
  reducer: {
    AuthReducer: AuthSlice,
  },
});

export default store;
