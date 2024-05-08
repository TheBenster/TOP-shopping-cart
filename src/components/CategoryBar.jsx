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
        <div className=" flex justify-between border-t-2 border-b-2 p-3">
            <hr className=" " />
            {categories.map((category) => (
                <p
                    onClick={() => handleClick(category)}
                    key={category}
                    className={`hover:text-sky-900  hover:cursor-pointer ${
                        selectedCategory === category ? "text-sky-900 font-bold" : ""
                    }`}
                >
                    {category}
                </p>
            ))}
            <hr />
        </div>
    );
};

export default CategoryBar;