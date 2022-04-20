import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import PatientCard from '../components/patient card/PatientCard'
import { fetchAllPatients, setAllPatients } from '../redux/actions/patientsActionCreator'

function Patients() {
  // const [patients, setPatient] = useState([])
  const patients = useSelector(state => state.patients.all)
  const dispatch = useDispatch()
  useEffect(() => {
    // axios.get(`${process.env.REACT_APP_API_URL}/patients`)
    //   .then(res => {
    //     // setPatient(res.data)
    //     dispatch(setAllPatients(res.data))
    //   })
    //   .catch(err => {
    //     alert(err.message)
    //   })
    dispatch(fetchAllPatients())
  }, [])
  return (
    <>
      <NavLink to='/new-patient'>
        <button> Add new patient </button>
      </NavLink>
      <Container className="patient">
          {
            patients.map(patient => (
              <Container key={patient._id}>
                <PatientCard patient={patient} />
              </Container>
            ))
          }
      </Container>
    </>
  )
}

export default Patients