import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Error from '../../utilities/Error';
import Loader from '../../utilities/Loader';
import Product from '../Product/Product';
import './products.css';

const Products = () => {
    const { isLoading, products, error } = useProducts();

    return (
        <section className="products">
            <h1 className='text-center mt-1'>Products</h1>
            <Container className="d-flex justify-content-center">
                {
                    error ?
                        <Error /> :
                        isLoading ? <Loader /> :
                            <Row>
                                {products.map(product => {
                                    return <Product key={product.id} data={product} />
                                })}
                            </Row>
                }
            </Container>
        </section>
    )
}

export default Products;
