import cart from '../assets/cart.png'
import CategoryBar from './CategoryBar'
import Shop from './Shop'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import lgo from '../assets/lgo.png'

const Navbar = ({shoppingCart}) => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className='flex items-center gap-3 group'>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img className='relative w-14 h-14 transform group-hover:scale-110 transition-transform duration-300' src={lgo} alt="Hex Logo" />
                        </div>
                        <span className='text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent'>Hex</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        <Link to="/" className="relative text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors duration-200 group">
                            <span>Home</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="shop" className="relative text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors duration-200 group">
                            <span>Shop</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        {/* Cart Icon with Badge */}
                        <Link to='/cart' className='relative group'>
                            <div className="relative p-2 rounded-lg hover:bg-sky-50 transition-colors duration-200">
                                <img className='w-8 h-8 transform group-hover:scale-110 transition-transform duration-200' src={cart} alt="Shopping Cart" />
                                {shoppingCart.length > 0 && (
                                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-sky-600 to-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                        {shoppingCart.length}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar