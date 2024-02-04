import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import ProductsScreen from './pages/ProductsScreen';
import NotFoundPage from './pages/NotFoundPage';
import CartScreen from './pages/CartScreen';

import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/products',
    element: <ProductsScreen />,
  },
  {
    path: '/products/:productId',
    element: <ProductScreen />,
  },
  {
    path: '/cart',
    element: <CartScreen />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
