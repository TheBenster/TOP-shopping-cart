import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';

// This will contain the navbar under every circumstance. Everything else is an outlet, and thus context.
const Root = () => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const shoppingCartLength = Object.keys(shoppingCart).length;
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <Navbar shoppingCart={shoppingCart} />
            <Outlet context={{shoppingCart, setShoppingCart, quantity, setQuantity}} />
            <Footer />
        </>
    );
};

export default Root;