import React from 'react';
import styled from 'styled-components';
import { PALLETS, WIDTH } from '../../constants';
import Advertisement from './Advertisement';

function Footer() {
  return (
    <Wrap>
      <Powered>
        Powered by{' '}
        <a href="https://www.spotify.com/">
          <Logo src="icon/SpotifyLogo.png" />
        </a>
        API
      </Powered>
      <Create>오래규 | 손수철</Create>
      <Advertisement />
    </Wrap>
  );
}

const Wrap = styled.footer`
    margin: 35px 0;
    width: 768px;
    font-size: 16px;
    color: #888;
    @media screen and (max-width: ${WIDTH.TAB}) {
        width: 100%;
    }
`;
const Powered = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Create = styled.p`
  margin: 8px 0 40px;
`;
const Logo = styled.img`
  margin-left: 5px;
  width: 86px;
  filter: grayscale(100%);
`;

export default Footer;
