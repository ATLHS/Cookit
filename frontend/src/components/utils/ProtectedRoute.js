import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from "./Auth";

const ProtectedRoute = ({children, ...rest}) => {
    return (
        <Route 
        {...rest}
            render={() => 
                getToken() ? (
                    children
                ) : (
                    <Redirect to="/users/login" />
                )
            }
        />
    )
}

export default ProtectedRoute;