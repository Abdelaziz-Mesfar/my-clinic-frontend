import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { requestRegister } from '../../redux/actions/userActionCreators'
import { alertError } from '../../utils/feedback'

import registerImage from '../../assets/Doctors-bro.svg'
import './register.css'

function Register() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = registerData
    if (!firstName) {
      return alertError('the first name is required')
    }
    if (!lastName) {
      return alertError("the last name is required")
    }
    if (!email) {
      return alertError("the email is required")
    }
    if (!password) {
      return alertError("the password is required")
    }
    if (!confirmPassword) {
      return alertError("You have to confirm your password")
    }
    if (password !== confirmPassword) {
      return alertError("The passwords mismatch")
    }
    dispatch(requestRegister({ firstName, lastName, email, password }, history))
  }

  const handleChange = (e) => {
    setRegisterData(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  return (
    <div className="register-page">
      <div className="register-page__title">
        <p>Welcome To MyClinic</p>
      </div>
      <div className="register-page-content">
        <div className="register-page-content__image">
          <img src={registerImage} alt="register image" />
        </div>

        <div className="register-page-content-form">
          <Form className="" onSubmit={handleSubmit}>
            <div className="register-page-content-form__signUp">
              <p>
                <i className="bi bi-person-plus"></i>
                Sign Up
              </p>
            </div>
            <div className="form__row">
              <div className="register-page-content-form__firstName register-input-field">
                <TextField
                  className="name"
                  label="First Name"
                  variant="outlined"
                  value={registerData.firstName}
                  onChange={handleChange}
                  name="firstName"
                />
              </div>
              <div className="register-page-content-form__lastName register-input-field">
                <TextField
                  className="name"
                  label="Last Name"
                  variant="outlined"
                  value={registerData.lastName}
                  onChange={handleChange}
                  name="lastName"
                />
              </div>
            </div>
            <div className="register-page-content-form__email register-input-field">
              <TextField
                label="Email"
                variant="outlined"
                value={registerData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="form__row">
              <div className="register-page-content-form__phone register-input-field">
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  value={registerData.phone}
                  onChange={handleChange}
                  name="phone"
                />
              </div>
              <div className="register-page-content-form__adress register-input-field">
                <TextField
                  label="Adress"
                  variant="outlined"
                  value={registerData.adress}
                  onChange={handleChange}
                  name="adress"
                />
              </div>
            </div>
            <div className="form__row">
              <div className="register-page-content-form__password register-input-field">
                <FormControl   variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={registerData.password}
                    name="password"
                    onChange={handleChange}
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
              <div className="register-page-content-form__confirmPassword register-input-field">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password2"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={registerData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                </FormControl>
              </div>
            </div>
            <div className="register-page-content__button">
              <Button variant="primary" type="submit">
                Create Account
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register