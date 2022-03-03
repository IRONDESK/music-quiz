import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PALLETS, WIDTH } from '../constants';
import styled, { keyframes } from 'styled-components';

import ResultContents from '../components/Result/ResultContents';
import ShareContents from '../components/Result/ShareContents';
import Footer from '../components/Layout/Footer';

function Result() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string | null>(null);
  const myPoint:number = Number(localStorage.getItem('correct-amount'));

  function goHome() {
    navigate('/');
  }

  useEffect(():any => {
      setTitle(TitleMsg);
  }, []);

  function TitleMsg ():any {
      if ( myPoint == 7 ) {
          return (<>반박불가 찐리얼 팬</>);
      } else if ( myPoint >= 6 ) {
          return (<>이 정도면 과몰입 팬</>);
      } else if ( myPoint >= 5 ) {
          return (<>아슬아슬 과몰입의 경계</>);
      } else if ( myPoint >= 3 ) {
          return (<>팬인 것 같지만</>);
      } else if ( myPoint >= 0 ) {
          return (<>평범한 시민</>);
      }
  };

  return (
    <Wrap>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Contents>
        <ResultContents />
        <SubmitButton onClick={goHome}>처음으로</SubmitButton>
      </Contents>
      <FooterWrap>
        <ShareContents />
        <Footer />
      </FooterWrap>
    </Wrap>
  );
}

// animation
const sizeUp58 = keyframes`
    0% { font-size: 16px };
    100% { font-size: 58px };
`;
const sizeUp43 = keyframes`
    0% { font-size: 16px };
    100% { font-size: 43px };
`;

const Wrap = styled.section`
  font-family: 'Pretendard';
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16vh;
  background: ${PALLETS.GREEN};
`;
const Title = styled.h3`
    display: block;
    font-weight: 700;
    color: ${PALLETS.BLACK};
    word-break: keep-all;
    text-align: center;
    font-family: 'KNPSB';
    animation: ${sizeUp58} 0.8s forwards;
    @media screen and (max-width: ${WIDTH.TAB}) {
      font-size: 43px;
      animation: ${sizeUp43} 0.8s forwards;
    }
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
const SubmitButton = styled.a`
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
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
