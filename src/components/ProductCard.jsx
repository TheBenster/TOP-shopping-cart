import { Link } from 'react-router-dom'
import Product from './Product'

const ProductCard = ({title, description, price, image, productId, handleAddToCart}) => {

    
    return (
        <Link to={`/shop/${productId}`} className='group' >
            <div className="relative bg-white p-6 rounded-xl border-2 border-gray-200 w-80 h-[450px] hover:cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-sky-500 hover:-translate-y-2 flex flex-col overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    <h3 className="font-bold text-base text-gray-900 mb-4 line-clamp-2 group-hover:text-sky-700 transition-colors duration-200 min-h-[3rem]">
                        {title}
                    </h3>

                    <div id='product-img' className="flex-grow flex items-center justify-center mb-4">
                        <img
                            className="max-w-full max-h-48 object-contain transform group-hover:scale-110 transition-transform duration-500"
                            src={image}
                            alt={title}
                        />
                    </div>

                    <div className="mt-auto pt-4 border-t-2 border-gray-100">
                        <div className="flex items-baseline justify-center gap-2">
                            <span className="text-3xl font-bold text-sky-600 group-hover:text-sky-700 transition-colors duration-200">
                                ${price.toFixed(2)}
                            </span>
                        </div>
                        <div className="mt-3 text-center">
                            <span className="text-sm font-semibold text-gray-500 group-hover:text-sky-600 transition-colors duration-200">
                                View Details →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;