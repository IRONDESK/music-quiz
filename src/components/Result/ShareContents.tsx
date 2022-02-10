import React from 'react';
import { PALLETS } from '../../constants';
import styled from 'styled-components';

function ShareContents() {
    const IconType = {
        kakao: '',
        facebook: 'https://cdn-icons-png.flaticon.com/512/20/20837.png',
        twitter: '',
        instagram: '',
    }
    const LinkTo = {
        kakao: 'https://kakao.com',
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
    }

    return (
    <>
    <script src="https://kit.fontawesome.com/19d00c3240.js"></script>
    <ShareButton
        href={LinkTo.kakao}
        style={{backgroundImage: IconType.kakao}}
    />
    <ShareButton
        href={LinkTo.facebook}
        style={{backgroundImage: IconType.facebook}}
    />
    <ShareButton
        href={LinkTo.twitter}
        style={{backgroundImage: IconType.twitter}}
    />
    <ShareButton
        href={LinkTo.instagram}
        style={{backgroundImage: IconType.instagram}}
    />
    </>
    );
}

const ShareButton = styled.a`
    display: inline-block;
    margin: 0 6px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: ${PALLETS.WHITE};
`;

export default ShareContents;
