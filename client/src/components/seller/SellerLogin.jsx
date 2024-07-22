import React, { useState } from "react";
import Shop from '../../assets/shop.png';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SellerLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('selleruser'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setMessage('Login successful!');
      console.log('User logged in successfully:', storedUser);
      navigate('/productlist'); // Redirect to product list page
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: '50% auto' }}>
      <div style={{ background: 'darkblue', paddingTop: '2.5rem', paddingLeft: '8rem' }}>
        <div>
          <img src={Shop} alt="Shop" />
          <div style={{ paddingTop: '2rem', paddingBottom: '6.1rem', paddingLeft: '7rem' }}>
            <Button onClick={()=>navigate('/')} variant="light" style={{ color: 'blue', width: '18rem', height: '3rem' }}>
              <b>Back To Home</b>
            </Button>
          </div>
        </div>
      </div>

      <div style={{ padding: '7rem', background: 'darkblue' }}>
        <div style={{ display: 'flex', flexDirection: 'column', background: 'lightblue', border: 'none', borderRadius: '20px' }}>
          <p style={{ paddingTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem', color: 'darkblue', fontWeight: 'bold' }}>
            Login and start shopping from your favorite brands. Refer a friend and save 50% OFF
          </p>
          <div style={{ paddingLeft: '2rem', paddingTop: '1rem' }}>
            <input
              style={{ width: '30rem', height: '3.5rem', borderRadius: '12px', padding: '1rem', border: 'none', outline: 'none' }}
              type="text"
              placeholder="Login Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div style={{ paddingLeft: '2rem', paddingTop: '3.5rem' }}>
            <input
              style={{ width: '30rem', height: '3.5rem', borderRadius: '12px', padding: '1rem', border: 'none', outline: 'none' }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div style={{ paddingLeft: '9.5rem', paddingTop: '3rem' }}>
            <Button
              variant="light"
              style={{ width: '15rem', height: '2.8rem', color: 'darkblue', borderRadius: '12px', cursor: 'progress' }}
              onClick={handleLogin}
            >
              <b>Seller Login</b>
            </Button>
          </div>
          {message && <p style={{ color: 'darkblue', paddingLeft: '10rem' }}>{message}</p>}
          <p
            style={{ fontWeight: 'bold', color: 'darkblue', paddingLeft: '13.3rem', paddingTop: '2rem', paddingBottom: '2rem', textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigate('/sellersignup')}
          >
            Create Account
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellerLogin;



