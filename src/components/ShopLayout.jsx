import CategoryBar from "./CategoryBar";
import ProductCard from "./ProductCard";
import { Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ShopLayout =  () => {
    const shopURL = 'https://fakestoreapi.com/products';
    const productJSON = useFetch(shopURL)

    return (
        <>
            <CategoryBar />
            <div id="products" className="p-10 flex flex-wrap gap-10">
                {productJSON.data.map((product) => <ProductCard />)}
                
            </div>
        </>
    )
    
}
export default ShopLayout