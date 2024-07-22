import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Logo from '../../assets/logo.png';
import User from '../../assets/user.png'

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    discount: '',
    type: '',
    imgUrl: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/postproducts', product);
      navigate('/productlist');
    //   console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  const handleLogout = () => {
    // Clear selleruser data from localStorage

    localStorage.removeItem('selleruser');

    // Navigate to login or signup page
    navigate('/sellerlogin'); // Change this to your desired logout destination
  };

  return (
    <div>
            <div>
                <Navbar className='instabuy-navbar'>
                    <Navbar.Brand onClick={() => navigate('/productlist')} className='logo-top-left'>
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
                      <img src={User} alt="usericon" style={{width:30,height:30,marginRight:'2rem'}}/>
                      <Button variant="light" onClick={handleLogout}><b>LogOut</b></Button>
                    </Navbar.Collapse>
                  </Navbar>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'50% auto'}}>
                <form onSubmit={handleSubmit} style={{background:'lightblue'}}>
                              <div style={{paddingTop:'4rem',paddingLeft:'2.3rem'}}>
                              <input
                                style={{width:'42rem',height:'3.2rem',padding:'1.4rem',border:'none',borderRadius:'12px',fontSize:'1.2rem',outline:'none'}}
                                  type="text"
                                  name="name"
                                  value={product.name}
                                  placeholder='Product Title'
                                  onChange={handleChange}
                              />
                            </div>

                            <div style={{paddingTop:'3rem',paddingLeft:'2.3rem'}}>
                              <input
                                  style={{width:'42rem',height:'5rem',padding:'1.4rem',border:'none',borderRadius:'12px',fontSize:'1.2rem',outline:'none'}}
                                  type="text"
                                  name="description"
                                  value={product.description}
                                  placeholder='Product Description'
                                  onChange={handleChange}
                              />
                            </div>

                            <div style={{display:'flex',paddingTop:'2.5rem',paddingLeft:'2.3rem'}}>
                                  <div >
                                      <input
                                      style={{width:'19rem',height:'3.2rem',padding:'1.4rem',border:'none',borderRadius:'12px',fontSize:'1.2rem',outline:'none'}}
                                      type="number"
                                      name="price"
                                      value={product.price}
                                      placeholder='Product Price'
                                      onChange={handleChange}
                                      />
                                  </div>

                                  <div style={{paddingLeft:'4rem'}}>
                                      <input
                                    style={{width:'19rem',height:'3.2rem',padding:'1.4rem',border:'none',borderRadius:'12px',fontSize:'1.2rem',outline:'none'}}
                                    type="number"
                                    name="discount"
                                    value={product.discount}
                                    placeholder='Product Discount'
                                    onChange={handleChange}
                                      />
                                  </div>
                            </div>

                            <div style={{paddingTop:'2.5rem',paddingLeft:'2.3rem'}}>
                              <input
                                  style={{width:'42rem',height:'3.2rem',padding:'1.4rem',border:'none',borderRadius:'12px',fontSize:'1.2rem',outline:'none'}}
                                  type="text"
                                  name="type"
                                  value={product.type}
                                  placeholder='Product Type'
                                  onChange={handleChange}
                              />
                            </div>

                            <div style={{paddingTop:'2.5rem',paddingLeft:'2.3rem'}}>
                              <input
                                  style={{width:'42rem',height:'3.2rem',padding:'1.4rem',border:'none',borderRadius:'12px',fontSize:'1.2rem',outline:'none'}}
                                  type="text"
                                  name="imgUrl"
                                  value={product.imgUrl}
                                  placeholder='Img URL'
                                  onChange={handleChange}
                              />
                            </div>

                            <div style={{display:'flex',justifyContent:'space-evenly',paddingTop:'3.3rem',paddingBottom:'3rem'}}>
                              <Button type='submit' style={{height:'3rem',width:'15rem',color:'#372675',border:'none'}}><b>Add Product</b></Button>
                              <Button variant="danger" onClick={() => navigate('/productlist')} style={{height:'3rem',width:'7rem',color:'#372675',border:'none'}}><b>Cancel</b></Button>
                            </div>
                      </form>

                  <div>
                        <div style={{paddingTop:'4rem',paddingLeft:'4rem'}}>
                          <h3><b><i>LIVE PREVIEW</i></b></h3>
                          <div style={{paddingTop:'2rem',paddingLeft:'2rem'}}>
                            <p style={{marginLeft:'3rem'}}>{product.description}</p>
                            <img style={{width:'15rem',height:'15rem',marginTop:'0.8rem',borderRadius:'12px'}} src={product.imgUrl} alt={product.name} />
                            <h2 style={{marginLeft:'3rem',marginTop:'10px'}}>{product.name}</h2>
                            <p style={{marginLeft:'3rem',color:'green',marginTop:'-4px'}}> <span style={{fontSize:'1.2rem',color:'blue'}}><b>₹{product.price} </b></span> <b>({product.discount}%OFF)</b></p>
                          </div>
                  </div>
                  
            </div>

    </div>
</div>
    );
};

export default AddProduct;
