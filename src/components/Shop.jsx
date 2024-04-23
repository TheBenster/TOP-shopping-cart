import useFetch from "../hooks/useFetch";

const Shop = () => {
    const shopURL = 'https://fakestoreapi.com/products';
    const productJSON = useFetch(shopURL)
    const productNames = productJSON.data.map((product) => product.title);

    return (
        <>
            {productNames}
        </>
    )
}

export default Shop