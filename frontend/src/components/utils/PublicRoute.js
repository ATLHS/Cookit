import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from "./Auth";

const PublicRoute = ({children, ...rest}) => {

    return (
        <Route 
        {...rest}
            render={() => 
                !getToken() ? (
                    children
                ) : (
                    <Redirect to="/dashboard" />
                )
            }
        />
    )
}

export default PublicRoute;