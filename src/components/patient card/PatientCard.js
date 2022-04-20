import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './patientCard.css'

function PatientCard({ patient }) {
    return (
        <div className='card'>
            <div className="patient__card">
                <div className="patient__card-image">
                    <img src='https://c8.alamy.com/comp/2AENRME/face-expression-of-handsome-man-laughing-male-emotion-young-guy-cartoon-character-vector-illustration-isolated-on-white-background-2AENRME.jpg' alt="patient image" />
                </div>
                <div className="patient__card-info">
                    <div>
                        <h4>Name :</h4>
                        <h5> {patient.firstName} {patient.lastName} </h5>
                    </div>
                    <div>
                        <p >phone :</p>
                        <p > {patient.phone} </p>
                    </div>
                </div>
                <div>
                    <NavLink to={`/patients/${patient._id}`}>
                        <button>Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default PatientCard