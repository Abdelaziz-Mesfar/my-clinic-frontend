import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Autocomplete from '@mui/material/Autocomplete'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function NewAppointmentModal({ setEvent, event }) {

    const [show, setShow] = useState(false);
    const [interval, setInternal] = useState('');
    const [name, setName] = useState(null)
    const [date, setDate] = useState(null)
    const [newEvent, setNewEvent] = useState({
        title: "",
        start: null,
        end: null
    })

    const disptach = useDispatch()
    const patients = useSelector(state => state.patients.all)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleAddEvent = () => {
        setEvent([...event, newEvent])
    }

    return (
        <>

            <button onClick={handleShow}>New Appointment</button>
            <Modal show={show} onHide={handleClose} centered size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>New Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Pick the date and time"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue)
                            }}
                        />
                    </LocalizationProvider>
                    <TextField
                        id="outlined-basic"
                        label="Duration (min) "
                        variant="outlined"
                        value={interval}
                        onChange={(e) => setInternal(e.target.value)}
                    />
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        value={name}
                        options={patients}
                        onChange={(_, newValue) => {
                            setName(newValue)
                            setNewEvent({ ...newEvent, title: `${newValue.firstName}  ${newValue.lastName}`, start: moment(date), end: moment(date).add('minutes', interval), patient: newValue._id })
                        }}
                        getOptionLabel={option => `${option.firstName}  ${option.lastName}`}
                        renderInput={(params) => <TextField {...params} label="Pick a patient" />}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddEvent} >
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default NewAppointmentModal