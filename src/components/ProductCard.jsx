import { Link } from 'react-router-dom'
import Product from './Product'

const ProductCard = ({title, description, price, image, productId, handleAddToCart}) => {

    
    return (
        <Link to={`/shop/${productId}`} className='text-gray-900 hover:text-sky-600' >
        <div className="  bg-white p-5 drop-shadow-lg flex flex-col items-center rounded-lg border-2 w-72 h-72 hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:border-sky-600 duration-200">
            <p className="font-bold text-sm">{title}</p>
            <div id='product-img' className="w-32 h-32 flex items-center justify-center">
            <img className="mx-auto my-auto max-w-full max-h-full pt-6" src={image} alt="product-image" />
            </div>
            <div className="flex flex-row justify-between w-full mt-2 gap-4 pt-5">
                <p className="flex justify-center text-center align-center items-center flex-grow font-semibold "><span className="font-bold pr-2 text-2xl">$ </span> {price.toFixed(2)} </p>
                            
            </div>
        </div>
        </Link>
    )
}

export default ProductCard;