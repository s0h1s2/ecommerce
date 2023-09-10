import { Payment } from "./PaymentType"
import { Product } from "./ProductType"
interface Cart  {
    cartItems: Product[],
    shippingAddress: Shipping 
    paymentMethod: Payment 
    totalPrice: number
}
export default Cart
