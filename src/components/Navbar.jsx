import cart from '../assets/cart.png'
import CategoryBar from './CategoryBar'

const Navbar = () => {
    return (
        <div className="w-full pl-8 pt-4 flex justify-between  align-start">
            <div className='content-center'>Logo goes here</div>
            <div id='nav-links' className="pr-8 flex gap-3 ">
                <a href="" className="text-xl content-center text-gray-900 hover:text-sky-950">Home</a>
                <a href="" className="text-xl content-center text-gray-900 hover:text-sky-950">Shop</a>
                <div id="cart" className='w-12 content-center h-12 object-center'>
                <img src={cart} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar