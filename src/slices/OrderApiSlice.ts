import { apiSlice } from "./ApiSlice";
import { API_ORDER_BASE } from "../constants/config"
import { Order } from "../types/OrderType";
import { OrderResult } from "../types/OrderResultType";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, Order>({
      query: (order) => ({
        url: API_ORDER_BASE,
        method: "POST",
        body: order
      })
    }),
    getOrderById: builder.query<{ order: OrderResult }, any>({
      query: (orderId: number) => ({
        url: `${API_ORDER_BASE}/${orderId}`,
      }),
      keepUnusedDataFor: 5
    })
  })
})
export const { useCreateOrderMutation, useGetOrderByIdQuery } = orderApiSlice
