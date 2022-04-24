import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import  Button from 'react-bootstrap/Button';
import  Modal  from 'react-bootstrap/Modal';

import { requestDeletingToothDescription } from '../../redux/actions/patientTeethDescriptionActionCreators';

function DeleteToothDescriptionModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const disptach = useDispatch()

    return (
        <>
            
                <i className="bi bi-trash btn text-danger" onClick={handleShow}></i>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure that you want to delete this description</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => disptach(requestDeletingToothDescription({descriptionId: props.description._id, patientId: props.patientId, toothId: props.toothId}, handleClose))}>
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default DeleteToothDescriptionModal