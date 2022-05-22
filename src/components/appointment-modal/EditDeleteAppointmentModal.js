import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { fetchAppointmentById, requestDeletingAppointment, requestUpdatingAppointment, resetSelectedApppointment } from '../../redux/actions/appointmentActionCreators';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Autocomplete, TextField } from '@mui/material';


import './editDeleteAppointment.css'


function EditDeleteAppointmentModal() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [show, setShow] = useState(true);

    // const handleClose = () => setShow(false);
    const handleClose = () => {
        dispatch(resetSelectedApppointment())
    };
    const handleShow = () => setShow(true);

    const selectedAppointment = useSelector(state => state.appointments.selected)
    const patients = useSelector(state => state.patients.all)

    const [appointmentData, setAppointmentData] = useState({
        // title: "",
        start: null,
        end: null
    })

    const [date, setDate] = useState(null)
    const [name, setName] = useState('')

    const appointmentId = appointmentData._id
    // const [appointmentId, setAppointmentId] = useState('')
    console.log({ appointmentId });

    const [interval, setInterval] = useState('')
    const [patientId, setPatientId] = useState('')


    useEffect(() => {
        if (selectedAppointment) {
            setAppointmentData(selectedAppointment)
        }
    }, [selectedAppointment])

    const handleEdit = () => {
        // setAppointmentData(prevData => ({ ...prevData, title: name, start: moment(date), end: moment(date).add(interval, 'minutes') }))
        dispatch(resetSelectedApppointment())
        dispatch(requestUpdatingAppointment({ patientId, appointmentId }, appointmentData))

    }

    const handleDelete = () => {
        dispatch(resetSelectedApppointment())
        dispatch(requestDeletingAppointment(appointmentId))
        history.push('/dashboard')
    }

    console.log({ selectedAppointment });

    return selectedAppointment ? (
        <>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal__body'>
                    <div className="patient-name">
                        <p>Patient Name :</p>
                        <p>{selectedAppointment.title}</p>
                    </div>
                    <div className="date-time-picker">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="pick date and time"
                                value={date}
                                // onChange={newVal => setAppointmentData(prevData => ({ ...prevData, start: moment(newVal) }))}
                                onChange={newValue => {
                                    setDate(newValue)
                                    // setAppointmentId(selectedAppointment._id)
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <TextField
                            label="Duration (min) "
                            variant="outlined"
                            value={interval}
                            onChange={e => {
                                setInterval(e.target.value)
                                setAppointmentData(prevData => ({ ...prevData, start: moment(date), end: moment(date).add(interval, 'minutes') }))
                                setPatientId(selectedAppointment.patient)
                            }}
                            className="appointment-duration"
                        />
                    </div>
                    {/* <Autocomplete
                        freeSolo
                        defaultValue={patients.find(p => p._id === selectedAppointment.patient)}
                        // disabled
                        // options={patients.map(option => `${option.firstName} ${option.lastName}`)}
                        options={patients}
                        getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                        // renderOption={(_, option) => option.title}
                        onChange={(_, newVal) => {
                            setName(`${newVal.firstName} ${newVal.lastName}`)
                            setAppointmentData(prevData => ({...prevData,title: `${newVal.firstName} ${newVal.lastName}`, start: moment(date) , end: moment(date).add(interval,'minutes')}))
                            setPatientId(newVal._id)
                        }}
                        renderInput={(params) => <TextField {...params} label="Pick a patient" />}
                    /> */}
                </Modal.Body>
                <Modal.Footer className="foot">
                    <div>
                        <Button className="delete-button" onClick={handleDelete}>
                            Delete
                        </Button>
                    </div>
                    <div>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="save-button" onClick={handleEdit}>
                            Save Changes
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    ) : (null);
}

export default EditDeleteAppointmentModal