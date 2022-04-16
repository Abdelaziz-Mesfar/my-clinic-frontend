import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import OutsideLayout from '../layouts/OutsideLayout'

function PublicRoute(props) {
    const { component: Component } = props
    const { isAuth } = useSelector(state => state.user)
    return (
        <Route
            {...props}
            component={() => (
                <>
                    {
                        isAuth ? (<Redirect to='/dashboard' />) : (<OutsideLayout> <Component /> </OutsideLayout>)
                    }
                </>
            )}
        />
    )
}

export default PublicRoute