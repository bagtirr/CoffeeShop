import { configureStore } from "@reduxjs/toolkit";
import { coffeeApi } from "../api/coffeeApi";
import { filtersReducer } from "./filters/filtersSlice";

const store = configureStore({
	reducer: { filters: filtersReducer, [coffeeApi.reducerPath]: coffeeApi.reducer },
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coffeeApi.middleware),
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
