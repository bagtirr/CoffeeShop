import { configureStore } from "@reduxjs/toolkit";
import { coffeeReducer } from "./coffee/coffeeSlice";

const store = configureStore({
    reducer: { coffee: coffeeReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
