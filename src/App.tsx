import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './login/Login';
import OrderView from './order-view/OrderView';
import {OrderProvider} from "./provider/OrderProvider";
import './App.css';

function App() {
  return (
    <OrderProvider>
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/order-view/:id" element={<OrderView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;

function NotFound() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
    </div>
  );
}
