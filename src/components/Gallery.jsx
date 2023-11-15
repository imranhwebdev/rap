import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import galleryImg1 from '../assets/img/gallery-img1.jpg'
import galleryImg2 from '../assets/img/gallery-img12.jpg'
function Gallery() {
  return (
    <div className='gallery__area'>
        <Container>
            <Row>
                <Col sm={8}>
                    <figure>
                        <img src={galleryImg1} alt="" />
                    </figure>
                    
                </Col>
                <Col sm={4}>
                    <figure>
                        <img src={galleryImg2} alt="" />
                    </figure>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Gallery
