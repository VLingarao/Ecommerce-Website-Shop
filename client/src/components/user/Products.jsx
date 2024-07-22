import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Navbar, Badge } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';

const Hit = ({ hit, addToCart }) => (
  <div>
    <img style={{ width: '15rem', height: '15rem', marginTop: '1.7rem', borderRadius: '12px' }} src={hit.imgUrl} alt={hit.name} />
    <h2 style={{ marginLeft: '3rem', marginTop: '10px' }}>{hit.name}</h2>
    <p style={{ marginLeft: '3rem', color: 'green', marginTop: '-4px' }}>
      <span style={{ fontSize: '1.2rem', color: 'blue' }}><b>₹{hit.price} </b></span>
      <b>({hit.discount}% OFF)</b>
    </p>
    <div style={{ marginTop: '-6px' }}>
      <Button onClick={() => addToCart(hit)} style={{ marginLeft: '2rem', borderRadius: '20px', width: '10rem' }} variant="primary">
        <b>Add To Cart</b>
      </Button>
    </div>
  </div>
);

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('http://localhost:5000/getproducts');
        setProducts(response.data);
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    const totalQuantity = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
    setTotalItems(totalQuantity);
  }, [cartItems]);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredProducts(
      products.filter(product => {
        const matchesQuery = product.name.toLowerCase().includes(lowercasedQuery);
        const matchesMinPrice = minPrice ? product.price >= parseFloat(minPrice) : true;
        const matchesMaxPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;
        return matchesQuery && matchesMinPrice && matchesMaxPrice;
      })
    );
  }, [searchQuery, minPrice, maxPrice, products]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/userlogin'); // Navigate to logout destination
  };

  const addToCart = (product) => {
    const { _id, name, price, imgUrl } = product;
    setCartItems(prevItems => {
      const existingItem = prevItems[_id];
      return {
        ...prevItems,
        [_id]: existingItem
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : { name, price, imgUrl, quantity: 1 }
      };
    });
  };

  const handleClick = () => {
    // Navigate to '/usercart' with state
    navigate("/usercart", { state: { cartItems } });
    
    // Reload the page after navigation
    window.location.reload();
  };

  return (
    <div>
      <Navbar className='instabuy-navbar'>
        <Navbar.Brand className='logo-top-left' onClick={() => navigate('/userhome')} style={{ cursor: 'pointer' }}>
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
          <Button style={{ marginRight: '2rem' }} onClick={handleClick}>
            Cart <Badge bg="primary" text="black">{totalItems}</Badge>
          </Button>
          <img onClick={() => { navigate('/userprofile'); window.location.reload(); }} src={User} alt="usericon" style={{ width: 30, height: 30, marginRight: '2rem' }} />
          <Button variant="light" onClick={handleLogout}><b>LogOut</b></Button>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ display: 'grid', gridTemplateColumns: '20% auto' }}>
        <div style={{ borderRight: '1px solid black' }}>
          <div style={{paddingLeft:'1.4rem',paddingTop:'2rem',paddingBottom:'2rem',borderBottom:'1px solid black'}}>
            <input
              style={{width:'16rem',height:'3rem',borderRadius:'12px',outline:'none',padding:'20px',fontWeight:'bold',background:'lightblue',color:'blue',border:"none"}}
              type="text"
              placeholder="Search for items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{paddingLeft:'3.3rem',paddingTop:'3.5rem',display:'flex'}}>
            <h6>Price Less than :</h6>
          <input
              style={{width:'3rem',height:'1.3rem',outline:'none',border:'none',borderBottom:'2px dashed black',marginLeft:'0.5rem',padding:'3px'}}
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>

          <div style={{paddingLeft:'3.3rem',paddingTop:'3.5rem',display:'flex'}}>
          <h6>Price Less than :</h6>
            <input
            style={{width:'3rem',height:'1.3rem',outline:'none',border:'none',borderBottom:'2px dashed black',marginLeft:'0.5rem',padding:'3px'}}
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div style={{ paddingTop: 1, paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {filteredProducts.map(product => (
              <Hit key={product._id} hit={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
