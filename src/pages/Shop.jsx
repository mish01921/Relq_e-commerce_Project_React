import React,{useState} from 'react';
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet"
import {Col, Container, Row} from "reactstrap"
import "../styles/shop.css"
import products from "../assets/data/products"
import ProductList from "../components/UI/ProductList"


function Shop() {

  const [productsData,setProductsData] = useState(products);

  const handleFilter = e => {
    const filterValue = e.target.value
    if(filterValue === "Laptop") {
      const filteredProducts = products.filter(item => item.category === "Laptop" )
      setProductsData(filteredProducts)
    }

    if(filterValue === "BestSales") {
      const filteredProducts = products.filter(item => item.category === "BestSales" )

      setProductsData(filteredProducts)
    }

    if(filterValue === "Accessories") {
      const filteredProducts = products.filter(item => item.category === "Accessories" )
      setProductsData(filteredProducts)
    }
  }

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchProducts)
  }

  return (
   <Helmet title="Shop">
    <CommonSection  title="Products" />

    <section>
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="filter_widget">
              <select onChange={handleFilter}>
                <option>Filtered by Category</option>
                <option value="Laptop">Laptop</option>
                <option value="BestSales">BestSales</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="6" className="text-end">
          </Col>
          <Col lg="6" md="12">
            <div className="search_box">
              <input
               type="text" 
               placeholder="Search...."
               onChange={handleSearch}
               />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section  className="pt-0">
      <Container>
        <Row> 
          {
            productsData.length === 0 ? ( <h1 className="text-center fs-4 " >Products not found <span role="img" aria-label="Smile">&#128542;</span>	</h1>  
            ) : (
              <ProductList data={productsData} />
            )}
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Shop;