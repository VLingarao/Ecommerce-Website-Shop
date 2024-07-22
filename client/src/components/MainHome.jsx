import React from "react";
import { useNavigate } from "react-router-dom";

import Cart from '../assets/cart.png';
import Shop from '../assets/shop.png';


function MainHome() {

const navigate = useNavigate();

    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',padding:'2rem',marginTop:'4rem'}}>
                <div style={{display:'grid',width:'30rem',height:'30rem',background:'#D8E9F1',borderRadius:'25px'}}>
                <img style={{width:'20rem',padding:'2rem',marginTop:'2rem',marginLeft:'5rem'}} src={Cart} alt="Cart" />
                <button style={{width:'15rem',height:'3rem',marginLeft:'8rem',fontSize:'1.3rem',background:'#2F3B91',color:'white',border:'none',borderRadius:'12px'}} onClick={()=>navigate('/userlogin')}>Shopper Login</button>     
                </div>

                <div style={{display:'grid',width:'30rem',height:'30rem',background:'#2F3B91',borderRadius:'25px'}}>
                <img style={{width:'20rem',padding:'2rem',marginTop:'2rem',marginLeft:'5rem'}} src={Shop} alt="Shop" />
                <button style={{width:'15rem',height:'3rem',marginLeft:'8rem',fontSize:'1.3rem',background:'#D8E9F1',color:'black',border:'none',borderRadius:'12px'}} onClick={()=>navigate('/sellerlogin')}>Seller Login</button>     
                </div>
            </div>
        </div>
    )
}


export default MainHome;

