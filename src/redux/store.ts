import { configureStore } from "@reduxjs/toolkit";
import  burgerMenu  from "./burgerMenuSlice";
import  Modal  from "./modalSlice";

export const store = configureStore({
  reducer: {
    burger: burgerMenu,
    modal:Modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
