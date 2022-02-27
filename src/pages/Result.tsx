import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PALLETS, WIDTH } from '../constants';
import styled, { keyframes } from 'styled-components';

import ResultContents from '../components/Result/ResultContents';
import ShareContents from '../components/Result/ShareContents';
import Footer from '../components/Layout/Footer';
import Advertisement from '../components/Layout/Advertisement';

function Result() {
  const navigate = useNavigate();
  const myPoint = localStorage.getItem('correct-amount');

  function goHome() {
    navigate('/');
  }

  return (
    <Wrap>
      <Header>
        <HeaderWrap>
          <PointTxt>{myPoint}</PointTxt>
          <>정답 수</>
        </HeaderWrap>
      </Header>
      <Contents>
        <ResultContents />
        <SubmitButton onClick={goHome}>처음으로</SubmitButton>
        <AdWrap>
          <Advertisement />
        </AdWrap>
      </Contents>
      <FooterWrap>
        <ShareContents />
        <Footer />
      </FooterWrap>
    </Wrap>
  );
}

// animation
const sizeUp = keyframes`
    0% { font-size: 16px };
    100% { font-size: 90px };
`;

const Wrap = styled.section`
  font-family: 'Pretendard';
`;
const Header = styled.header`
  height: 20vh;
  background: ${PALLETS.GREEN};
`;
const HeaderWrap = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  width: 768px;
  height: 20vh;
  color: ${PALLETS.BLACK};
  font-size: 19px;
  text-align: center;
  @media screen and (max-width: ${WIDTH.TAB}) {
    width: 100%;
  }
`;
const PointTxt = styled.span`
  display: block;
  margin: 10px 0;
  font-weight: 700;
  animation: ${sizeUp} 0.8s forwards;
`;
const Contents = styled.main`
  display: block;
  margin: 0 auto;
  padding: 25px 0;
  width: 768px;
  @media screen and (max-width: ${WIDTH.TAB}) {
    width: 100%;
    padding: 25px 20px 60px 20px;
    box-sizing: border-box;
  }
`;
const FooterWrap = styled.section`
  padding-top: 20px;
  text-align: center;
`;
const AdWrap = styled.div`
  margin-top: 30px;
  text-align: center;
`;
const SubmitButton = styled.a`
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  width: 160px;
  height: 47px;
  background-color: ${PALLETS.WHITE};
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 1.76px;
  border-radius: 200px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${PALLETS.GREEN};
  }
`;

export default Result;
