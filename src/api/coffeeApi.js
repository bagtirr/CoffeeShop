import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coffeeApi = createApi({
	reducerPath: "coffeeApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
	endpoints: builder => ({
		getAllCoffee: builder.query({
			query: () => "coffee/",
		}),
		getSingleCoffee: builder.query({
			query: id => `coffee/${id}`,
		}),
	}),
});

export const { useGetAllCoffeeQuery, useGetSingleCoffeeQuery } = coffeeApi;
