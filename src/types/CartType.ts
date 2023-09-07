import { Product } from "./ProductType"
type Cart = {
    cartItems: Product[],
    shippingAddress: Shipping|null,
    totalPrice: number
}
export default Cart
