import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'

function AccountConfirmation() {
    
    const [validUrl, setValidUrl] = useState(false);
    const params = useParams();
    console.log('params', params);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const url = `http://localhost:4000/auth/${params.id}/verify/${params.token}`
                const { data } = await axios.get(url)
                console.log(data);
                setValidUrl(true)
            } catch (error) {
                console.log(error);
                setValidUrl(false)
            }

        }
        verifyEmail();
    }, [params])

    return (
        <>

            {
                validUrl ? (
                    <div class="alert alert-success" role="alert">
                        <h1>Congratulations!!</h1>
                        <p>Your account has been verified. You can now login to your account</p>
                        <NavLink to={'/login'}>
                            <button type="button" class="btn btn-primary">Login</button>
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <h1>404 Not Found</h1>
                    </div>
                )
            }
        </>
    )
}

export default AccountConfirmation