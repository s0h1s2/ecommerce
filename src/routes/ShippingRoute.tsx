import { useState } from "react"
import FormContainer from "../components/FormContainer"
import { Button, Form } from "react-bootstrap"

const ShippingRoute = ()=> {
  const [address,setAddress]=useState("")
  const [postalCode,setPostalCode]=useState("")
  const [city,setCity]=useState("")
  const [country,setCountry]=useState("")
  function submitHandler(e){
    e.preventDefault()
  } 
  return (
    <FormContainer>
     <h1>Shipping</h1>
     <Form onSubmit={submitHandler}>
        <Form.Group className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(e)=>setAddress(e.target.value)}>
          </Form.Control>
        </Form.Group>
<Form.Group className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" value={city} onChange={(e)=>setCity(e.target.value)}>
          </Form.Control>
        </Form.Group>
<Form.Group className="my-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter your postalcode " value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}>
          </Form.Control>
        </Form.Group>

<Form.Group className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Enter your country" value={country} onChange={(e)=>setCountry(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Button  type="submit" className="my-1">Procced</Button>
      </Form>
     
    </FormContainer>
  )
}

export default ShippingRoute
