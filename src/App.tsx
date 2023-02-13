import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import OrderView from './components/order-view/OrderView';
import { OrderProvider } from './provider/OrderProvider';
import './App.css';
import StyledMainLayout from './shared/StyledMainLayout';
import Header from './shared/header/Header';
import routes from './routes';

function App() {
  return (
    <>
      <Header />
      <StyledMainLayout>
        <OrderProvider>
          <Routes>
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.orderView} element={<OrderView />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </OrderProvider>
      </StyledMainLayout>
    </>
  );
}

export default App;
