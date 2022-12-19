import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';


const allProducts = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsData = async () => {
            const { data } = await axios.get('http://localhost:5000/allProducts')
            console.log(data)
            setProducts(data)
        }
        getProductsData()
    }, [])

    return (
        <>
           <Container  className="justify-content-center p-2">
               <h1 className='text-center'>Show All Products</h1>
               <hr />

               <Row>
                    {
                        products.map(product => {
                            return <Col md={6} lg={4} sm={12} key={product.id}>
                       {product} 
                            </Col>
                        })
                    }
               </Row>


           </Container>

           
        </>
    )
}

export default allProducts

// import React,{useState,useEffect}from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import axios from 'axios';
// import productImg from "../assets/images/BestSales01.png"
// function AllProducts() {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//       const getProductsData = async () => {
//           const { data } = await axios.get('http://localhost:5000/allProducts')
//           console.log(data)
//           setProducts(data)
//       }
//       getProductsData()
//   }, [])
//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="12">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Title</th>
//                   <th>Category</th>
//                   <th>Price</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* <tr>
//                   <td><img  src={productImg} alt="" /></td>
//                   <td>Asus</td>
//                   <td>BestSales</td>
//                   <td>1800</td>
//                   <td><button className="btn btn-danger">Delete</button></td>
//                 </tr> */}

//                 {
//                         products.map(product => {
//                             return <Col md={6} lg={4} sm={12} key={product.id}>
//                            {product} 
//                             </Col>
//                         })
//                     }
//               </tbody>
//             </table>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

// export default AllProducts;