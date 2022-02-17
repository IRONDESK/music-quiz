import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PALLETS } from '../constants';
import styled, { keyframes } from 'styled-components';

import ResultContents from '../components/Result/ResultContents';
import ShareContents from '../components/Result/ShareContents';
import Footer from '../components/Layout/Footer';

function Result() {
  const navigate = useNavigate();
  const myPoint = localStorage.getItem('correct-amount');

  function goHome() {
    navigate('/');
  }

  return (
    <Wrap>
      <Header>
        <Container>
          <PointTxt>{myPoint}</PointTxt>
          <>정답 수</>
        </Container>
      </Header>

      <ContentsWrap>
        <ResultContents />

        <SubmitButton onClick={goHome}>처음으로</SubmitButton>
      </ContentsWrap>

      <ShareWrap>
        <ShareContents />
      </ShareWrap>

      <FooterWrap>
        <Footer />
      </FooterWrap>
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
  animation: ${sizeUp} 0.9s forwards;
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

const FooterWrap = styled.div`
  margin: 0 auto;
  width: 768px;
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
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
  border-radius: 100px;
`;

export default Result;
