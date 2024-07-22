import React, { useState } from "react";
import Shop from '../../assets/shop.png';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SellerSignup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const selleruser = { username, password };
    localStorage.setItem('selleruser', JSON.stringify(selleruser));
    console.log('User signed up successfully:', selleruser);
    navigate('/sellerlogin'); // Redirect to login page
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: '50% auto' }}>
      <div style={{ background: 'darkblue', paddingTop: '2.5rem', paddingLeft: '8rem' }}>
        <div>
          <img src={Shop} alt="Shop" />
          <div style={{ paddingTop: '2rem', paddingBottom: '6.1rem', paddingLeft: '7rem' }}>
            <Button onClick={()=>navigate('/sellerlogin')} variant="light" style={{ color: 'blue', width: '18rem', height: '3rem' }}>
              <b>Go to Shopper Login</b>
            </Button>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '5rem', paddingLeft: '6.6rem', paddingRight: '6.6rem', background: 'darkblue' }}>
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

          <div style={{ paddingLeft: '2rem', paddingTop: '3rem' }}>
            <input
              style={{ width: '30rem', height: '3.5rem', borderRadius: '12px', padding: '1rem', border: 'none', outline: 'none' }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ paddingLeft: '2rem', paddingTop: '3rem' }}>
            <input
              style={{ width: '30rem', height: '3.5rem', borderRadius: '12px', padding: '1rem', border: 'none', outline: 'none' }}
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ paddingLeft: '9.5rem', paddingTop: '2.5rem' }}>
            <Button
              variant="light"
              style={{ width: '15rem', height: '2.8rem', color: 'darkblue', borderRadius: '12px' }}
              onClick={handleSignup}
            >
              <b>Create Account</b>
            </Button>
          </div>
          <p
            style={{ fontWeight: 'bold', color: 'darkblue', paddingLeft: '15.5rem', paddingTop: '1.5rem', paddingBottom: '2rem', textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigate('/sellerlogin')}
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellerSignup;
