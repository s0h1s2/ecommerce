import Stepper from "react-stepper-horizontal";
import Shipping from "../components/Shipping";
import { useState } from "react";
import PaymentMethod from "../components/PaymentMethod";
import OrderProduct from "../components/OrderProduct";

const ShippingRoute = () => {
  const [step, setStep] = useState(1);
  function next() {
    setStep((step) => step + 1);
  }
  function renderCurrentStep() {
    switch (step) {
      case 1:
        return <Shipping next={next} />;
      case 2:
        return <PaymentMethod next={next} />
      case 3:
        return <OrderProduct />
      default:
        return <h1>Go back to mordor?!!</h1>;
    }
  }
  return (
    <>
      <Stepper
        steps={[
          { title: "Shipping Address" },
          { title: "Payment Method" },
          { title: "Order" },
        ]}
        activeStep={step}
      ></Stepper>
      {renderCurrentStep()}
    </>
  );
};

export default ShippingRoute;
