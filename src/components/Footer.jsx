import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function Footer(){
    return(
        <footer className="footer">
           <Container>
            <Row className='align-items-center'>
                <Col md={12} className='text-center'>
                    <div className="footer-top">
                        <p>© 2023 by PEPE. All rights reserved!</p>
                    </div>
                </Col>
            </Row>
           </Container>
        </footer>
    )
}