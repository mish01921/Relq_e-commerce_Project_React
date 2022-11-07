import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { Container, Row } from "reactstrap"
import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"


function Header() {
    return <header className='header'>
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>Multimart</h1>
                            <p>Since 1995</p>
                        </div>
                    </div>
                 
                    
                    <div className="navigation">
                        <ul className="menu">
                            <li className="nav_item">
                                <NavLink to="home">Home</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="home">Shop</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="home">Cart</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav_icon">
                        <span className="fav_icon"><i className="ri-heart-line"></i></span>
                        <span className="cart_icon"> <i className="ri-shopping-bag-line"></i></span>
                        <span><img src={userIcon} alt=""/></span>
                        

                    </div>
                    <div className="mobile_menu">
                        <span><i className="ri-menu-line"></i></span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>


}

export default Header