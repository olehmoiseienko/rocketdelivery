import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import OrderView from './components/order-view/OrderView';
import { OrderProvider } from './provider/OrderProvider';
import './App.css';

function App() {
  return (
    <OrderProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order-view" element={<OrderView />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;
