import React from 'react';
import { WIDTH } from '../../constants';
import styled, { keyframes } from 'styled-components';

function HeaderTitle() {
    return (
    <Wrap>
        <MainMsg>
        당신의 최애 아티스트, <Strong>얼마나 알고 있나요</Strong>
        </MainMsg>
        <SubMsg>
        아티스트를 선택하고 몰입점수를 측정하세요
        </SubMsg>
    </Wrap>
    );
}

// animation
const spacing = keyframes`
    0% { letter-spacing: 7px };
    100% { letter-spacing : 0 };
`;
const topFadein = keyframes`
    0% { 
        transform: translateY(-15px);
    };
    100% {
        opacity: 1;
        transform: translateY(0);
    };
`;

// style
const Wrap = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 768px;
    height: 30vh;
    color: #fff;
    @media screen and (max-width: ${WIDTH.TAB}) {
        width: 100%; 
        padding: 0 20px;
        box-sizing: border-box;
    }
`;
const MainMsg = styled.h1`
    display: block;
    padding: 20px 0;
    font-size: 34px;
    text-align: center;
    line-height: 49px;
    animation: ${spacing} 1.3s;
    font-family: 'ROKABold';
    @media screen and (max-width: ${WIDTH.TAB}) {
        animation: none;
    }
`;
const SubMsg = styled.h2`
    display: block;
    padding: 5px 0;
    font-size: 23px;
    text-align: center;
    line-height: 29px;
    opacity: 0;
    word-break: keep-all;
    animation: ${topFadein} 1s forwards;
    animation-delay: .5s;
`;
const Strong = styled.span`
    font-size: 115%;
    font-weight: 800;
    @media screen and (max-width: ${WIDTH.TAB}) {
        display: block;
    }
`;


export default HeaderTitle;