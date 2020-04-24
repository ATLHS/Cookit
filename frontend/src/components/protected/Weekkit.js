import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getUser } from "../utils/Auth";

const Weekkit = () => {
    const user = getUser();
    return (
        <>
            <Row className="m-0">
                <Col>
                    <p>Hi {user.email} !</p>
                </Col>
            </Row>
        </>
    )
}

export default Weekkit;