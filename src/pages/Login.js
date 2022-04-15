import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { requestLogin } from '../redux/actions/userActionCreators'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestLogin(email, password))
  }
  return (
    <Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <Button onClick={() => setPasswordType(prevPasswordType => setPasswordType(prevPasswordType === "password" ? "text" : "password"))} >
                <i className={`bi bi-eye${passwordType === "text" ? "-slash" : ""}`}></i>
              </Button>
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default Login