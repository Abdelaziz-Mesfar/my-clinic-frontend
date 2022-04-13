import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllPatients } from '../redux/actions/patientsActionCreator'

function Patients() {
  // const [patients, setPatient] = useState([])
  const patients = useSelector(state => state.patients.all)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/patients`)
      .then(res => {
        // setPatient(res.data)
        dispatch(setAllPatients(res.data))
      })
      .catch(err => {
        alert(err.message)
      })
  }, [])
  return (
    <>
      <div>Patients</div>
      {
        patients.map(patient => (
          <div className="card m-4 p-4" key={patient._id}>
            <h1> {patient.firstName} </h1>
          </div>
        ))
      }
    </>
  )
}

export default Patients