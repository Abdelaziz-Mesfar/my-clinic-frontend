import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


import HealthCard from 'react-health-card'
import PatientCard from '../../components/patient card/PatientCard'
import { fetchAllPatients, setAllPatients } from '../../redux/actions/patientsActionCreator'
import TextField from '@mui/material/TextField';
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
  console.log(patients);
  const [name, setName] = useState('')
  return (
    <>
      <div className='patients'>
        <div className="page__name">
          <p>PATIENTS</p>
        </div>
        <div className="patients__controllers">
          <div className='add__patient'>
            <NavLink to='/new-patient'>
              <button>
                <i class="bi bi-person-plus"></i>
                Add New Patient
              </button>
            </NavLink>
          </div>
          <div className='search__patient'>
            {/* <input id="search-input" placeholder="search by name" value={name} onChange={e => setName(e.target.value)} /> */}
            <TextField
              id="outlined-basic"
              label="Search patient"
              variant="outlined"
              value={name}
              onChange={e => setName(e.target.value)}
              className="search__input"
            />
          </div>
        </div>
        <div className="patients__list">
          {
            patients.filter(p => p.firstName.includes(name) || p.lastName.includes(name)).map(patient => <PatientCard key={patient._id} patient={patient} patients={patients} />)
          }
        </div>
      </div>
    </>
  )
}

export default Patients