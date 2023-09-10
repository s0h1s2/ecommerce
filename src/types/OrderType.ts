
export interface OrderItem {
  productId: number,
  qty: number
}
export interface Order extends Shipping{
  orderItems: OrderItem[],
}
