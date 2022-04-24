import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PatientTeethChart from '../components/patient teeth chart/PatientTeethChart'
import { fetchPatientById } from '../redux/actions/patientsActionCreator'

function PatientDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedPatient = useSelector(state => state.patients.selected)

  useEffect(()=>{
    dispatch(fetchPatientById(id))
  }, [dispatch, id])

  return (
    <div>
      <div>
        <h1> {selectedPatient.firstName} </h1>
      </div>
      <PatientTeethChart />
    </div>
  )
}

export default PatientDetails