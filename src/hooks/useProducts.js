import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const useProducts = () => {
    return useContext(ProductsContext)
}

export default useProducts;