import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://ecommerce-website-backend-kej4.onrender.com/getproducts');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ecommerce-website-backend-kej4.onrender.com/deleteproducts/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  const handleLogout = () => {
    // Clear selleruser data from localStorage

    // localStorage.removeItem('selleruser');

    // Navigate to login or signup page
    navigate('/sellerlogin'); // Change this to your desired logout destination
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div>
        <Navbar className='instabuy-navbar'>
          <Navbar.Brand className='logo-top-left'>
            <img
              src={Logo}
              alt="Logo"
              width="30"
              height="30"
              className='d-inline-block align-top'
            />{' '}
            InstaBuy!
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <img src={User} alt="usericon" style={{ width: 30, height: 30, marginRight: '2rem' }} />
            <Button variant="light" onClick={handleLogout}><b>LogOut</b></Button>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', paddingLeft: '4rem', paddingRight: '4rem' }}>
          <h3><i>YOUR PRODUCTS</i></h3>
          <Button onClick={() => navigate('/addproduct')}><b>Add New Product</b></Button>
        </div>

        <div style={{ paddingTop: 1, paddingLeft: 120, paddingRight: 120 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {products.map(product => (
              <div key={product._id}>
                <img style={{ width: '15rem', height: '15rem', marginTop: '1.7rem', borderRadius: '12px' }} src={product.imgUrl} alt={product.name} />
                <h2 style={{ marginLeft: '3rem', marginTop: '10px' }}>{product.name}</h2>
                <p style={{ marginLeft: '3rem', color: 'green', marginTop: '-4px' }}> <span style={{ fontSize: '1.2rem', color: 'blue' }}><b>₹{product.price} </b></span> <b>({product.discount}%OFF)</b></p>
                <div style={{ marginTop: '-6px' }}>
                  <Button style={{ marginLeft: '2.5rem', borderRadius: '20px' }} onClick={() => navigate(`/editproduct/${product._id}`)}><b>Edit</b></Button>
                  <Button style={{ marginLeft: '1rem', borderRadius: '20px' }} variant="danger" onClick={() => handleDelete(product._id)}><b>Delete</b></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

