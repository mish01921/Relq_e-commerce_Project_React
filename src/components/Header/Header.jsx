import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { Container, Row } from "reactstrap"
import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"
import { motion } from "framer-motion"

const nav_liks = [
    {
        path: "home",
        display: "Home"
    },
    {
        path: "shop",
        display: "Shop"
    },
    {
        path: "cart",
        display: "Cart"
    }
]

function Header() {
    return <header className='header'>
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>TrendBrand</h1>
                        </div>
                    </div>


                    <div className="navigation">
                        <ul className="menu">
                            {/* <li className="nav_item">
                <NavLink to="home">Home</NavLink>
            </li>
            <li className="nav_item">
                <NavLink to="home">Shop</NavLink>
            </li>
            <li className="nav_item">
                <NavLink to="home">Cart</NavLink>
            </li> */}
                            {
                                nav_liks.map((item, index) => (
                                    <li key={index} className="nav_item">
                                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ""}>{item.display}</NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    <div className="nav_icon">
                        <span className="fav_icon"><i className="ri-heart-line"></i></span>
                        <span className="cart_icon"> <i className="ri-shopping-bag-line"></i></span>
                        <span><motion.img whileTap={{scale: 1.2}} src={userIcon} alt="" /></span>


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