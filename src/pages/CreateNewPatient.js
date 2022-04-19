import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { requestCreatingPatient } from '../redux/actions/patientsActionCreator'

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
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className="mb-3">First Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={patientData.firstName}
                        onChange={handleChange}
                        name="firstName"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="mb-3">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={patientData.lastName}
                        onChange={handleChange}
                        name="lastName"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="mb-3">Age</Form.Label>
                    <Form.Control
                        type="text"
                        value={patientData.age}
                        onChange={handleChange}
                        name="age"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mb-3">Phone</Form.Label>
                    <Form.Control
                        type="text"
                        value={patientData.phone}
                        onChange={handleChange}
                        name="phone"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="mb-3">Adress</Form.Label>
                    <Form.Control
                        type="text"
                        value={patientData.adress}
                        onChange={handleChange}
                        name="adress"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add patient
                </Button>
            </Form>
        </Container>
    )
}

export default CreateNewPatient