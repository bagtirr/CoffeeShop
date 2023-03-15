import { configureStore } from "@reduxjs/toolkit";
import { coffeeReducer } from "./coffee/coffeeSlice";
import { filtersReducer } from "./filters/filtersSlice";

const store = configureStore({
    reducer: { coffee: coffeeReducer, filters: filtersReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
