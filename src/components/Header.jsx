import { React } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    
         return(
        <header className="heading">
            <Navbar collapseOnSelect expand="xl">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="header-right-area ms-auto">
                            <div className="header-social-links">
                            <Nav>
                                    <ul>
                                        <li><a href="/">Etherscan</a></li>
                                        <li><a href="/">Dex Tools</a></li>
                                        <li><a href="/">Buy $RAP</a></li>
                                        <li><a href="/">Telegram</a></li>
                                        <li><a href="/">Twitter</a></li>
                                    </ul>
                            </Nav>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}