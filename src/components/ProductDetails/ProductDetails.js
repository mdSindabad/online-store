import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Error from '../../utilities/Error';
import Loader from '../../utilities/Loader';
import './productDetails.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductDetails = () => {
    // router hook
    const { productId } = useParams();

    const initialState = {
        isLoading: true,
        product: {},
        error: ''
    };
    // local state
    const [state, setState] = useState(initialState);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setState({
                    isLoading: false,
                    product: response.data,
                    error: ''
                })
            })
            .catch(error => {
                setState({
                    isLoading: false,
                    product: {},
                    error: error
                })
            })
    }, []);

    const { isLoading, product, error } = state;
    const { id, image, title, description, category, price, rating } = product;

    return (
        <Container className="d-flex justify-content-center py-3 details">
            {
                error ?
                    <Error /> :
                    isLoading ? <Loader /> :
                        <Row>
                            <Col xs={12} md={5} className='mb-3 ms-auto' >
                                <img src={image} alt={title} />
                            </Col>
                            <Col xs={12} md={7}>
                                <h1 className='my-3'>{title}</h1>
                                <p>{description}</p>
                                <div className="my-3 d-flex justify-content-between">
                                    <h3>${price}</h3>
                                    <div className="d-flex buttonGroup">
                                        <Button variant="secondary"><FaMinus /></Button>
                                        <p className="count">1</p>
                                        <Button variant="secondary"><FaPlus /></Button>
                                    </div>
                                </div>
                                <Button variant="success">Add to cart</Button>
                            </Col>
                        </Row>
            }
        </Container >
    )
}

export default ProductDetails;
