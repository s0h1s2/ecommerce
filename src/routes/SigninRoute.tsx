// @ts-nocheck
import { FormEvent, useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form, Spinner } from 'react-bootstrap'
import { HOME, SIGN_UP } from '../constants/routeNames'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../slices/userSlice'
import { setCredentials } from '../slices/authSlice'
import { useAppDispatch } from '../hooks'
const SigninRoute = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  
  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate(HOME)
    } catch (err) {
      if (err.status == 400) {
        setErrors({...err.data.error})
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
            {errors?.email&& errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} isInvalid={errors?.password} />
          <Form.Control.Feedback type="invalid">
            {errors?.password && errors.password}
          </Form.Control.Feedback>

        </Form.Group>
        <div className='d-grid gap-2'>
          <Button type="submit" variant="primary" className="mt-2" disabled={isLoading}>
            {isLoading ? <Spinner size='sm' /> : "Login"}
          </Button>
        </div>
      </Form>
      <h6 className='mt-4'>New Customer? <Link to={SIGN_UP}>Register</Link></h6>
    </FormContainer>
  )
}

export default SigninRoute
