import FormContainer from "./FormContainer"
import { Button, Form } from "react-bootstrap"
import { FormEvent, useState } from "react"
import { useAppDispatch } from "../hooks"
import { setShippingInfo } from "../slices/CartSlice"
const Shipping = ({ next }: { next: () => void }) => {
  const [address, setAddress] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const dispatch = useAppDispatch();
  function submitHandler(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(setShippingInfo({ address, postalCode, city, country }))
    next()
  }
  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter your postalcode " value={postalCode} onChange={(e) => setPostalCode(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Enter your country" value={country} onChange={(e) => setCountry(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Button type="submit" className="my-1">Continue</Button>
      </Form>

    </FormContainer>

  )
}

export default Shipping
