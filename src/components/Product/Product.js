import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './product.css';


const Product = ({ data }) => {
    const history = useHistory();

    const { id, image, title, category, price, rating } = data;

    const goToDetails = () => {
        history.push(`/details/${id}`);
    };

    return (
        <Col md={4} xs={12} className="mt-3" onClick={goToDetails} >
            <Card className="product">
                <Card.Img className="img" variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="title">{title}</Card.Title>
                    <Card.Text className="">
                        <div className="text-center text-primary">
                            <span className="text-capitalize">{category}</span>
                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <span className="fs-6 fw-bold">Rating: {rating.rate}</span>
                            <span className="fs-5 fw-bold text-danger">${price}</span>
                        </div>
                        {/* <p>{description}</p> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Product;
