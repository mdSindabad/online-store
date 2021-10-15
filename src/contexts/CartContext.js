import { createContext, useState } from "react";
import useProducts from "../hooks/useProducts";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // local state
    const [cartProducts, setCartProducts] = useState([]);
    const [cartItems, setCartItems] = useState(0);

    // products from products context
    const { products } = useProducts();


    const getLocalCart = () => {
        const localCart = JSON.parse(localStorage.getItem('productCart'));
        if (!localCart) {
            return;
        } else {
            // console.log(localCart)
            return localCart;
        }
    };

    const setLocalCart = (productId, count) => {
        const localCart = getLocalCart();
        let preSavedCart = [];

        if (!localCart) {
            // temporary cart
            preSavedCart.push({ [productId]: count });
            // save cart to local storage
            localStorage.setItem("productCart", JSON.stringify(preSavedCart));
        } else {
            // filter out current product
            const productInCart = localCart.filter(product => Object.keys(product)[0] !== productId);
            // cart to be stored
            preSavedCart = [...productInCart, { [productId]: count }]
            // save cart to local storage
            localStorage.setItem("productCart", JSON.stringify(preSavedCart));
        }
        // update no of cartItems
        setCartItems(preSavedCart.length);
        // update cart actual products
        getCartProducts();
    }

    const updateCart = (productId, count) => {
        setLocalCart(productId, count)
    };

    const getCartProducts = (productId) => {
        const localCart = getLocalCart();
        if (!localCart) {
            return
        } else {
            const productsKeys = localCart.filter(product => Object.keys(product)[0]);
            const productsList = [];
            productsKeys.forEach(prod => {
                const id = Object.keys(prod)[0];
                const eachProduct = products.filter(product => product.id == id)[0];
                productsList.push(eachProduct)
            });
            setCartProducts(productsList)
        }
    };

    return <CartContext.Provider value={{ cartItems, cartProducts, updateCart }}>
        {children}
    </CartContext.Provider>
}
export default CartProvider;