import { createBrowserRouter } from 'react-router-dom';
import Shop from '../features/Shop/Shop.jsx';
import Wishlist from '../features/Wishlist/Wishlist.jsx';
import Cart from '../features/Cart/Cart.jsx';
import Checkout from '../features/Checkout/Checkout.jsx';
import MyAccount from '../features/MyAccount/MyAccount.jsx';
import Compare from '../features/Compare/Compare.jsx';

// Create route
const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/myaccount',
    element: <MyAccount />,
  },
  {
    path: '/compare',
    element: <Compare />,
  },
]);

export default publicRoutes;
