import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";

const useProducts = () => {
    return useContext(ProductsContext)
}

export default useProducts;