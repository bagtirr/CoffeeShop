import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import useHttp from "../../hooks/useHttp";

const coffeeAdapter = createEntityAdapter();

const initialState = coffeeAdapter.getInitialState({
    coffeeLoadingStatus: "loading",
    productLoadingStatus: "loading",
    productData: {},
});

export const fetchCoffee = createAsyncThunk("coffee/fetchCoffee", () => {
    const { request } = useHttp();

    return request(`http://localhost:3001/coffee/`);
});

export const fetchSingleProduct = createAsyncThunk("coffee/fetchSingleProduct", id => {
    const { request } = useHttp();

    return request(`http://localhost:3001/coffee/${id}/`);
});

const coffeeSlice = createSlice({
    initialState,
    name: "coffee",
    extraReducers: builder => {
        builder
            .addCase(fetchCoffee.pending, state => {
                state.coffeeLoadingStatus = "loading";
            })
            .addCase(fetchCoffee.fulfilled, (state, action) => {
                state.coffeeLoadingStatus = "idle";
                coffeeAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCoffee.rejected, state => {
                state.coffeeLoadingStatus = "error";
            })
            .addCase(fetchSingleProduct.pending, state => {
                state.productLoadingStatus = "loading";
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.productLoadingStatus = "idle";
                state.productData = action.payload;
            })
            .addCase(fetchSingleProduct.rejected, state => {
                state.productLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

export const { selectAll } = coffeeAdapter.getSelectors(state => state.coffee);

export const coffeeReducer = coffeeSlice.reducer;
