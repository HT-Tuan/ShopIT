import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/layout/Home";
import ProductDetails from "./components/product/ProductDetails"

import Login from './components/user/Login';
import Register from './components/user/Register';
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';
import Shipping from './components/cart/Shipping';
import Cart from './components/cart/Cart';
import ListOrders from './components/order/ListOrders';
import OrderDetails from './components/order/OrderDetails';
import store from './Store';

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<NewPassword />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />

            {/* <Route element={<ProtectedRoute />} > */}
              <Route path="/me" element={<Profile />} />
              <Route path="/me/update" element={<UpdateProfile />} />
              <Route path="/password/update" element={<UpdatePassword />} />
            {/* </Route> */}
            {/*  */}
            <Route path="/orders/me" element={<ListOrders />} />  
            <Route path="/order/:id" element={<OrderDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
