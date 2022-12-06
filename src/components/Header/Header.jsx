import React, { useRef, useEffect } from 'react'
import "./header.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from "reactstrap"
import logo from "../../assets/images/Logo-TrandBrand.jpg"
import { useSelector } from "react-redux"

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
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const menuRef = useRef(null)
    const navigate = useNavigate()


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

    const navigateToCart = () => {
        navigate("/cart")
    }
    const userSignIn = useSelector((state) => state.userSignin);
    const { userInfo } = userSignIn;
    console.log(userInfo,1111)
   
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
                        <span className="fav_icon">
                            <i className="ri-heart-line"></i>
                            <span className="badge">2</span>
                        </span>


                        <span className="cart_icon" onClick={navigateToCart}>
                            <i className="ri-shopping-bag-line"></i>
                            <span className="badge">{totalQuantity}</span>
                        </span>
                        {
                        userInfo ? (
                            <Link to="/login">{userInfo.name}</Link>
                        ) :(
                            <Link to="/home">Sign In</Link>
                        )
                    }
                       

                        <NavLink to="/signup">Signup</NavLink>

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