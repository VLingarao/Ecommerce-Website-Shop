import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import MainHome from './components/MainHome';
import ProductList from './components/seller/ProductList';
import EditProduct from './components/seller/EditProduct';
import AddProduct from './components/seller/AddProduct';
import SellerLogin from './components/seller/SellerLogin';
import SellerSignup from './components/seller/SellerSignup';
import UserLogin from './components/user/UserLogin';
import UserSignup from './components/user/UserSignup';
import UserHome from './components/user/UserHome';
import Products from './components/user/Products';
import UserCart from './components/user/UserCart';
import UserProfile from './components/user/UserProfile';




function App() {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
});

const handleAddToCart = (newCartItems) => {
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
};



  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/usersignup' element={<UserSignup />} />
          <Route path='/userhome' element={<UserHome />}/>
          <Route path='/products' element={<Products cartItems={cartItems} handleAddToCart={handleAddToCart} />} />
          <Route path='/usercart' element={<UserCart cartItems={cartItems} />}/>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/sellerlogin' element={<SellerLogin />} />
          <Route path='/sellersignup' element={<SellerSignup />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/editproduct/:id' element={<EditProduct />} />
          <Route path='/addproduct' element={<AddProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
