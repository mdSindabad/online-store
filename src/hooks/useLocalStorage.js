
const useLocalStorage = () => {

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
    }

    return {
        getLocalStorage,
        removeProduct,
        updateLocalStorage
    }
}
export default useLocalStorage;