import { createBrowserRouter } from 'react-router-dom';
import CategoryBar from '../components/CategoryBar';
import ShopLayout from '../components/ShopLayout';
import Shop from '../components/Shop';
import HeroHome from '../components/HeroHome';
import Root from '../components/Root';
import Product from '../components/Product';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, 
        children: [
            {
                index: true,
                element: <HeroHome />
            },
            {
                path: 'shop',
                element: <ShopLayout />,
                children: [
                    {
                        index: true,
                        path: 'shop:productId',
                        element: <Product />
                    }
                ]
            }
        ]
    }
]);

export default router;