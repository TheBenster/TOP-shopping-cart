import { useOutletContext } from "react-router-dom";

const Cart = ({}) => {
    const { shoppingCart, setShoppingCart, quantity } = useOutletContext();

    const deleteItem = (index) => {
        const newCart = [...shoppingCart];
        newCart.splice(index, 1);
        setShoppingCart(newCart);
    };

    const increment = (index) => {
        const newCart = [...shoppingCart];
        newCart[index].quantity = newCart[index].quantity + 1;
        setShoppingCart(newCart);
    };


    const decrement = (index) => {
        const newCart = [...shoppingCart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity = newCart[index].quantity - 1;
            setShoppingCart(newCart);
        }
    };



    const tax = 0.075;
    const subtotal = shoppingCart.reduce((total, item) => parseFloat((total + (item.actualPrice * item.quantity)).toFixed(2)), 0);
    const taxAmount = subtotal * tax;
    const toComma = (value) => value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return (
        <div className=" h-full grid-cols-2 grid pt-6">
            <div className="flex items-center gap-5 flex-col">
                
                {shoppingCart.map((item, index) => (
                    <div key={item.id} className=" w-1/3 mr-64 border-gray-900 border-2 rounded-lg p-14">
                        <div className="flex justify-between gap-3">
                            <div>
                                <img src={item.image} alt="" className="h-32 w-auto" />
                                {item.title}
                            </div>
                            <div className="font-bold text-red-600 text-4xl hover:cursor-pointer" onClick={() => deleteItem(index)}>x</div>
                        </div>
                        <div className="flex justify-between gap-3">
                            <div>
                                <h2 className="font-bold">Quantity:</h2>
                                <div id="AhH" className="h-7 flex justify-between rounded-lg w-40 bg-slate-300">
                                    <button
                                        onClick={() => {
                                            decrement(index);
                                        }}
                                        className="flex justify-center items-center bg-slate-200 w-7 h-7font-bold text-lg  rounded-none  rounded-l-md "
                                    >
                                        -
                                    </button>
                                    <p className="content-center">{item.quantity}</p>
                                    <button
                                        onClick={() => {
                                            increment(index);
                                        }}
                                        className="flex justify-center items-center bg-slate-200 w-7 h-7 font-bold text-lg rounded-none rounded-r-md "
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold">Price:</h2>
                                ${(item.actualPrice * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="font-bold text-3xl">Your Total</h2>
                <hr className="my-5 border-2 border-gray-300 w-4/5" />
                <div className="flex justify-between w-4/5">
                    <h2 className="text-zinc-700 text-3xl">Subtotal</h2>
                    <h2 className="text-end w-4/5 text-3xl">$ {subtotal}</h2>
                </div>
                <div className="flex justify-between w-4/5">
                    <h2 className="text-zinc-500 text-3xl">Tax and Delivery</h2>
                    <h2 className=" text-end w-4/5 text-zinc-500 text-3xl">+${taxAmount.toFixed(2)}</h2>
                </div>
                <hr className="my-5 border-1 border-gray-300 w-4/5" />
                {shoppingCart.length === 0 ? (
                    <h2 className="text-zinc-500 text-3xl">Add items to cart to see total</h2>
                ) : (
                    <div className="flex justify-between w-4/5">
                        <h2 className="text-zinc-700 text-3xl">Total</h2>
                        <h2 className="text-end w-4/5 text-3xl">${(subtotal + taxAmount).toFixed(2)}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;