import useFetch from "../hooks/useFetch";
import { useState } from "react";

const CategoryBar = ({ onCategoryClick }) => {
    const categoryURL = "https://fakestoreapi.com/products/categories";
    const categoryJSON = useFetch(categoryURL);
    const categories = categoryJSON.data;
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
        onCategoryClick(category);
    };

    return (
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            onClick={() => handleClick(category)}
                            key={category}
                            className={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 transform hover:scale-105 ${
                                selectedCategory === category
                                    ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-sky-600"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryBar;