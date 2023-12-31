import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImg from '../assets/img/about-img.jpg'
function About() {
    const aboutTitle = "Refund Assets Possible!";
    const aboutSubContent = "Formation for the purpose of recovering after losses. Financial freedom is here, let the money work for you, not the other way around. ";
    const aboutleftContentLinkText1 = "We formed a group at the latest Blockchain Life Dubai 2023.";
    const aboutleftContentLinkLink1 = "https://google.com";
    const aboutleftContentLinkText2 = "Let's get ready for financial independence and let's chase losses. ";
    const aboutleftContentLinkLink2 = "https://google.com";
    const aboutleftContentHeading = "Story about $RAP:";
    const aboutleftContentDesc = "In the shadowy corners of the digital world, a tale unfolds, one that whispers of power, intrigue, and unfathomable wealth. This is the story of the Refund Assets Possible ($RAP) token, a mysterious cryptocurrency entwined with the enigma of Elon Musk and the fabled Illuminati.";
    const aboutleftContentCh1T = "Chapter 1: The Genesis of RAP";
    const aboutleftContentCh1D = "In a secret meeting room, where the world's elite converge, a plan is hatched. The Illuminati, known for their influence over global events, decide to create a digital asset unlike any other. They seek the genius of Elon Musk, a visionary known for revolutionizing industries. Together, they create the $RAP token, a cryptocurrency designed to not only accumulate wealth but also to bestow power upon its holders.";
    const aboutChapterContens = [
        {
            id:1,
            title:'Chapter 2: The Allure of the Unknown',
            desc: 'Investors around the world hear murmurs of $RAP, a token shrouded in secrecy. Its connection with Musk and the Illuminati makes it irresistible. Those who dare to buy find themselves part of an exclusive circle, privy to knowledge and opportunities far beyond the ordinary.'
        },
        {
            id:2,
            title:'Chapter 3: The Transformation',
            desc: 'As $RAP token gains momentum, its holders experience a metamorphosis. Wealth accumulates at an unprecedented rate, granting them access to the inner sanctums of power and influence. They find themselves able to shape industries, sway political events, and even alter the course of history.'
        },
        {
            id:3,
            title:'Chapter 4: The New World Order',
            desc: 'With $RAP at the helm, a new era dawns. The token\'s holders, now the most influential figures on the planet, guide the world towards a future of their design. A future where technology and power intertwine, where the lines'
        }
    ]
  return (
    <div>
      <div className="about__area">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="about__left_content">
                       <div className="section__title">
                            <h2>{aboutTitle}</h2>
                            <p>{aboutSubContent}</p>
                       </div>
                        <div className="about__content_attr">
                                <a target='__blank' href={aboutleftContentLinkLink1}>{aboutleftContentLinkText1}</a>
                                <a target='__blank' href={aboutleftContentLinkLink2}>{aboutleftContentLinkText2}</a>
                        </div>
                        <h1>{aboutleftContentHeading}</h1>
                        <p>{aboutleftContentDesc}</p>
                        <div className="chapter__content">
                            <h5>{aboutleftContentCh1T}</h5>
                            <p>{aboutleftContentCh1D}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <figure className='about__right__img'>
                        <img src={AboutImg} alt="" />
                    </figure>
                </Col>
            </Row>
            <Row className="chapter__content__inner">
                {
                    aboutChapterContens.map((aboutChapterConten, index)=>(
                        <Col lg={4} key={index}>
                            <h5>{aboutChapterConten.title}</h5>
                            <p>{aboutChapterConten.desc}</p>
                        </Col>
                    ))
                }
                
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
