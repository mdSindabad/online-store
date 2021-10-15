import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/">Online<span className="bg-warning px-1 text-dark rounded">Store</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    < Nav className="ms-auto" >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/cart" className='cart'>
                            <FaShoppingCart className="fs-4" />
                            <Badge bg='danger' className='badge'>1</Badge>
                        </Nav.Link>
                    </Nav >
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default Header;
