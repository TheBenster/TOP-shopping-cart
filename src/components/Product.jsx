import goBack from '../assets/back-chevron.png';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useEffect, useState, } from 'react';
import { useOutletContext } from 'react-router-dom';



const Product = ({}) => {
    const { productId } = useParams();
    const productURL = `https://fakestoreapi.com/products/${productId}`;
    const productJSON = useFetch(productURL);
    const product = productJSON.data;
    let navigate = useNavigate();
    
    product.price = parseFloat(product.price).toFixed(2);
    
    
    const {shoppingCart, setShoppingCart, quantity, setQuantity}= useOutletContext();

    const handleAddToCart = (product, quantity) => {
        if (!product) return;
        console.log(Object.keys(shoppingCart).length)
        const { id, title, price, image } = product;

        const existingItem = shoppingCart.find(item => item.id === id);

        if (existingItem) {
            const updatedCart = shoppingCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            );
            setShoppingCart(updatedCart);
        } else {
            let actualPrice = Number((price * quantity));
            const newItem = { id, title, actualPrice, image, quantity };
            console.log("Adding new item to cart:", [...shoppingCart, newItem]);
            setShoppingCart([...shoppingCart, newItem]);
            
        }
    };

      useEffect(()=>{
        handleAddToCart();
      }, [])

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
     };



    return(
        <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
            <div id='go-back' className='pt-6 pb-4'>
                <button
                    onClick={() => navigate('/shop')}
                    className='flex items-center gap-2 ml-9 px-4 py-2 text-gray-700 hover:text-sky-600 transition-colors duration-200 group'
                >
                    <img src={goBack} className='h-5 group-hover:-translate-x-1 transition-transform duration-200' alt="Go back to shop" />
                    <span className='font-medium'>Back to Shop</span>
                </button>
            </div>

            <div className='max-w-7xl mx-auto px-8 py-12'>
                <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
                    <div className='grid md:grid-cols-2 gap-12 p-12'>
                        {/* Product Image Section */}
                        <div className='flex items-center justify-center bg-gradient-to-br from-slate-50 to-white p-12 rounded-xl'>
                            <img
                                className='w-full max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-300'
                                src={product.image}
                                alt={product.title}
                            />
                        </div>

                        {/* Product Details Section */}
                        <div className='flex flex-col justify-center gap-8'>
                            <div>
                                <h1 className='text-4xl font-bold text-gray-900 mb-4 leading-tight'>{product.title}</h1>
                                <p className='text-lg text-gray-600 leading-relaxed'>{product.description}</p>
                            </div>

                            <div className='border-t border-b border-gray-200 py-6'>
                                <p className='text-5xl font-bold text-sky-600'>${product.price}</p>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-sm font-semibold text-gray-700 uppercase tracking-wide'>Quantity</label>
                                    <div id='quantity-control' className='h-12 flex justify-between rounded-lg w-40 bg-white border-2 border-gray-300 shadow-sm'>
                                        <button
                                            onClick={decrement}
                                            className='flex justify-center items-center bg-gray-50 w-12 h-full font-bold text-xl rounded-l-md hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150'
                                        >
                                            -
                                        </button>
                                        <p className='content-center px-4 font-semibold text-lg'>{quantity}</p>
                                        <button
                                            onClick={increment}
                                            className='flex justify-center items-center bg-gray-50 w-12 h-full font-bold text-xl rounded-r-md hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150'
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleAddToCart(product, quantity)}
                                    className='mt-auto px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold rounded-lg hover:from-sky-700 hover:to-sky-800 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl transition-all duration-200'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;