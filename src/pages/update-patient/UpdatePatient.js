import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { fetchPatientById, requestUpdatingPatient } from '../../redux/actions/patientsActionCreator'

function UpdatePatient() {

    const selectedPatient = useSelector(state => state.patients.selected)
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    const [patientData, setPatientData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        adress: ''
    })

    useEffect(() => {
        if (selectedPatient) {
            setPatientData(selectedPatient)
        }
    }, [selectedPatient])

    useEffect(() => {
        dispatch(fetchPatientById(id))
    }, [dispatch, id])

    const handleChange = (e) => {
        setPatientData(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, age, phone, adress } = patientData
        dispatch(requestUpdatingPatient(id, { firstName, lastName, age, phone, adress }, history))
    }

    return (
        <>
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
                    Update
                </Button>
            </Form>
        </>
    )
}

export default UpdatePatient