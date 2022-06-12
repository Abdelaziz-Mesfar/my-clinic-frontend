import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { Container, FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { requestCreatingPatient } from '../../redux/actions/patientsActionCreator'

import logo from '../../assets/prescription-bro.svg'
import './createNewPatient.css'


function CreateNewPatient() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [patientData, setPatientData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        phone: "",
        adress: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestCreatingPatient(patientData, history))
    }

    const handleChange = (e) => {
        setPatientData(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    return (
        <div className="all-p">
            <Container className="create__new-patient">
                <div className="create__new-patient-content">
                    <div className="create__new-patient-title">
                        <h1>Add New Patient</h1>
                    </div>

                    <div className="create__new-patient-form">
                        <div className="create__new-patient-form-image">
                            <img src={logo} />
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                {/* <Form.Label className="mb-3">First Name</Form.Label> */}
                                <FloatingLabel label="First Name" className='mb-3'>
                                    <Form.Control
                                        placeholder="enter firstName"
                                        type="text"
                                        value={patientData.firstName}
                                        onChange={handleChange}
                                        name="firstName"
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group>
                                {/* <Form.Label className="mb-3">Last Name</Form.Label> */}
                                <FloatingLabel label="LastName" className='mb-3'>
                                    <Form.Control
                                        placeholder="enter lastName"
                                        type="text"
                                        value={patientData.lastName}
                                        onChange={handleChange}
                                        name="lastName"
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group>
                                {/* <Form.Label className="mb-3">Age</Form.Label> */}
                                <FloatingLabel label="Age" className='mb-3'>
                                    <Form.Control
                                        placeholder="enter age"
                                        type="text"
                                        value={patientData.age}
                                        onChange={handleChange}
                                        name="age"
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                {/* <Form.Label className="mb-3">Phone</Form.Label> */}
                                <FloatingLabel label="Phone" className='mb-3'>
                                    <Form.Control
                                        placeholder="enter phone"
                                        type="text"
                                        value={patientData.phone}
                                        onChange={handleChange}
                                        name="phone"
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group>
                                {/* <Form.Label className="mb-3">Adress</Form.Label> */}
                                <FloatingLabel label="Adress" className='mb-3'>
                                    <Form.Control
                                        placeholder='enter adress'
                                        type="text"
                                        value={patientData.adress}
                                        onChange={handleChange}
                                        name="adress"
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <div className="create__new-patient-controllers">
                                <NavLink to={`/patients`}>
                                    <Button variant='outline-secondary'>
                                        Back
                                    </Button>
                                </NavLink>
                                <Button type="submit" className="create__new-patient-controllers-add-patient">
                                    Add patient
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default CreateNewPatient