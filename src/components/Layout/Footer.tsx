import React from 'react';
import styled from 'styled-components';


function Footer() {
    return (
    <Wrap>
        <Powered>
            Powered by <a href="https://www.spotify.com/"><Logo src="icon/SpotifyLogo.png" /></a>API
        </Powered>
        <Create>
            오래규 | 손수철
        </Create>
    </Wrap>);
}

const Wrap = styled.footer`
    margin: 35px 0;
    width: 768px;
    font-size: 16px;
    color: #888;
`;
const Powered = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const Create = styled.p`
    margin: 8px 0;
    text-align: center;
`;
const Logo = styled.img`
    margin-left: 5px;
    width: 86px;
    filter: grayscale(100%);
`;

export default Footer;
