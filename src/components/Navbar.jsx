import cart from '../assets/cart.png'
import CategoryBar from './CategoryBar'
import Shop from './Shop'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import lgo from '../assets/lgo.png'

const Navbar = ({shoppingCart}) => {
    return (
        <div className="w-full pl-8 pt-4 flex justify-between sticky align-start">
            <div className='content-center flex align-middle items-center'><img className='w-14' src={lgo} alt="" />Hex</div>
            <div id='nav-links' className="pr-8 flex gap-3 ">
                <Link to="/" className="text-xl content-center text-gray-900 hover:text-sky-950">Home</Link>
                <Link to="shop" className="text-xl content-center text-gray-900 hover:text-sky-950">Shop</Link>
                <div id="cart" className='w-12 content-center h-12 object-center'>
                    <div className=' flex ' ><Link to='/cart'><img className='hover:text-sky-950 hover:cursor-pointer' src={cart} alt="" /></Link>  {shoppingCart.length < 1 ? null : (shoppingCart.length) }</div>      
                </div>
            </div>
        </div>
    )
}

export default Navbar