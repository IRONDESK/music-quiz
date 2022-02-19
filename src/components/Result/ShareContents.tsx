import React, { useEffect } from 'react';
import { PALLETS } from '../../constants';
import styled from 'styled-components';

function ShareContents() {
    const IconType = {
        kakao: 'icon/kakao-talk.png',
        instagram: 'icon/instagram.png',
    }
    const LinkTo = {
        kakao: 'https://kakao.com',
        instagram: 'https://instagram.com',
    }

    return (
    <>
    <script src="https://kit.fontawesome.com/19d00c3240.js"></script>
    <ShareButton
        color="#FFCB2F"
        href={LinkTo.kakao}
    >
        <IconImg src={IconType.kakao} />
    </ShareButton>
    <ShareButton
        color="linear-gradient(235deg, rgba(202,56,167,1) 13%, rgba(255,84,62,1) 50%, rgba(255,216,84,1) 95%);"
        href={LinkTo.instagram}
    >
        <IconImg src={IconType.instagram} />
    </ShareButton>
    </>
    );
}

const ShareButton = styled.a`
    position: relative;
    display: inline-block;
    margin: 0 6px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background: ${(props) => props.color};
    &:hover {
        opacity: 0.7;
    };
`;
const IconImg = styled.img`
    position: absolute;
    width: 26px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export default ShareContents;
