import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebookSquare } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import './login.css';

const Login = () => {
    // local state
    const initialUserInput = {
        name: "",
        email: "",
        password: ""
    };

    const [userInput, setUserInput] = useState(initialUserInput);
    const [newUser, setNewUser] = useState(false);

    // console.log(userInput);

    // auth context
    const { user, signInWithGoogle, registerWithEmail, loginWithEmail } = useAuth();
    // console.log(user)

    // register or login with email
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = userInput;
        if (newUser) {
            registerWithEmail(name, email, password)
            console.log("registering new user.")
        } else {
            loginWithEmail(email, password)
            console.log("logging in existing user.")
        }
    };

    // checkbox handler
    const handleCheckbox = (e) => {
        setNewUser(prevState => !prevState);
    };

    // user login/ registeration input handler
    const handleChange = (e) => {
        setUserInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }))
    };

    return (
        <Container>
            <h1 className="text-center my-3">{newUser ? "Register" : "Login"}</h1>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleFormSubmit} className="form">
                        {
                            newUser &&
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter name" onChange={handleChange} value={userInput.name} />
                            </Form.Group>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} value={userInput.email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter password" onChange={handleChange} value={userInput.password} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={handleCheckbox} type="checkbox" label="New User?" />
                        </Form.Group>
                        <Button className="form-control" variant={newUser ? "dark" : "success"} type="submit">
                            {newUser ? "Register" : "Login"}
                        </Button>
                        <Button onClick={signInWithGoogle} className="d-flex align-items-center justify-content-center my-2 form-control" variant="secondary" type="submit">
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
