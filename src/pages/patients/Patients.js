import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


import HealthCard from 'react-health-card'
import PatientCard from '../../components/patient card/PatientCard'
import { fetchAllPatients, setAllPatients } from '../../redux/actions/patientsActionCreator'
import './patients.css'

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
      <Container className="">
        <NavLink to='/new-patient'>
          <button> Add new patient </button>
        </NavLink>
        <div className="patients__list">
          {
            patients.map(patient => (
              <Container  key={patient._id}>
                <div>
                  <PatientCard patient={patient} patients={patients} />
                </div>
              </Container>
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default Patients