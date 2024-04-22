const ProductCard = ({name, hexValue}) => {
    return (
        <div className=" border-x-indigo-950 border rounded ">
            <p className="font-bold">{name}</p>
        </div>
    )
}

export default ProductCard;