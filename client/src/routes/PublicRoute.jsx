import { createBrowserRouter } from 'react-router-dom';
import Shop from '../features/Shop/Shop.jsx';

// Create route
const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
]);

export default publicRoutes;
