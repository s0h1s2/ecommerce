import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL } from "../constants/config"

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL,credentials:"include"});
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["product", "order", "user"],
    endpoints: () => ({})
}
);
