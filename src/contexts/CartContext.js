import { createContext, useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    // products hook
    const { products } = useProducts();

    // // local state
    const [cartProducts, setCartProducts] = useState([]);

    // get cart from local storage
    const getLocalStorage = () => {
        return JSON.parse(localStorage.getItem('productsCart'));
    };

    // set cart to local storage
    const setLocalStorage = (productId, count) => {
        const prevCartList = getLocalStorage();
        // check if product is already in the cart
        const productExist = prevCartList?.find(product => product?.id == productId);

        if (!prevCartList) {
            const newCartList = [{ id: productId, count: count }];
            localStorage.setItem('productsCart', JSON.stringify(newCartList));
        } else {
            if (productExist) {
                const newCartList = prevCartList.map(product => {
                    if (product.id == productId) {
                        product.count = count
                        return product;
                    } else {
                        return product;
                    }
                });
                localStorage.setItem('productsCart', JSON.stringify(newCartList));
            } else {
                const newCartList = [...prevCartList, { id: productId, count: count }];
                localStorage.setItem('productsCart', JSON.stringify(newCartList));
            }
        }
        setActualProduct()
    };

    // update cart in local storage
    const updateLocalStorage = (productId, count) => {
        setLocalStorage(productId, count)
    };

    // remove product from cart and update local storage
    const removeProduct = (productId) => {
        const prevCartList = getLocalStorage();
        const newCartList = prevCartList.filter(product => product.id != productId);
        localStorage.setItem('productsCart', JSON.stringify(newCartList));
        setActualProduct()
    }
    // set actual product
    const setActualProduct = () => {
        const localStorageCart = getLocalStorage();
        const actualCartProducts = [];

        // get actual from products by filtering cart products id
        localStorageCart.forEach(item => {
            products.forEach(product => {
                if (item.id == product.id) {
                    actualCartProducts.push(product)
                }
            })
        })
        setCartProducts(actualCartProducts);
    }

    useEffect(() => {
        setActualProduct()
    }, [])

    return <CartContext.Provider value={{ cartProducts, removeProduct, updateLocalStorage, setActualProduct }}>
        {children}
    </CartContext.Provider>
}
export default CartProvider;