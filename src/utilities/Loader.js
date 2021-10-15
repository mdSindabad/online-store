import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner className="mt-5" animation="border" variant="danger" />
    )
}

export default Loader;
