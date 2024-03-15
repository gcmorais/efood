import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Food } from "../pages/home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<Food[], void>({
      query: () => "restaurantes",
    }),
    getDishes: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});

export const { useGetAllRestaurantsQuery, useGetDishesQuery } = api;

export default api;
