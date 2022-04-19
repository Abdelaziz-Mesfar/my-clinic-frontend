import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { requestRegister } from '../redux/actions/userActionCreators'
import { alertError } from '../utils/feedback'

function Register() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = registerData
    if(!firstName){
      return alertError('the first name is required')
    }
    if(!lastName) {
      return alertError("the last name is required")
    }
    if(!email){
      return alertError("the email is required")
    }
    if(!password){
      return alertError("the password is required")
    }
    if(!confirmPassword){
      return alertError("You have to confirm your password")
    }
    if(password !== confirmPassword) {
      return alertError("The passwords mismatch")
    }
    dispatch(requestRegister({firstName, lastName, email, password}, history))
  }

  const handleChange = (e) => {
    setRegisterData(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
  }
  return (
    <Form className="container mt-5" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="mb-3">First Name</Form.Label>
        <Form.Control
          type="text"
          value={registerData.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="mb-3">Last Name</Form.Label>
        <Form.Control
          type="text"
          value={registerData.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={registerData.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={registerData.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          value={registerData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="please confirm your password here"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register