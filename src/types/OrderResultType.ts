type OrderItems = {
  qty: number,
  id: number,
  productId: number,
  Product: {
    name: string,
    image: string,
    price: number
  }

}
export interface OrderResult extends Shipping {
  id: number,
  totalPrice: number,
  itemsPrice: number,
  shippingPrice: number,
  taxPrice: number,
  user: {
    name: string,
    email: string
  },
  isDelivered: boolean,
  isPaid: boolean,
  deliveredTime: string,
  orderItems: OrderItems[]
}
