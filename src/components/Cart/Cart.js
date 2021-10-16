import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';
import './cart.css';

const Cart = () => {
    // cart context 
    const { cart, removeProduct } = useCart();

    // local state
    const [localCart, setLocalCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const setTotal = () => {
        const total = cart?.reduce((sum, product) => {
            const price = product.count * product.price;
            return sum + price
        }, 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        setLocalCart(cart);
        setTotal()
    }, [cart])

    return (
        <Container>
            <h1>Cart</h1>
            {
                <Row>
                    <Col xs={12} md={8} className="cart-items">
                        {
                            !localCart.length ? <Alert variant='warning'>No products in the cart</Alert> :
                                localCart?.map(product => {
                                    return <CartItem key={product.id} data={product} removeProduct={removeProduct} />
                                })
                        }
                    </Col>
                    <Col className='cart-total text-center' xs={12} md={4}>
                        <h3>Cart Total</h3>
                        <div className='d-flex justify-content-between px-5'>
                            <p>SubTotal:</p>
                            <p className='fw-bold'>$ {totalPrice}</p>
                        </div>
                        <div className='d-flex justify-content-between px-5'>
                            <p>Delivery:</p>
                            <p className='fw-bold'>free</p>
                        </div>
                        <div className='d-flex justify-content-between px-5'>
                            <p>Total:</p>
                            <p className='fw-bold'>$ {totalPrice}</p>
                        </div>
                        <Button className={!localCart.length && "disabled"} variant='primary'>Proceed to checkout</Button>
                    </Col>
                </Row>
            }
        </Container >
    )
}

export default Cart;
