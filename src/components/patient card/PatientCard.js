import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/card-logo.png'
import './patientCard.css'

function PatientCard({ patient, patients }) {
    return (
        <div className='cards'>
            <div className="patient__card">
                <div className="patient__card-header">
                    <div className="patient__card-header__number">
                        <p>Patient Number</p>
                        <p> {`${patients.indexOf(patient) + 1}`} </p>
                    </div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="patient__card-name">
                    <p> {`${patient.firstName} ${patient.lastName}`} </p>
                </div>
                <div className="patient__card-phone">
                    <div>
                        <p>Phone :</p>
                        <p> {patient.phone} </p>
                    </div>
                    <div>
                        <NavLink to={`/patients/${patient._id}`}>
                            <span>
                                <i className="bi bi-journal-medical"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientCard