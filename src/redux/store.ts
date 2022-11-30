import { configureStore } from "@reduxjs/toolkit";
import  burgerMenu  from "./burgerMenuSlice";

export const store = configureStore({
  reducer: {
    burger: burgerMenu,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
