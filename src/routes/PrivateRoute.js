import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import InsideLayout from '../layouts/InsideLayout'

function PrivateRoute(props) {
    const { component: Component } = props
    const { isAuth } = useSelector(state => state.user)
    return (
        <Route
            {...props}
            component={() => (
                <>
                    {
                        isAuth ? (<InsideLayout> <Component /> </InsideLayout>) : (<Redirect to='login' />)
                    }
                </>
            )}

        />
    )
}

export default PrivateRoute