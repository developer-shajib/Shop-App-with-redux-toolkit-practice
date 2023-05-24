import { RouterProvider } from 'react-router-dom';
import publicRoutes from './routes/PublicRoute.jsx';
import './App.css';

function App() {
  return <RouterProvider router={publicRoutes} />;
}

export default App;
