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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-8">
                <h1 className="text-5xl font-bold text-gray-900 mb-12">Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {shoppingCart.length === 0 ? (
                            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                                <div className="text-6xl mb-4">🛒</div>
                                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
                                <p className="text-gray-500">Add some products to get started!</p>
                            </div>
                        ) : (
                            shoppingCart.map((item, index) => (
                                <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex gap-6">
                                        {/* Product Image */}
                                        <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-white rounded-xl flex items-center justify-center p-4">
                                            <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-grow flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-lg font-semibold text-gray-900 pr-4 line-clamp-2">{item.title}</h3>
                                                <button
                                                    onClick={() => deleteItem(index)}
                                                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-bold"
                                                >
                                                    ×
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-end mt-4">
                                                {/* Quantity Control */}
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Quantity</label>
                                                    <div id="quantity-control" className="h-10 flex justify-between rounded-lg w-32 bg-white border-2 border-gray-300 shadow-sm">
                                                        <button
                                                            onClick={() => decrement(index)}
                                                            className="flex justify-center items-center bg-gray-50 w-10 h-full font-bold text-lg rounded-l-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                                                        >
                                                            -
                                                        </button>
                                                        <p className="content-center px-3 font-semibold">{item.quantity}</p>
                                                        <button
                                                            onClick={() => increment(index)}
                                                            className="flex justify-center items-center bg-gray-50 w-10 h-full font-bold text-lg rounded-r-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Price */}
                                                <div className="text-right">
                                                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">Price</p>
                                                    <p className="text-2xl font-bold text-sky-600">${(item.actualPrice * item.quantity).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-600">Tax & Delivery</span>
                                    <span className="font-semibold text-gray-900">+${taxAmount.toFixed(2)}</span>
                                </div>

                                <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 my-4"></div>

                                {shoppingCart.length === 0 ? (
                                    <p className="text-gray-400 text-center py-4">Add items to see total</p>
                                ) : (
                                    <>
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-xl font-bold text-gray-900">Total</span>
                                            <span className="text-3xl font-bold text-sky-600">${(subtotal + taxAmount).toFixed(2)}</span>
                                        </div>

                                        <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200">
                                            Proceed to Checkout
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;