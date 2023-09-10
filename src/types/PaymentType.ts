export enum PaymentType {
  Paypal = 1,
  CreditCard,
  DebtCard
}
export interface Payment {
  paymentType: PaymentType
}
