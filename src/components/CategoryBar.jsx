import useFetch from "../hooks/useFetch";
import { useEffect, useState } from 'react';


const CategoryBar = () => {
    const categoryURL = 'https://fakestoreapi.com/products/categories';
    const categoryJSON = useFetch(categoryURL);
    const categories = categoryJSON.data;
    const [selectedFilters, setSelectedFilters] =useState([])

    const handleClick = (e) => {
        const clickedCategory = e.target.textContent;
        if(!selectedFilters.includes(clickedCategory)){
            setSelectedFilters((prevFilters) => {
                const newFilter = [...prevFilters, clickedCategory];
                console.log('array items: ' + newFilter);
                
                return newFilter
            })           
        }
    }
    

    return (
        <div className=" flex justify-between border-t-2 border-b-2 p-3">
            <hr className=" " />
            {categories.map((category) => <p onClick={handleClick} key={category.id} className=" hover:text-sky-900 hover:cursor-pointer ">{category}</p>)}
            <hr/>
        </div>
    )


}

export default CategoryBar