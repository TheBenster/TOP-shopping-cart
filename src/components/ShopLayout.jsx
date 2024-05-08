import CategoryBar from "./CategoryBar";
import ProductCard from "./ProductCard";
import { Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShopLayout =  ({newFilter}) => {
    const shopURL = 'https://fakestoreapi.com/products';
    const productJSON = useFetch(shopURL)
    const [selectedFilters, setSelectedFilters] = useState([]);
   

    const handleFilters = () =>{
      setSelectedFilters(selectedFilters);
      
    }
    console.log(newFilter)

  const handleProductClick = (product) => {
    setProductId(product.id)
  };

  const handleClick = () => {
    alert(newFilter)
  }


    return (
        <>
            <CategoryBar />
            <div id="products" className="p-10 flex flex-wrap justify-center gap-10">
                {productJSON.data.map((product) => <ProductCard  key={product.id} title={product.title} image={product.image} productId={product.id} price={product.price} description={product.description}/>)}
            </div>
        </>
    )
    
}
export default ShopLayout