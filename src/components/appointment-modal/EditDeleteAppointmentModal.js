import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedApppointment } from '../../redux/actions/appointmentActionCreators';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Autocomplete, TextField } from '@mui/material';
import moment from 'moment'



function EditDeleteAppointmentModal() {
    const dispatch = useDispatch()

    const [show, setShow] = useState(true);

    // const handleClose = () => setShow(false);
    const handleClose = () => dispatch(resetSelectedApppointment());
    const handleShow = () => setShow(true);

    const selectedAppointment = useSelector(state => state.appointments.selected)
    const patients = useSelector(state => state.patients.all)

    const [appointmentData, setAppointmentData] = useState({
        title: "",
        start: null,
        end: null
    })

    const [interval, setInterval] = useState('')
    const [patientId, setPatientId] = useState('')


    useEffect(() => {
        if (selectedAppointment) {
            setAppointmentData(selectedAppointment)
        }
    }, [selectedAppointment])

    console.log({appointmentData});

    return selectedAppointment ? (
        <>

            <Modal centered show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="pick date and time"
                            value={appointmentData.start}
                            onChange={newVal => setAppointmentData(prevData => ({ ...prevData, start: moment(newVal) }))}
                        />
                    </LocalizationProvider>
                    <TextField
                        label="Duration (min) "
                        variant="outlined"
                        value={interval}
                        onChange={e => setInterval(e.target.value)}
                    />
                    <Autocomplete
                        freeSolo
                        value={appointmentData.title}
                        // options={patients.map(option => `${option.firstName} ${option.lastName}`)}
                        options={patients}
                        getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                        onChange={(_,newVal)=> {
                            setAppointmentData(prevData => ({...prevData, end: moment(appointmentData.start).add(interval,'minutes')}))
                            setPatientId(newVal._id)
                        }}
                        renderInput={(params) => <TextField {...params} label="Pick a patient" />}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    ) : (null);
}

export default EditDeleteAppointmentModal