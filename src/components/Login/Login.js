import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebookSquare } from 'react-icons/fa';
import './login.css';

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            <h1 className="text-center my-3">Login</h1>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleFormSubmit} className="form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Button className="form-control" variant="success" type="submit">
                            Login
                        </Button>
                        <Button className="d-flex align-items-center justify-content-center my-2 form-control" variant="dark" type="submit">
                            <FaGoogle className="me-2" /> Google
                        </Button>
                        <Button className="d-flex align-items-center justify-content-center my-2 form-control" variant="primary" type="submit">
                            <FaFacebookSquare className="me-2" /> Facebook
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
