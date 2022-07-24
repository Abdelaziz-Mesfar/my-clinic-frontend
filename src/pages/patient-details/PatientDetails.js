import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DeletePatientModal from '../../components/delete-patient-modal/DeletePatientModal'
import PatientTeethChart from '../../components/patient teeth chart/PatientTeethChart'
// import PatientTeethChart2 from '../../components/patient teeth chart/PatientTeethChart2'
import { fetchPatientById } from '../../redux/actions/patientsActionCreator'

import './patientDetails.css'

function PatientDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedPatient = useSelector(state => state.patients.selected)
  console.log({ selectedPatient });

  useEffect(() => {
    dispatch(fetchPatientById(id))
  }, [dispatch, id])

  return (
    <Container>

      <div className="patient__details">

        {
          selectedPatient ? (
            <>
              <div className="patient__details">
                {/* <div className="patient__details-info">
                  <div className="patient__details-info__name">
                    <p>Name :</p>
                    <p>  {selectedPatient.firstName} {selectedPatient.lastName} </p>
                  </div>
                  <div className="patient__details-info__age">
                    <p>Age :</p>
                    <p>  {selectedPatient.age} </p>
                  </div>
                  <div className="patient__details-info__phone">
                    <p>Phone Number :</p>
                    <p>  {selectedPatient.phone} </p>
                  </div>
                  <div className="patient__details-info__adress">
                    <p>Address :</p>
                    <p>  {selectedPatient.adress} </p>
                  </div>
                  <div>
                    <button>Edit</button>
                  </div>
                </div> */}
                <div className="info__table">
                  <div>
                    <table className="table table-striped table-hover table-bordered">
                      <tbody>
                        <tr>
                          <td className="">First Name</td>
                          <td className="info"> {selectedPatient.firstName} </td>
                        </tr>
                        <tr>
                          <td>Last Name</td>
                          <td className="info"> {selectedPatient.lastName} </td>
                        </tr>
                        <tr>
                          <td>Age</td>
                          <td className="info"> {selectedPatient.age} </td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td className="info"> {selectedPatient.phone} </td>
                        </tr>
                        <tr>
                          <td>Adress</td>
                          <td className="info"> {selectedPatient.adress} </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <NavLink to={`/update-patient/${id}`}>
                      <button className="button edit-button">Edit</button>
                    </NavLink>
                    <DeletePatientModal patientId={id} />
                  </div>
                </div>
                <div className="patient__details-chart">
                  <PatientTeethChart />
                  {/* <PatientTeethChart2 /> */}
                </div>
              </div>
            </>

          ) : (
            <div>
              <h1 >patient not found</h1>
            </div>
          )
        }

      </div>
    </Container>
  )
}


export default PatientDetails