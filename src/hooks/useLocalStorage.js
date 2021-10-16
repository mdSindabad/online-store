import { useEffect, useState } from "react";
import useProducts from "./useProducts";

const useLocalStorage = () => {
    // product context
    const { products } = useProducts();

    // local state
    const [cart, setCart] = useState([]);

    // get cart from local storage
    const getLocalStorage = () => {
        return JSON.parse(localStorage.getItem('productsCart'));
    };

    // set cart to local storage
    const setLocalStorage = (productId, count) => {
        const prevCartList = getLocalStorage();
        // check if product is already in the cart
        const productExist = prevCartList?.find(product => product?.id == productId);

        let newCartList = [];

        if (!prevCartList) {
            newCartList = [{ id: productId, count: count }];
            localStorage.setItem('productsCart', JSON.stringify(newCartList));
        } else {
            if (productExist) {
                newCartList = prevCartList.map(product => {
                    if (product.id == productId) {
                        product.count = count
                        return product;
                    } else {
                        return product;
                    }
                });
                localStorage.setItem('productsCart', JSON.stringify(newCartList));
            } else {
                newCartList = [...prevCartList, { id: productId, count: count }];
                localStorage.setItem('productsCart', JSON.stringify(newCartList));
            }
        }
        setActualProduct(newCartList);
    };

    // update cart in local storage
    const updateLocalStorage = (productId, count) => {
        setLocalStorage(productId, count);
    };

    // remove product from cart and update local storage
    const removeProduct = (productId) => {
        const prevCartList = getLocalStorage();
        const newCartList = prevCartList.filter(product => product.id != productId);
        localStorage.setItem('productsCart', JSON.stringify(newCartList));
        setActualProduct(newCartList);
    };

    // set actual product
    const setActualProduct = (localStorageCart) => {
        const actualCartProducts = [];
        // get actual from products by filtering cart products id
        localStorageCart?.forEach(item => {
            products?.forEach(product => {
                if (item.id == product.id) {
                    actualCartProducts.push({ ...product, count: item.count })
                }
            })
        })
        setCart(actualCartProducts);

    }

    useEffect(() => {
        const localStorageCart = getLocalStorage()
        setActualProduct(localStorageCart)
    }, [products])

    return {
        cart,
        updateLocalStorage,
        removeProduct,
        getLocalStorage
    }
}
export default useLocalStorage;