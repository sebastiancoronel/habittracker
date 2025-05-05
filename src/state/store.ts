import { configureStore } from "@reduxjs/toolkit";
import markAsCompletedReducer from "./markAsCompleted/markAsCompletedSlice";

export const store = configureStore({
  reducer: {
    markAsCompleted: markAsCompletedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

