import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import Loader from '../../utilities/Loader';
import './cart.css';

const Cart = () => {
    // cart custom hook
    const { removeProduct, cartProducts } = useCart();
    console.log(cartProducts);

    // local state
    const initialState = {
        isLoading: true,
        products: []
    }
    const [state, setState] = useState({});

    useEffect(async () => {
        setState({
            isLoading: false,
            products: await cartProducts
        });
    }, [cartProducts]);

    const { isLoading, products } = state;

    return (
        <Container>
            <h1>Cart</h1>
            <Row>
                <Col xs={12} md={8}>
                    {
                        isLoading ? <Loader /> :
                            !products ? <Alert variant='warning'>No products in the cart</Alert> :
                                products?.map(product => {
                                    return <div key={product.id} className='cart-item'>
                                        <h3>{product?.title}</h3>
                                        <p>${product?.price}</p>
                                        <Button onClick={() => removeProduct(product.id)} variant='danger'>Remove</Button>
                                    </div>
                                })
                    }
                </Col>
                <Col className='cart-total text-center' xs={12} md={4}>
                    <h3>Cart Total</h3>
                    <div className='d-flex justify-content-between px-5'>
                        <p>SubTotal:</p>
                        <p className='fw-bold'>$100</p>
                    </div>
                    <div className='d-flex justify-content-between px-5'>
                        <p>Delivery:</p>
                        <p className='fw-bold'>free</p>
                    </div>
                    <div className='d-flex justify-content-between px-5'>
                        <p>Total:</p>
                        <p className='fw-bold'>$100</p>
                    </div>
                    <Button variant='primary'>Proceed to checkout</Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Cart;
