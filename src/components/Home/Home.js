import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Error from '../../utilities/Error';
import Loader from '../../utilities/Loader';
import Product from '../Product/Product';
import ImageSlider from '../Slider/ImageSlider';

const Home = () => {
    const { isLoading, products, error } = useProducts();
    return (
        <div className="pb-3">
            <ImageSlider />
            <h2 className="ms-3">Our Top Products</h2>
            <Container className="d-flex justify-content-center">
                {
                    error ?
                        <Error /> :
                        isLoading ? <Loader /> :
                            <Row>
                                {products.slice(0, 6).map(product => {
                                    return <Product key={product.id} data={product} />
                                })}
                            </Row>
                }
            </Container>
        </div>
    )
}

export default Home;
