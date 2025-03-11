import React ,{useContext}from 'react'
import { CartContext } from '../cartpage/CartContext';
import './navbar.css';
import { NavLink } from "react-router-dom"

export default function Navbar() {
    // const { cartItems } = useContext(CartContext);
    // const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
    const { cart } = useContext(CartContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid" >
                    <div className='logo mx-4'>
                        <img src='assets/logo.png' alt=''></img>
                    </div>

                    <div className='pages'>
                        <div className='home'>
                            <NavLink to="/home" className={({isActive}) => isActive ? 'active' : ''}>  
                                <button>HOME</button>
                            </NavLink>
                        </div>

                        <div className='product'>
                            <NavLink to="/product" className={({isActive}) => isActive ? 'active' : ''}>
                                <button>PRODUCT</button>
                            </NavLink>
                        </div>

                        <div className='about'>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                                <button>ABOUT</button>
                            </NavLink>
                        </div>

                        <div className='cart'>
                            <NavLink to="/services"ClassName={({ isActive}) => isActive ? 'active' : ''}>
                                <button><i class="bi bi-bag"></i><span style={{background:"red", color:"white" , borderRadius:"50%"}}> {cart.length}</span></button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
