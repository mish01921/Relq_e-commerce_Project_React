import React, { useRef, useEffect } from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { Container, Row } from "reactstrap"
import logo from "../../assets/images/Logo-TrandBrand.jpg"
import userIcon from "../../assets/images/user-icon.png"
import { motion } from "framer-motion"

const nav_links = [
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
];

function Header() {
    const headerRef = useRef(null);

    const menuRef = useRef(null)
    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky_header");
            } else {
                headerRef.current.classList.remove("sticky_header");
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener("scroll", stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle("active_menu");

    return <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>TrendBrand</h1>
                        </div>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {
                                nav_links.map((item, index) => (
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
                        <span><motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" /></span>
                        <div className="mobile_menu">
                        <span onClick={menuToggle}>
                            <i className="ri-menu-line"></i>
                            </span>
                    </div>
                    </div>
                    
                </div>
            </Row>
        </Container>
    </header>


}

export default Header