import React from 'react'
import DeleteToothDescriptionModal from '../delete-Tooth-Description-Modal/DeleteToothDescriptionModal'

function ReadOnlyDescription({ desc, patientId, toothId, handleEditClick }) {
    return (
        <>
            <tr>
                <td>Description</td>
                <td className="d-flex justify-content-between align-items-center">
                    {desc.description}
                    {/* <Form.Control as="textarea" value={desc.description} disabled plaintext style={{ width: "80%" }} /> */}
                    <div>
                        <i className="bi bi-pencil-square btn" onClick={(e)=>handleEditClick(e, desc)}></i>
                        <DeleteToothDescriptionModal description={desc} toothId={toothId} patientId={patientId} />
                    </div>
                </td>
            </tr>
        </>
    )
}

export default ReadOnlyDescription