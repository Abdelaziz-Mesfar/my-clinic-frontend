import React, { useState } from 'react'
import  Button  from 'react-bootstrap/Button';
import  Modal  from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestDeletingPatient } from '../../redux/actions/patientsActionCreator';

function DeletePatientModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const disptach = useDispatch()
    const history = useHistory()

    const handleDelete = () => {
        disptach(requestDeletingPatient(props.patientId, handleClose))
        history.push('/patients')
    }
    return (
        <>
            <button className="button delete-button" onClick={handleShow}>Delete</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure that you want to delete this patient</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeletePatientModal