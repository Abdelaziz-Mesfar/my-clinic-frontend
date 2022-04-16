import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

function PrivateRoute(props) {
    const { component: Component } = props
    const { isAuth } = useSelector(state => state.user)
    return (
        <Route
            {...props}
            component={() => (
                <>
                    {
                        isAuth ? (<Component />) : (<Redirect to='login' />)
                    }
                </>
            )}

        />
    )
}

export default PrivateRoute