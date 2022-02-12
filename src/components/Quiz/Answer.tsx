import React from 'react';
import styled from 'styled-components';
import { PALLETS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Answer = ({
  question,
  setQuestion,
  correct,
  setCorrect,
  albumRelease,
  musicList,
  rand,
}: any) => {
  const quizLength: number = 10;
  const navigate = useNavigate();

  const btnClick = () => {
    if (question === quizLength - 1) {
      navigate('/result');
      localStorage.setItem('correct-amount', String(correct));
    } else {
      setQuestion(question + 1);
    }
  };

  const correctClick = () => {
    setCorrect(correct + 1);
  };

  const FirstAnswer = () => {
    if (question >= 0 && question < 3) {
      return <></>;
    } else if (question >= 3 && question < 6) {
      return <></>;
    } else if (question >= 6 && question < 7) {
      return (
        albumRelease.split('-')[0] +
        '년 ' +
        Number(albumRelease.split('-')[1]) +
        '월'
      );
    } else {
      return musicList[rand]['name'];
    }
  };

  const SecondAnswer = () => {
    if (question >= 0 && question < 3) {
      return <></>;
    } else if (question >= 3 && question < 6) {
      return <></>;
    } else if (question >= 6 && question < 7) {
      return (
        Number(albumRelease.split('-')[0]) +
        1 +
        '년 ' +
        Number(albumRelease.split('-')[1]) +
        '월'
      );
    } else {
      return musicList[rand > 0 ? rand - 1 : rand + 1]['name'];
    }
  };

  const ThirdAnswer = () => {
    if (question >= 0 && question < 3) {
      return <></>;
    } else if (question >= 3 && question < 6) {
      return <></>;
    } else if (question >= 6 && question < 7) {
      return (
        albumRelease.split('-')[0] +
        '년 ' +
        (Number(albumRelease.split('-')[1]) + 1) +
        '월'
      );
    } else {
      return musicList[rand > 1 ? rand - 2 : rand + 2]['name'];
    }
  };
  return (
    <BtnWrap>
      <ItemBtn
        style={{ order: Math.ceil(Math.random() * 3) }}
        onClick={() => {
          correctClick();
          btnClick();
        }}
      >
        {FirstAnswer()}(정답)
      </ItemBtn>
      <ItemBtn
        style={{ order: Math.ceil(Math.random() * 3) }}
        onClick={btnClick}
      >
        {SecondAnswer()}
      </ItemBtn>
      <ItemBtn
        style={{ order: Math.ceil(Math.random() * 3) }}
        onClick={btnClick}
      >
        {ThirdAnswer()}
      </ItemBtn>
    </BtnWrap>
  );
};

export default Answer;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ItemBtn = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  border: none;
  background-color: ${PALLETS.WHITE};
  border-radius: 200px;
  transition: all 0.3s;

  &:hover {
    background-color: inherit;
    border: 1px solid ${PALLETS.WHITE};
    color: ${PALLETS.WHITE};
  }
`;
