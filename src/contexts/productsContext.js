import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const initialState = {
        isLoading: true,
        products: [],
        error: ''
    };

    const [states, setStates] = useState(initialState);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setStates({
                    isLoading: false,
                    products: response.data,
                    error: ''
                })
            })
            .catch(err => {
                setStates({
                    isLoading: false,
                    products: [],
                    error: err
                })
            })
    }, []);

    return (
        <ProductsContext.Provider value={states}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;