import { apiSlice } from "./ApiSlice";
import { API_ORDER_BASE } from "../constants/config"
import { Order } from "../types/OrderType";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, Order>({
      query: (order) => ({
        url: API_ORDER_BASE,
        method: "POST",
        body: order
      })
    })
  })
})
export const { useCreateOrderMutation } = orderApiSlice
