// AuthSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated:
    JSON.parse(sessionStorage.getItem("isAuthenticated")) || false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      sessionStorage.setItem("isAuthenticated", true);
    },
    logout(state) {
      state.isAuthenticated = false;
      sessionStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
