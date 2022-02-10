import React, { useState } from 'react';
import { PALLETS } from '../constants';
import styled, { keyframes } from 'styled-components';

import ResultContents from '../components/Result/ResultContents';
import ShareContents from '../components/Result/ShareContents';

function Result() {
  const Point = localStorage.getItem('correct-amount');
  
  return (
  <Wrap>
    <Header>
      <Container>
        <PointTxt>{Point}</PointTxt>
        <>정답 수</>
      </Container>
    </Header>

    <ContentsWrap>
      <ResultContents Point={Point} />
    </ContentsWrap>

    <ShareWrap>
      <ShareContents />
    </ShareWrap>

    <Footer>
      제작
    </Footer>
  </Wrap>
  );
}

// animation
const sizeUp = keyframes`
    0% { font-size: 16px };
    100% { font-size: 100px };
`;

const Wrap = styled.section`
  position: relative;
  font-family: 'Pretendard';
  height: 100vh;
  background: ${PALLETS.GRAY};
`;
const Header = styled.header`
  height: 30vh;
  background: ${PALLETS.BLACK};
  color: #fff;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 768px;
  height: 30vh;
  color: #fff;
  text-align: center;
`;
const PointTxt = styled.span`
  display: block;
  margin: 10px 0;
  font-weight: 700;
  animation: ${sizeUp} .9s forwards;
`;
const ContentsWrap = styled.main`
  display: block;
  margin: 10px auto;
  padding: 20px 0;
  width: 768px;
`;
const ShareWrap = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  width: 768px;
  text-align: center;
  `;
const Footer = styled.footer`
  position: absolute;
  margin: 35px auto;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 768px;
  font-size: 20px;
  color: #888;
  text-align: center;
`;

export default Result;