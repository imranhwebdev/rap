import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterImg from '../assets/img/footer-img.jpg'
export default function Footer(){
    const footerSocials = [
        {
            socialText:'Etherscan',
            socialLink:'https://etherscan.io/token/0x6B7F3bA9e8506f2cf187f828AD0B6dFA8208fd75'
        },
        {
            socialText:'Dex Tools',
            socialLink:'google.com'
        },
        {
            socialText:'Use "Buy $RAP"',
            socialLink:'https://app.uniswap.org/tokens/ethereum/NATIVE?inputCurrency=0x6B7F3bA9e8506f2cf187f828AD0B6dFA8208fd75'
        },
        {
            socialText:'Telegram',
            socialLink:'https://t.me/rapcoineth'
        },
        {
            socialText:'Twitter',
            socialLink:'https://twitter.com/rapcoineth'
        },
    ]
    return(
        <footer className="footer">
           <Container>
            <Row className='align-items-center'>
                <Col md={12} className='text-center'>
                    <div className="footer-content">
                        <figure className='footer__top_img'>
                            <img src={FooterImg} alt="" />
                        </figure>
                        <div className="footer__social__links">
                            <ul>
                                {footerSocials.map((footerSocial, index)=>(
                                    <li key={index}><a href={footerSocial.socialLink}>{footerSocial.socialText}</a></li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
           </Container>
        </footer>
    )
}