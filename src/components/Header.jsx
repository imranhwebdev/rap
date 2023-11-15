import { React } from 'react'
import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    const headerSocials = [
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