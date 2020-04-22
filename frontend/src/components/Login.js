import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../css/Login.css';
import { setUserStorage } from './utils/Auth';
import FacebookLoginButton from './layout/FacebookLoginButton'

const Login = () => {
    let location = useLocation();
    const message = location.state;
    const [accountMessage, setAccountMessage] = useState()
    const [isloggedin, setIsloggedin] = useState(false)

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            email: localStorage.getItem('email') || "",
            rememberMe: localStorage.getItem('rememberMe') || false
        }
    })

    const responseFacebook = response => {
        fetch("/users/login/facebook/auth", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(response)
        })
        .then(response => response.json())
        .then(res => {
            if(!res.isAuth){
                setAccountMessage(res.info)
            } else {
                setUserStorage(res.token, res.user);
                setIsloggedin(true);
            }
        })
        .catch(err => console.log(err));
    }

    const FacebookLoginCTA = () => {
        console.log("clicked")
    }

    const onSubmit = data => {
    // if(data.rememberMe) {
    //     localStorage.setItem("email", data.email);
    //     localStorage.setItem("rememberMe", data.rememberMe);
    // } else {
    //     localStorage.removeItem("email");
    //     localStorage.removeItem("rememberMe");
    // }
    // console.log(data)
        fetch("/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(res => {
            if(!res.isAuth){
                setAccountMessage(res.info)
            } else {
                setUserStorage(res.token, res.user);
                setIsloggedin(true);
            }
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        if (message) {
            setAccountMessage(message.message)
        }
    
    }, [message])
    return (
        <>
        {!isloggedin ? 
            <Row className="m-0 bg-light">
                <Col md={5} className="loginWrapper">
                    <Row id="loginContainer" className="shadow row d-flex flex-column m-auto bg-white border-white rounded pl-3 pr-3 pt-4 pb-4 m-0">
                        <Col className="mb-3">
                            <h2 className="text-center m-auto">Login</h2>
                            {accountMessage && <p className={`${!accountMessage.isConfirm ? "text-danger" : "text-success"} text-center mb-0 mt-2`}>{accountMessage.message}</p>} 
                        </Col>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group style={{marginBottom: "0.3rem"}} controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className={errors.email && "is-invalid"} name="email" type="text" placeholder="Enter email" ref={register({required: true})}></Form.Control>
                                {errors.email && <small className="text-danger">Please choose a email.</small>}
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className={errors.password && "is-invalid"} name="password" type="password" placeholder="Enter password" ref={register({required: true})}></Form.Control>
                                {errors.password && <small className="text-danger">Please enter a password.</small>}
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check 
                                        ref={register}
                                        name="rememberMe" 
                                        type="checkbox" 
                                        label="Remember me ?" />
                                    </Form.Group>
                                </Col>
                                <Col><p className="text-right">Forgot password ?</p></Col>
                            </Form.Row>
                            <Button className="loginCta border-0" type="submit" block>Login</Button>
                            <Row>
                                <Col><hr></hr></Col>
                                <p className="text-center mb-0">or</p>
                                <Col><hr></hr></Col>
                            </Row>
                            <FacebookLoginButton FacebookLoginCTA={FacebookLoginCTA} responseFacebook={responseFacebook} />
                        </Form>
                        <Col>
                            <p className="text-center mb-0">Don't have an account? <Link to="/users/signup">Sign up</Link></p>
                        </Col>
                    </Row>
                </Col>
            </Row> :
            <Redirect to="/dashboard" /> 
        }
        </>
    )
}

export default Login;