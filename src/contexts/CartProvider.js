import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { cart, updateLocalStorage, removeProduct, getLocalStorage } = useLocalStorage();

    return <CartContext.Provider value={{ cart, updateLocalStorage, removeProduct, getLocalStorage }}>
        {children}
    </CartContext.Provider>
}
export default CartProvider;