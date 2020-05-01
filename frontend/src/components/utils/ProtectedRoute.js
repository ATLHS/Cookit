import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { getToken } from "./Auth";

const ProtectedRoute = ({children, ...rest}) => {
    let location = useLocation();
    const token = location.state;
    return (
        <Route 
        {...rest}
            render={() => 
                getToken() || token ? (
                    children
                ) : (
                    <Redirect to="/users/login" />
                )
            }
        />
    )
}

export default ProtectedRoute;