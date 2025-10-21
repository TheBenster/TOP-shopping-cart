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
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-sky-500 border-t-transparent"></div>
                    <p className="mt-4 text-xl text-gray-600 font-semibold">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <CategoryBar onCategoryClick={handleCategoryClick} />
            <div className="max-w-7xl mx-auto px-8 py-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` : 'All Products'}
                </h2>
                <div id="products" className="flex flex-wrap justify-center gap-8">
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
            </div>
        </div>
    );
};

export default ShopLayout;