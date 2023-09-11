// @ts-ignore
import { Button, Col, Form } from 'react-bootstrap'
import FormContainer from './FormContainer'
import { PaymentType } from '../types/PaymentType'
import { FormEvent} from 'react'

const PaymentMethod = ({ next }: { next: () => void }) => {
  function handleSelectChange(type:any) {
    console.log(type)
    throw new Error("Not implmeneted!")
  }
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    next()
  }

  return (
    <FormContainer>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Col>
            <Form.Check name="paymentMethod" type="radio" className='my-2' label="Delivery Payment" value={PaymentType.Paypal} checked onChange={(e) => handleSelectChange(parseInt(e.target.value))} />
          </Col>
          <Col>
            <Form.Check name="paymentMethod" type="radio" className='my-2' label="Paypal" value={PaymentType.CreditCard} onChange={(e) => handleSelectChange(parseInt(e.target.value))} disabled />
          </Col>
        </Form.Group>
        <Button className="my-2" type="submit" >Continue</Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentMethod
