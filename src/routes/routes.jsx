import { createBrowserRouter } from 'react-router-dom';
import CategoryBar from '../components/CategoryBar';
import ShopLayout from '../components/ShopLayout';
import Shop from '../components/Shop';
import HeroHome from '../components/HeroHome';
import Root from '../components/Root'; // New component for the layout

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, // Use the Root component as the root element
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
                        element: <Shop />
                    }
                ]
            }
        ]
    }
]);

export default router;