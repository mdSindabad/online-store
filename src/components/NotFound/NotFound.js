import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();

    const goHome = () => {
        history.push('/')
    };

    return (
        <div className="text-center mt-5">
            <h1 className="fs-2 fw-bold text-danger">404</h1>
            <p>Oops, sorry we can't find that page!</p>
            <Button onClick={goHome} variant="primary">Back to home page</Button>
        </div>
    )
}

export default NotFound;
