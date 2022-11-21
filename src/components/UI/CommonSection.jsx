import React from 'react'
import { Container } from "reactstrap"
import "../../styles/common-section.css"

function CommonSection({ title }) {
    return (
        <section className="common_section">
            <Container>
                <h1>{title}</h1>
            </Container>
        </section>
    )
}

export default CommonSection;