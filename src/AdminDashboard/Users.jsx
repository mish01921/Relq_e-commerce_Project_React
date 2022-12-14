import React from 'react'
import { Container, Row, Col }  from "reactstrap";


function Users() {

  return (
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <h4 className="fw-bold">Users</h4>
                </Col>
                <Col lg="12" className="pt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Action</th>  
                            </tr>
                        </thead>   
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Users