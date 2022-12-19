import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import BestSales from "../assets/images/BestSales01.png";
import "../styles/admin-nav.css";
import { NavLink } from 'react-router-dom';
function AdminNav() {

  const admin_nav = [
 {
  display: "Dashboard",
  path: "/dashboard"
 },
 {
  display: "All-Products",
  path: "/dashboard/all-products"
 },
 {
  display: "Orders",
  path: "/dashboard/orders"
 },
 {
  display: "Users",
  path: "/dashboard/users"
 },

  ]
  return (
    <>
   <header className="admin_header">
    <div className="admin_nav-top">
      <Container>
        <div className="admin_nav-wrapper-top">
          <div className="logo">
            <h2>TrandBrend</h2>
          </div>

          <div className="search_box">
            <input type="text" placeholder="Search...." />
            <span><i className="ri-search-line"></i></span>
          </div>
          <div className="admin_nav-top-right">
            <span><i className="ri-notification-line"></i></span>
            <span><i className="ri-settings-5-line"></i></span>
            <img src={BestSales} alt="" />
          </div>
        </div>
      </Container>
    </div>
   </header>
    <section className="admin_menu p-0">
      <Container>
        <Row>
          <div className="admin_navigation">
            <ul className="admin_menu-list">
              {
                admin_nav.map((item,index)=>(
                  <li className="admin_menu-item" key={index}>
                    <NavLink to={item.path} className={navClass=> navClass.isActive ? "active_admin-menu" : " "}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

        </Row>
      </Container>

    </section>
   </>
  )
}

export default AdminNav