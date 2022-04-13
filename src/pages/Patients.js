import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Patients() {
  const [patients, setPatient] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/patients`)
      .then(res => {
        setPatient(res.data)
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
          <div className="card" key={patient._id}>
            <h1> {patient.firstName} </h1>
          </div>
        ))
      }
    </>
  )
}

export default Patients