// @ts-nocheck
import { FormEvent, useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form, Spinner } from 'react-bootstrap'
import {  SIGN_IN } from '../constants/routeNames'
import { Link, useNavigate } from 'react-router-dom'
import {  useRegisterMutation } from '../slices/userSlice'
import { useAppDispatch } from '../hooks'
const SignupRoute= () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const [register, { isLoading }] = useRegisterMutation()
  
  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if(confirmPassword!=password){
      setErrors({...errors,confirmPassword:"Confirm password must be same as password"})
      return
    }
    try {
      const res = await register({ name,email, password }).unwrap()
      navigate(SIGN_IN)
    } catch (err) {
      if (err.status == 400) {
        setErrors({...errors,...err.data.error})
      }
    }
  }
  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={errors?.email} />
          <Form.Control.Feedback type="invalid">
            {errors?.email&& errors?.email}
          </Form.Control.Feedback>
        </Form.Group>
<Form.Group controlId='name' className='my-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} isInvalid={errors?.name} />
          <Form.Control.Feedback type="invalid">
            {errors?.name&& errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} isInvalid={errors?.password} />
          <Form.Control.Feedback type="invalid">
            {errors?.password && errors.password}
          </Form.Control.Feedback>

        </Form.Group>
<Form.Group controlId='password' className='my-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} isInvalid={errors?.confirmPassword} />
          <Form.Control.Feedback type="invalid">
            {errors?.confirmPassword && errors.confirmPassword}
          </Form.Control.Feedback>

        </Form.Group>


        <div className='d-grid gap-2'>
          <Button type="submit" variant="primary" className="mt-2" disabled={isLoading}>
            {isLoading ? <Spinner size='sm' /> : "Register"}
          </Button>
        </div>
      </Form>
      <h6 className='mt-4'>Have an account? <Link to={SIGN_IN}>Login</Link></h6>
    </FormContainer>
  )
}

export default SignupRoute
