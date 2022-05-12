import React from 'react'
import { Form } from 'react-bootstrap'

function EditDescription({ desc, handleEditChange, handleCancelClick }) {
    return (
        <>
            <tr>
                <td>Description</td>
                <td className="d-flex justify-content-between align-items-center">
                    <Form.Control
                        type="text"
                        name="description"
                        value={desc.description}
                        onChange={(e) => handleEditChange(e, desc)}
                        style={{ width: "80%", border: "none" }}
                    />
                    <div>
                        <button style={{ background: "none", border: "none" }} type="submit">
                            <i className="bi bi-clipboard2-plus btn text-success"></i>
                        </button>
                        <button style={{ background: "none", border: "none" }} onClick={handleCancelClick}>
                            <i className="bi bi-x-square btn text-danger"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default EditDescription