import useFetch from "../hooks/useFetch";

const CategoryBar = () => {
    const categoryURL = 'https://fakestoreapi.com/products/categories'
    const categoryJSON = useFetch(categoryURL)
    const categories = categoryJSON.data

    return (
        <div className=" flex justify-between border-t-2 border-b-2 p-3">
            <hr className=" " />
            {categories.map((category) => <p key={category.id} className=" hover:text-sky-900 hover:cursor-pointer">{category}</p>)}
            <hr/>
        </div>
    )


}

export default CategoryBar