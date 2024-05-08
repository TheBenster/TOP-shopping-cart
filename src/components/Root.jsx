import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

// This will contain the navbar under every circumstance. Everything else is an outlet, and thus context.
const Root = () => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const shoppingCartLength = Object.keys(shoppingCart).length;
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <Navbar  />
            <Outlet context={{shoppingCart, setShoppingCart, quantity, setQuantity}} />
        </>
    );
};

export default Root;