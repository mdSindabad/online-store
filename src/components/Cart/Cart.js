import React from 'react';
import useCart from '../../hooks/useCart';

const Cart = () => {
    // cart custom hook
    const { cartProducts } = useCart();

    console.log(cartProducts)
    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default Cart;
