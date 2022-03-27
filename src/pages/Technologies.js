import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Technologies() {
    const [technologies, setTechnologies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/technologies`)
            .then(res => {
                setTechnologies(res.data)
            })
            .catch(err => {
                alert(err.message)
            })
    }, [])
    return (
        <div>
            {
            technologies.map(t=>(
                <div key={t._id}>
                    {t.name}
                </div>
        ))}
        </div>
    )
}

export default Technologies