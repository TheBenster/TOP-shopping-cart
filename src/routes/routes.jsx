import { createBrowserRouter } from 'react-router-dom';
import ShopLayout from '../components/ShopLayout';
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
            },
            {
                path: 'shop/:productId',
                element: <Product />
            }
        ]
    }
]);

export default router;