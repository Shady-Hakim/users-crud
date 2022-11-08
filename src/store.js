import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./components/auth/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
