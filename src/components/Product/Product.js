import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = (props) => {
    console.log(props)
    return (
        <Col md={4} xs={12} className="mt-3">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Product;
