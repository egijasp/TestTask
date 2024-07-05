import { configureStore } from "@reduxjs/toolkit";
import { reducer as tableReducer } from "../redux/reducers/TableSlice";

export const store = configureStore({
  reducer: { table: tableReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
