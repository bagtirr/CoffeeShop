import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
	filtersLoadingStatus: "loading",
	activeFilter: "",
	searchValue: "",
});

export const fetchFilters = createAsyncThunk("filters/fetchFilters", () => {
	const { request } = useHttp();
	return request("https://json-server-vercel-virid.vercel.app/api/filters");
});

const filtersSlice = createSlice({
	initialState,
	name: "filters",
	reducers: {
		changeActiveFilter: (state, action) => {
			state.activeFilter = action.payload === state.activeFilter ? "" : action.payload;
		},
		changeSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchFilters.pending, state => {
				state.filtersLoadingStatus = "loading";
			})
			.addCase(fetchFilters.fulfilled, (state, action) => {
				state.filtersLoadingStatus = "idle";
				filtersAdapter.setAll(state, action.payload);
			})
			.addCase(fetchFilters.rejected, state => {
				state.filtersLoadingStatus = "error";
			});
	},
});

const { actions, reducer } = filtersSlice;

export const filtersReducer = reducer;

export const { selectAll } = filtersAdapter.getSelectors(state => state.filters);
export const { changeActiveFilter, changeSearchValue } = actions;
