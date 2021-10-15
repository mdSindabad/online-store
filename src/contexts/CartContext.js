import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useProducts from "../hooks/useProducts";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // local storage hook
    const { getLocalStorage } = useLocalStorage();
    console.log(getLocalStorage())
    // // local state
    // const [cartProducts, setCartProducts] = useState([]);
    // const [cartItems, setCartItems] = useState(0);

    // // products from products context
    // const { products } = useProducts();

    // // get cart id list from local storage
    // const getLocalCart = () => {
    //     const localCart = JSON.parse(localStorage.getItem('productCart'));
    //     if (!localCart) {
    //         return;
    //     } else {
    //         return localCart;
    //     }
    // };

    // // set local storage
    // const setLocalCart = (localCart, productId, count = 1) => {
    //     let preSavedCart = [];
    //     if (!localCart) {
    //         // temporary cart
    //         preSavedCart.push({ [productId]: count });
    //         // save cart to local storage
    //         localStorage.setItem("productCart", JSON.stringify(preSavedCart));
    //     } else {
    //         // filter out current product
    //         const productInCart = localCart.filter(product => Object.keys(product)[0] !== productId);
    //         // cart to be stored
    //         preSavedCart = [...productInCart, { [productId]: count }]
    //         // save cart to local storage
    //         localStorage.setItem("productCart", JSON.stringify(preSavedCart));
    //     }
    //     // update no of cartItems
    //     setCartItems(preSavedCart.length);
    //     // update cart actual products
    //     getCartProducts(localCart);
    // }

    // // remove product from cart
    // const removeProduct = (productId) => {
    //     const localCart = getLocalCart();
    //     const newCartList = [];
    //     localCart.forEach(product => {
    //         const id = Object.keys(product)[0];
    //         if (id == productId) {
    //             return
    //         } else {
    //             newCartList.push(product)
    //         }
    //     })
    //     localStorage.setItem('productCart', JSON.stringify(newCartList));
    //     // update no of cartItems
    //     setCartItems(newCartList.length);
    //     // update cart actual products
    //     getCartProducts(localCart);
    // }

    // // update cart in local storage
    // const updateCart = (productId, count) => {
    //     const localCart = getLocalCart();
    //     setLocalCart(localCart, productId, count)
    // };

    // // get actual cart product
    // const getCartProducts = (localCart) => {
    //     let cartProducts = [];
    //     if (!localCart) {
    //         return
    //     } else {
    //         const productsKeys = localCart.filter(product => Object.keys(product)[0]);
    //         const productsList = [];
    //         productsKeys.forEach(async (prod) => {
    //             const id = Object.keys(prod)[0];
    //             const eachProduct = await products.filter(product => product.id == id)[0];
    //             cartProducts.push({ ...eachProduct, count: prod[id] })
    //         });
    //     }
    //     setCartProducts(cartProducts);
    // };

    // useEffect(() => {
    //     const localCart = getLocalCart();
    //     // update no of cartItems
    //     setCartItems(localCart?.length || 0);
    //     // setting actual cart products
    //     getCartProducts(localCart);
    // }, [])

    return <CartContext.Provider value='{{ removeProduct, cartItems, updateCart, cartProducts }}'>
        {children}
    </CartContext.Provider>
}
export default CartProvider;