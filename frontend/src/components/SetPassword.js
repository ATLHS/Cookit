import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';


const SetPassword = () => {
    let location = useLocation();
    const {token} = location.state;
    const [message, setMessage] = useState({isReset: false, message: ""});
    const { register, handleSubmit, watch, errors } = useForm();
    
    const setPassword = value => {
        fetch(`/users/set_password/?token=${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        })
        .then(response => response.json())
        .then(res => setMessage({isReset: res.isReset, message: res.message}))
        .catch(err => console.log(err));
    }
    return (
        <>
            {!message.isReset ?
                <Row className="m-0 bg-light">
                    <Col md={5} className="loginWrapper">
                        <Row id="loginContainer" className="shadow row d-flex flex-column m-auto bg-white border-white rounded pl-3 pr-3 pt-4 pb-4 m-0">
                            <Col className="mb-3">
                                <h3 className="text-center m-auto" style={{fontSize: "1.5rem"}}>Reset your password</h3>
                            </Col>
                            <Form onSubmit={handleSubmit(setPassword)}>
                                <Form.Control name="token" type="hidden" value={token} ref={register}></Form.Control>
                                <Form.Group style={{marginBottom: "0.3rem"}} controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className={errors.email && "is-invalid"} name="password" type="text"  ref={register({required: true, minLength: 8, validate: (value) => value.trim() !== ""})}></Form.Control>
                                    {errors.password && errors.password.type === "required" && <small className="text-danger">Password is required.</small>}
                                    {errors.password && errors.password.type === "minLength" && <small className="text-danger">Password must be at least 8 characteres.</small>}
                                    {errors.password && errors.password.type === "validate" && <small className="text-danger">Password can not be empty.</small>}
                                </Form.Group>
                                <Form.Group controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm your password</Form.Label>
                                    <Form.Control className={errors.confirmPassword && "is-invalid"} name="confirmPassword" type="password" ref={register({validate: (value) => value === watch('password')})}></Form.Control>
                                    {errors.confirmPassword && <small className="text-danger">Password must match.</small>}
                                </Form.Group>
                                <Button className="loginCta border-0" type="submit" block>Send</Button>
                            </Form>
                        </Row>
                    </Col>
                </Row> 
                : 
                <Redirect to={{ pathname:"/users/login", state: message }} />
            }
        </>
    )
}

export default SetPassword;