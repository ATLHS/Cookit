import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import signupImg from '../images/signupimg.jpg';
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import '../css/Signup.css';

const Signup = () => {
    const [data, setData] = useState();
    const [show, setShow] = useState(false);
    const [signUpStatus, setSignUpStatus] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, e) => {
        fetch("/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            setSignUpStatus(response);
            setShow(true);
            e.target.reset();
        })
        .catch(err => console.log(err))
    };
    
    return (
        <Row className="m-0">
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w">
                <Alert className="m-0" variant={!signUpStatus.isRegister ? "danger" : "success"}>{signUpStatus && signUpStatus.message}.</Alert>
            </Modal>
            <Col md={12} className="p-0 signupContainer">
                <Image className="signupimg" src={signupImg}/>
                <Col xs={11} md={6} className="bg-white d-flex justify-content-center align-items-center formWrapper">
                    <Row className="d-flex justify-content-center align-content-center">
                        <Col md={7} className="mb-1">
                            <h2 className="display-4 text-center welcome">Welcome</h2>
                            <p className="text-center text-muted">Farm-fresh ingredients and delicious recipes delivered weekly to your home.</p>
                        </Col>
                        <Row className="m-auto text-center d-flex justify-content-center signupinfo">
                            <Col md={4}>
                                <Row>
                                    <Col className="d-flex align-items-center">
                                        <span className="fa-stack"><i className="fa fa-circle-o fa-stack-2x"></i><strong className="fa-stack-1x">1</strong></span>
                                        <h4 className="text-left signupH4">Choose your Meals</h4>
                                    </Col>
                                </Row>
                                <p className="text-justify howItWork">Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners, and top-rated customer favorites.</p>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col className="d-flex align-items-center">
                                        <span className="fa-stack"><i className="fa fa-circle-o fa-stack-2x"></i><strong className="fa-stack-1x">2</strong></span>
                                        <h4 className="text-left signupH4">Unpack your box</h4>
                                    </Col>
                                </Row>
                                <p className="text-justify howItWork">We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door.</p>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col className="d-flex align-items-center">
                                        <span className="fa-stack"><i className="fa fa-circle-o fa-stack-2x"></i><strong className="fa-stack-1x">3</strong></span>
                                        <h4 className="text-left signupH4">Create Magic</h4>
                                    </Col>
                                </Row>
                                <p className="text-justify howItWork">Following our step-by-step instructions you'll experience the magic of cooking recipes that our chefs create with your family's tastes in mind.</p>
                            </Col>
                        </Row>
                        <Col md={12}>
                            <Row className="m-auto d-flex justify-content-center">
                                <h2 className="display-4 text-center welcome">Get started</h2>
                            </Row>
                            <Row>
                                <Form className="signupForm m-auto" onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Row>
                                        <Form.Group className="formGroupeName" md={6} xs={12} as={Col} controlId="formBasicName">
                                            <Form.Label className="signupLabel">Name</Form.Label>
                                            <Form.Control className={errors.name && "is-invalid"} type="text" name="name" ref={register({ required: true, validate: (value) => value.trim() !== "" })} ></Form.Control>
                                            <small className="text-danger">{errors.name && "Name is required."}</small>
                                        </Form.Group>
                                        <Form.Group className="formGroupeEmail"  md={6} xs={12} as={Col} controlId="formBasicEmail">
                                            <Form.Label className="signupLabel">Email</Form.Label>
                                            <Form.Control className={errors.email && "is-invalid"} type="email" name="email" ref={register({ required: true })}></Form.Control>
                                            <small className="text-danger">{errors.email && "Email is required."}</small>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group className="formGroupePassword" md={6} xs={12} as={Col} controlId="formBasicPassword">
                                            <Form.Label className="w-100 d-flex justify-content-between signupLabel">
                                                <span>Password</span>
                                                <Form.Text className="text-muted">at least 8 characteres.</Form.Text>
                                            </Form.Label>
                                            <Form.Control className={errors.password && "is-invalid"} type="text" name="password" ref={register({required: true, minLength: 8, validate: (value) => value.trim() !== ""})}></Form.Control>
                                            {errors.password && errors.password.type === "required" && <small className="text-danger">Password is required.</small>}
                                            {errors.password && errors.password.type === "minLength" && <small className="text-danger">Password must be at least 8 characteres.</small>}
                                            {errors.password && errors.password.type === "validate" && <small className="text-danger">Password can not be empty.</small>}
                                        </Form.Group>
                                        <Form.Group className="formGroupeConfirmPassword" md={6} xs={12} as={Col} controlId="formBasicConfirmPassword">
                                            <Form.Label className="signupLabel">confirme password</Form.Label>
                                            <Form.Control className={errors.confirmedPassword && "is-invalid"} type="password" name="confirmedPassword" ref={register({validate: (value) => value === watch('password')})}></Form.Control>
                                            <small className="text-danger">{errors.confirmedPassword && "Password must match."}</small>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group>
                                        <Form.Check
                                        name="termsandconditions"
                                        ref={register({ required: true })}
                                        label={errors.termsandconditions ?  <small className="text-danger">You must agree before submitting.</small> : "Agree to terms and conditions"}
                                        />
                                    </Form.Group>
                                    <Button className="signupCTA mt-2" type="submit" block>Cookit now</Button>
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Row>       
    )
}

export default Signup;