import React from "react";
import '../../App.css';
import { useNavigate } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import CarouselOneImg from "../../assets/Carousel01.png"
import CarouselTwoImg from "../../assets/Carousel02.png"
import CarouselThreeImg from "../../assets/Carousel03.png"
import CompanyOneImg from "../../assets/company01.png"
import CompanyTwoImg from "../../assets/company02.png"
import CompanyThreeImg from "../../assets/company03.png"
import CompanyFourImg from "../../assets/company04.png"
import CompanyFiveImg from "../../assets/company05.png"
import CompanySixImg from "../../assets/company06.png"


function UserHome(){

 const navigate = useNavigate();

//  const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/userlogin'); // Navigate to logout destination
// };

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
              <img src={User} onClick={()=>navigate('/userprofile')} alt="usericon" style={{ width: 30, height: 30, marginRight: '2rem' }} />
              <Button variant="light" onClick={()=>navigate('/userlogin')}><b>LogOut</b></Button>
            </Navbar.Collapse>
          </Navbar>
      </div>

      <div style={{backgroundColor: "#FCE4EC"}} className='home-container'>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div className='left-text-div' style={{padding: 100}}>
                            <h1 style={{fontWeight: 700}}>SHOP WITH UTMOST</h1>
                            <h1 style={{color: "#216ad9",fontWeight: 700}}><i>STYLE</i></h1>
                            <h3 style={{marginBottom: 20}}>Shop with latest trendy products</h3>
                            <div style={{marginBottom: 20}}>
                                <Button style={{width: 250}} onClick={()=>navigate('/products')}>Browse Products</Button>
                            </div>
                            <div>
                               <h4>Products available from :</h4> 
                               <img src={CompanyOneImg} alt="CompanyOneImg" style={{height: 50}}/>
                               <img src={CompanyTwoImg} alt="CompanyTwoImg" style={{height: 50}}/>
                               <img src={CompanyThreeImg} alt="CompanyThreeImg" style={{height: 50}}/>
                               <img src={CompanyFourImg} alt="CompanyFourImg" style={{height: 50}}/>
                               <img src={CompanyFiveImg} alt="CompanyFiveImg" style={{height: 50}}/>
                               <img src={CompanySixImg} alt="CompanySixImg" style={{height: 50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img className='Carousel-img' src={CarouselOneImg} alt="CarouselOneImg" />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div className='left-text-div' style={{padding: 100}}>
                            <h1 style={{fontWeight: 700}}>SHOP WITH UTMOST</h1>
                            <h1 style={{color: "#216ad9",fontWeight: 700}}><i>STYLE</i></h1>
                            <h3 style={{marginBottom: 20}}>Shop with latest trendy products</h3>
                            <div style={{marginBottom: 20}}>
                                <Button style={{width: 250}} onClick={()=>navigate('/products')}>Browse Products</Button>
                            </div>
                            <div>
                               <h4>Products available from :</h4> 
                               <img src={CompanyOneImg} alt="CompanyOneImg" style={{height: 50}}/>
                               <img src={CompanyTwoImg} alt="CompanyTwoImg" style={{height: 50}}/>
                               <img src={CompanyThreeImg} alt="CompanyThreeImg" style={{height: 50}}/>
                               <img src={CompanyFourImg} alt="CompanyFourImg" style={{height: 50}}/>
                               <img src={CompanyFiveImg} alt="CompanyFiveImg" style={{height: 50}}/>
                               <img src={CompanySixImg} alt="CompanySixImg" style={{height: 50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img className='Carousel-img' src={CarouselTwoImg} alt="CarouselTwoImg" />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div className='left-text-div' style={{padding: 100}}>
                            <h1 style={{fontWeight: 700}}>SHOP WITH UTMOST</h1>
                            <h1 style={{color: "#216ad9",fontWeight: 700}}><i>DISCOUNTS</i></h1>
                            <h3 style={{marginBottom: 20}}>Shop with latest trendy products</h3>
                            <div style={{marginBottom: 20}}>
                                <Button style={{width: 250}} onClick={()=>navigate('/products')}>Browse Products</Button>
                            </div>
                            <div>
                               <h4>Products available from :</h4> 
                               <img src={CompanyOneImg} alt="CompanyOneImg" style={{height: 50}}/>
                               <img src={CompanyTwoImg} alt="CompanyTwoImg" style={{height: 50}}/>
                               <img src={CompanyThreeImg} alt="CompanyThreeImg" style={{height: 50}}/>
                               <img src={CompanyFourImg} alt="CompanyFourImg" style={{height: 50}}/>
                               <img src={CompanyFiveImg} alt="CompanyFiveImg" style={{height: 50}}/>
                               <img src={CompanySixImg} alt="CompanySixImg" style={{height: 50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img className='Carousel-img' src={CarouselThreeImg} alt="CarouselThreeImg" />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
  
   </div>
 )
}

export default UserHome;

