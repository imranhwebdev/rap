import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import galleryImg1 from '../assets/img/gallery-img1.jpg'
import galleryImg2 from '../assets/img/gallery-img2.jpg'
function Gallery() {
  return (
    <div className='gallery__area'>
        <Container>
            <Row>
                <Col md={8}>
                    <img src={galleryImg1} alt="" />
                </Col>
                <Col md={4}>
                    <img src={galleryImg2} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Gallery
