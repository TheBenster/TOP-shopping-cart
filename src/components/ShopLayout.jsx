import CategoryBar from "./CategoryBar";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";

const ShopLayout = () => {
    const shopURL = 'https://fakestoreapi.com/products';
    const productJSON = useFetch(shopURL);
    const products = productJSON.data;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (products) {
            setFilteredProducts(products);
            setIsLoading(false);
        }
    }, [products]);

    const handleCategoryClick = (category) => {
        // if selectedCategory is clicked again, untoggle, else toggle
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setFilteredProducts(products);
        } else {
            setSelectedCategory(category);
            const filtered = products.filter((product) =>
                product.category.includes(category)
            );
            setFilteredProducts(filtered);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <CategoryBar onCategoryClick={handleCategoryClick} />
            <div id="products" className="p-10 flex flex-wrap justify-center gap-10">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        productId={product.id}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </div>
        </>
    );
};

export default ShopLayout;