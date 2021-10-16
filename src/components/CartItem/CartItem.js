import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './cartItem.css';

const CartItem = ({ data, removeProduct }) => {
    const { id, title, image, price, count } = data;
    return (
        <div className='cart-item'>
            <Row className="d-flex">
                <Col xs={2} >
                    <img src={image} alt={title} />
                </Col>
                <Col xs={10}>
                    <h5>{title}</h5>
                    <div className="d-flex justify-content-between me-5">
                        <p className="fw-bold text-danger">Price: ${price}</p>
                        <p className="fw-bold">Quantity: {count}</p>
                    </div>
                    <Button onClick={() => removeProduct(id)} variant='warning'>Remove</Button>
                </Col>
            </Row>
        </div>
    )
}

export default CartItem
