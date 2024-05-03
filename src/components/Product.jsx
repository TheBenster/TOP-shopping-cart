import goBack from '../assets/back-chevron.png';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';


const Product = ({}) => {
    const { productId } = useParams();
    const productURL = `https://fakestoreapi.com/products/${productId}`;
    const productJSON = useFetch(productURL);
    const product = productJSON.data
    let navigate = useNavigate()
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        if(quantity == 1){
           
        }
        else{
            setQuantity(quantity - 1)
        }
    }
    return(
        <div >
            <div id='go-back' >
                <img src={goBack} onClick={() => navigate('/shop')} className='h-8 pl-9 hover:cursor-pointer' alt="" />
            </div>
            <div id='productInfo' className=' flex mt-36 mr-96 m-72 gap-14'>
            <div className=' flex flex-col gap-8 h-96'>
                <p className=' text-lg'>{product.description}</p>
                <div id='cart-amount' className='flex gap-6 items-center'>
                <p className=' text-xl font-bold'>${product.price}</p>
                <button className='bg-sky-600 text-white w-40 rounded-lg hover:bg-sky-800 border-0 duration-300'>Add to cart</button>
                    
                    <div id='AhH' className='h-10 flex justify-between rounded-lg w-40 bg-slate-300'>
                        <button onClick={decrement} className='flex justify-center items-center bg-slate-200 w-10 h-10 font-bold text-lg  rounded-none  rounded-l-md' >-</button>
                            <p className='content-center'>{quantity}</p>
                        <button onClick={increment} className='flex justify-center items-center bg-slate-200 w-10 h-10 font-bold text-lg rounded-none rounded-r-md' >+</button>                   
                    </div>
                </div>
                
            </div>
            <div id='vertical-data' className="flex flex-col h-4/5 justify-end items-end gap-14 ">
                    <img className=' w-60 h-60' src={product.image} alt="" />
                    <h2 className=' text-2xl font-bold w-72'>{product.title}</h2>
                </div>
            </div>
            
            
        </div>
    )
}

export default Product;