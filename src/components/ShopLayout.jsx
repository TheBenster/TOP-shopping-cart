import CategoryBar from "./CategoryBar";
import ProductCard from "./ProductCard";
import { Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductModal from "./ProductModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShopLayout =  () => {
    const shopURL = 'https://fakestoreapi.com/products';
    const productJSON = useFetch(shopURL)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productId, setProductId] = useState(null);

  const handleProductClick = (product) => {
    setProductId(product.id)
  };


    return (
        <>
            <CategoryBar />
            <div id="products" className="p-10 flex flex-wrap justify-center gap-10">
                {productJSON.data.map((product) => <ProductCard key={product.id} title={product.title} image={product.image} productId={product.id} price={product.price}/>)}
            </div>
        </>
    )
    
}
export default ShopLayout