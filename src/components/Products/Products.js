import React from 'react';
import { Alert, Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
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
                        <Alert className="mt-5" variant='danger'>
                            Sorry, Something went wrong!
                        </Alert> :
                        isLoading ? <Spinner className="mt-5" animation="border" variant="danger" /> :
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
