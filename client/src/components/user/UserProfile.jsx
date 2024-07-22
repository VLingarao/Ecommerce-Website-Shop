import React, { useEffect, useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';

export default function UserProfile() {
    const [purchases, setPurchases] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedPurchases = localStorage.getItem('purchases');
        if (storedPurchases) {
            setPurchases(JSON.parse(storedPurchases));
        }
    }, []);

    useEffect(() => {
        // console.log('Purchases:', purchases);
    }, [purchases]);

    const handleLogout = () => {
        navigate('/userlogin'); 
        localStorage.removeItem('user');
    };

    const addTestImageUrls = (purchases) => {
        return purchases.map(purchase => {
            const updatedItems = purchase.items.map(item => ({
                ...item,
                imgUrl: item.imgUrl || '' 
            }));
            return { ...purchase, items: updatedItems };
        });
    };

    const purchasesWithTestUrls = addTestImageUrls(purchases);

    const handleClick = ()=>{
        navigate('/usercart')

        window.location.reload();
    }

    return (
        <div>
                <Navbar className='instabuy-navbar'>
                        <Navbar.Brand className='logo-top-left'  onClick={handleClick} style={{cursor:'pointer'}}>
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
                                <Button style={{marginRight:'2rem'}} onClick={()=>navigate('/usercart')}>
                                    Cart 
                                </Button>
                            <img src={User} alt="usericon" style={{ width: 30, height: 30, marginRight: '2rem'}} />
                            <Button variant="light" onClick={handleLogout}><b>LogOut</b></Button>
                        </Navbar.Collapse>
                </Navbar>

            <div style={{ margin: 60 }}>
                <h3>Your Purchases:</h3>
                {purchasesWithTestUrls.length === 0 ? (
                    <p>No purchases found.</p>
                ) : (
                    purchasesWithTestUrls.map((purchase, index) => (
                        <div key={index} style={{ background: '#e0f7fa', padding: '1rem', borderRadius: '10px', marginBottom: '0.7rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {purchase.items.map((item, idx) => (
                                        <div key={idx} style={{ textAlign: 'center' }}>
                                            <img 
                                                src={item.imgUrl} 
                                                alt={item.name} 
                                                style={{ width: '5rem', height: '5rem', borderRadius: '12px', objectFit: 'cover' }} 
                                            />
                                            <p style={{paddingTop:'1rem',marginBottom:'-1px',color:'#0b39e0'}}><b>₹{item.price}</b></p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 style={{color:'#0b39e0'}}>Total: ₹{purchase.total}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
