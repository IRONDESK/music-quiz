import React, { useEffect, useState } from 'react';
import { PALLETS, WIDTH} from '../../constants';
import styled from 'styled-components';
const {Kakao}:any = window;

function ShareContents() {
    const myPoint:any = localStorage.getItem('correct-amount');
    const artistName:any = localStorage.getItem('artist-name');

    const IconType = {
        kakao: 'icon/kakao-talk.png',
        instagram: 'icon/instagram.png',
    }
    
    useEffect(() => {
        if (!Kakao.isInitialized()) {
            Kakao.init('d44e634ecdedceddc7fce2985f0d7ccf');
            console.log(Kakao.isInitialized());
        }
    }, [])
    
    const shareKakao = () => {
        const sharedUrl = 'https://music-quizz.vercel.app';
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: "당신의 최애 아티스트, 얼마나 알고 있나요🎤",
                description: ("나의 최애 아티스트 " + artistName + 
                "해봤더니, 내 점수는 :" + myPoint +
                "점이 나왔어. 너의 점수도 공유해줘!🎶"),
                imageUrl: 'https://user-images.githubusercontent.com/87234410/155763125-e1c8f9cf-b147-4fd7-bc42-3c45ad786f41.jpg',
                link: {
                    webUrl: sharedUrl,
                    mobileWebUrl: sharedUrl,
                },
                },
                buttons: [
                {
                    title: '나도 테스트 해보기',
                    link: {
                    webUrl: sharedUrl,
                    mobileWebUrl: sharedUrl,
                    },
                },
                ],
            });
    };

    return (
    <>
    <script src="https://kit.fontawesome.com/19d00c3240.js"></script>
    <ShareButton
        color="#FFCB2F"
        onClick={shareKakao}
    >
        <IconImg src={IconType.kakao} />
    </ShareButton>
    <ShareButton
        color="linear-gradient(235deg, rgba(202,56,167,1) 13%, rgba(255,84,62,1) 50%, rgba(255,216,84,1) 95%);"
        href="https://instagram.com"
    >
        <IconImg src={IconType.instagram} />
    </ShareButton>
    </>
    );
}

const ShareButton = styled.a`
    cursor: pointer;
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
    @media screen and (max-width: ${WIDTH.TAB}) {
        width: 40px;
        height: 40px;
    }
`;
const IconImg = styled.img`
    position: absolute;
    width: 26px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: ${WIDTH.TAB}) {
        width: 22px;
    }
`;
export default ShareContents;
