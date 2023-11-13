import React, { Fragment } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading === false && (
                isAuthenticated === false ? (
                    <Navigate to='/login' replace />
                ) : (
                    <Route {...rest} element={Component} />
                )
            )}
        </Fragment>
    )
}

export default ProtectedRoute