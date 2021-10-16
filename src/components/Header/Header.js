import React, { useEffect, useState } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './header.css';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    // local state
    const [count, setCount] = useState(0);

    // cart context 
    const { cart, getLocalStorage } = useCart();

    // auth context
    const { user, logOut } = useAuth();

    useEffect(() => {
        const cartItems = getLocalStorage();
        setCount(cartItems?.length || 0)
    }, [cart])


    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/">Online<span className="bg-warning px-1 text-dark rounded">Store</span></Navbar.Brand>
                {
                    user?.displayName && <p className="userName text-primary">{user?.displayName.split(" ")[1]}</p>
                }

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    < Nav className="ms-auto" >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/cart" className='cart'>
                            <FaShoppingCart className="fs-4" />
                            <Badge bg='danger' className='badge'>{count}</Badge>
                        </Nav.Link>
                        {
                            user.email ?
                                <>
                                    {
                                        user.photoURL &&
                                        <img style={{ width: "35px", height: "35px" }} className="ms-4 rounded-circle" src={user.photoURL} alt={user.displayName} />
                                    }
                                    <Nav.Link onClick={logOut} className="logout">Logout</Nav.Link>
                                </> :
                                <Nav.Link className="login" as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav >
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default Header;
