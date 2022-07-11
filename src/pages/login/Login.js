import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { requestLogin } from '../../redux/actions/userActionCreators'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField'

import loginImage from '../../assets/Researching-amico.svg'
import './login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestLogin(email, password))
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }


  return (
    <div className="login-page">
      <div className="login-page-content">
        <div className="login-page-content__image">
          <img src={loginImage} alt='login image' />
        </div>
        <div className="login-page-content-form">
          <Form onSubmit={handleSubmit}>
            <div className="login-page-content-form__signIn">
              <p>
                <i className="bi bi-box-arrow-in-right"></i>
                Sign In
              </p>
            </div>
            <div className="login-page-content-form-container">
              <div className="login-page-content-form-container__email login-input-field" style={{ width: "100%" }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-page-content-form-container__password">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
              <div className="login-page-content-form-container__button">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </Form>
          <div className="login-page-content-redirect">
            <NavLink to="/register">
              <a>You don't have an account ? Sign Up here</a>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login