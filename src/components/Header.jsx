import { React } from 'react'
import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    const headerSocials = [
        {
            socialText:'Etherscan',
            socialLink:'google.com'
        },
        {
            socialText:'Dex Tools',
            socialLink:'google.com'
        },
        {
            socialText:'Use "Buy $RAP"',
            socialLink:'google.com'
        },
        {
            socialText:'Telegram',
            socialLink:'google.com'
        },
        {
            socialText:'Twitter',
            socialLink:'google.com'
        },
    ]
    return(
        <header className="heading">
            <Navbar>
                <Container>
                    <div className="header-right-area ms-auto">
                        <div className="header-social-links">
                            <ul>
                                {headerSocials.map((headerSocial, index)=>(
                                    <li key={index}><a href={headerSocial.socialLink}>{headerSocial.socialText}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
}