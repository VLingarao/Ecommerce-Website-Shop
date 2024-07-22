import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Navbar } from "react-bootstrap";




import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import CartImg from '../../assets/shopping-cart.png';
import { useNavigate } from "react-router-dom";

export default function UserCart({ cartItems }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cartItems) {
            return; // Exit early if cartItems is undefined or null
        }

        let tempPrice = 0;
        let tempQuantity = 0;
        Object.keys(cartItems).forEach(cartItemId => {
            const details = cartItems[cartItemId];
            tempQuantity += details.quantity;
            tempPrice += details.quantity * details.price;
        });
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    }, [cartItems]);

    const handleCheckout = () => {
        // Save the purchase to local storage
        const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
        const newPurchase = {
            items: Object.keys(cartItems).map(key => ({
                ...cartItems[key],
                imgUrl: cartItems[key].imgUrl || '', // Add imgUrl if available
            })),
            total: totalPrice
        };
        purchases.push(newPurchase);
        localStorage.setItem('purchases', JSON.stringify(purchases));

        // Clear the cart
        localStorage.removeItem('cart');
        navigate("/userprofile");
        // Reload the page after navigation
        window.location.reload();
    };

    const handleLogout = () =>{
        navigate('/userhome')
        localStorage.removeItem('user');
    }
    return (
        <div>
            <div>
                    <Navbar className='instabuy-navbar'>
                        <Navbar.Brand className='logo-top-left'  onClick={()=>navigate('/products')} style={{cursor:'pointer'}}>
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
                                <Button style={{marginRight:'2rem'}}>
                                    Cart 
                                </Button>
                            <img onClick={()=>navigate('/userprofile')} src={User} alt="usericon" style={{ width: 30, height: 30, marginRight: '2rem'}} />
                            <Button variant="light" onClick={handleLogout}><b>LogOut</b></Button>
                        </Navbar.Collapse>
                    </Navbar>
            </div>

            <div style={{ marginTop:'4rem',marginLeft:'4rem' }}>
            <Row>
                <Col style={{ marginTop: 40 }}>
                    <h3>Your Cart:</h3>
                    <div>
                        <Table style={{border:'1px solid black'}}>
                            <thead>
                                <tr>
                                    <th style={{border:'1px solid black'}}>Name</th>
                                    <th style={{border:'1px solid black'}}>Quantity</th>
                                    <th style={{border:'1px solid black'}}>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems && Object.keys(cartItems).map((cartItemId) => {
                                    const itemDetails = cartItems[cartItemId];
                                    return (
                                        <tr  key={cartItemId}>
                                            <td style={{border:'1px solid black'}}>{itemDetails.name}</td>
                                            <td style={{border:'1px solid black'}}>{itemDetails.quantity}</td>
                                            <td style={{border:'1px solid black'}}>{itemDetails.quantity * itemDetails.price}</td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td style={{border:'1px solid black'}}>Total</td>
                                    <td style={{border:'1px solid black'}}>{totalQuantity}</td>
                                    <td style={{border:'1px solid black'}}>{totalPrice}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <Button onClick={handleCheckout} style={{width:'18rem',height:'2.5rem',marginLeft:'13.5rem',marginTop:'1rem'}}><b>Purchase</b></Button>
                </Col>
                <Col style={{marginLeft:'4rem'}}>
                    <img src={CartImg} alt="Cart" height={500} />
                </Col>
            </Row>
        </div>


        </div>
       
    )
}
