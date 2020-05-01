import React, {useState, useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CheckBeforeResetPassword = () => {
    const [message, setMessage] = useState();
    const {token} = useParams();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch(`/users/check_before_reset_password/?token=${token}`, {
            method: "GET",
            signal: signal
        })
        .then(response => response.json())
        .then(res =>  setMessage(res) )
        .catch(err => console.log(err))
        return () => {
            abortController.abort()
        };
    }, [])
    
    return message ? 
        !message.isConfirm ? 
            <>
                <Redirect to={{ pathname: "/users/login", state: message }}/>
            </>
            :
            <>
               <Redirect to={{ pathname: "/users/set_password", state: {token} }}/> 
            </>
            : 
            <>
                <Row className="m-auto">
                    <Col className="text-center">
                        <Spinner  animation="border" size="lg"/>
                    </Col>
                </Row>
            </>
    
}

export default CheckBeforeResetPassword;