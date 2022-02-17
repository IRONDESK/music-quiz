import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PALLETS } from '../../constants';
import { useNavigate } from 'react-router-dom';

type props = {
  question: number;
  setQuestion: any;
  correct: number;
  setCorrect: any;
  data: any;
  randList: number[];
};

const Answer = ({
  question,
  setQuestion,
  correct,
  setCorrect,
  data,
  randList,
}: props) => {
  const quizLength: number = 10;
  const navigate = useNavigate();

  const goNextStage = () => {
    if (question === quizLength - 1) {
      navigate('/result');
    } else {
      setQuestion(question + 1);
    }
  };

  const NotAnswerClick = () => {
    localStorage.setItem('correct-amount', String(correct));
    goNextStage();
  };

  const AnswerClick = () => {
    setCorrect(correct + 1);
    localStorage.setItem('correct-amount', String(correct + 1));
    goNextStage();
  };

  const FirstAnswer = () => {
    if (question >= 0 && question < 3) {
      return data[question % 3].tracks.items[randList[question % 3]].name;
    } else if (question >= 3 && question < 6) {
      return (
        <>
          <AnswerImg src={data[question % 3].images[0].url} />
          {data[question % 3].name}
        </>
      );
    } else if (question >= 6 && question < 7) {
      return (
        data[0].release_date.split('-')[0] +
        '년 ' +
        Number(data[0].release_date.split('-')[1]) +
        '월'
      );
    } else {
      return data[question % 3].tracks.items[randList[question % 3]].name;
    }
  };

  const SecondAnswer = () => {
    function qType1() {
      if (!question && (question % 3 === 0)) {
        return (data[1].tracks.items[randList[question % 3]].name);
      } else if (question % 3 === 1) {
        return (data[2].tracks.items[randList[question % 3]].name);
      } else if (question % 3 === 2) {
        return (data[0].tracks.items[randList[0]].name);
      } else {
        return null;
      };
    }

    function qType2() {
      if (question % 3 === 0) {
        return (
          <>
          <AnswerImg src={data[1].images[0].url} />
          {data[1].name};
          </>
          );
      } else if (question % 3 === 1) {
        return (
          <>
          <AnswerImg src={data[2].images[0].url} />
          {data[2].name};
          </>
          );
      } else if (question % 3 === 2) {
        return (
          <>
          <AnswerImg src={data[0].images[0].url} />
          {data[0].name};
          </>
          );
      } else {
        return null;
      };
    };

    function qType3() {
      return (
        data[0].release_date.split('-')[0] +
        '년 ' +
        (Number(data[0].release_date.split('-')[1] - 1) !== 0 ? Number(data[0].release_date.split('-')[1] - 1) : 12) +
        '월'
      );
    };

    function qType4() {
      if (question % 3 === 0) {
        return data[1].tracks.items[randList[question % 3]].name;
      } else if (question % 3 === 1) {
        return data[2].tracks.items[randList[question % 3]].name; 
      } else if (question % 3 === 2) {
        return data[0].tracks.items[randList[question % 3]].name; 
      } else {
        return null;
      };
    }

    
    if (question >= 0 && question < 3) {      
      return qType1();
    } else if (question >= 3 && question < 6) {      
      return qType2();
    } else if (question >= 6 && question < 7) {      
      return qType3();
    } else {      
      return qType4();
    }
  };

  const ThirdAnswer = () => {
    function qType1() {
      if (!question && (question % 3 === 0)) {
        return (data[2].tracks.items[randList[1]].name);
      } else if (question % 3 === 1) {
        return (data[0].tracks.items[randList[question % 3]].name);
      } else if (question % 3 === 2) {
        return (data[1].tracks.items[randList[0]].name);
      } else {
        return null;
      };
    };

    function qType2() {
      if (question % 3 === 0) {
        return (
          <>
          <AnswerImg src={data[2].images[0].url} />
          {data[2].name};
          </>
          );
      } else if (question % 3 === 1) {
        return (
          <>
          <AnswerImg src={data[0].images[0].url} />
          {data[0].name};
          </>
          );
      } else if (question % 3 === 2) {
        return (
          <>
          <AnswerImg src={data[1].images[0].url} />
          {data[1].name};
          </>
          );
      } else {
        return null;
      };
    };

    function qType3() {
      return (
        (Number(data[0].release_date.split('-')[0]) - 1) +
        '년 ' +
        Number(data[0].release_date.split('-')[1]) +
        '월'
      );
    };

    function qType4() {
      if (question % 3 === 0) {
        return data[2].tracks.items[randList[question % 3]].name;
      } else if (question % 3 === 1) {
        return data[0].tracks.items[0].name; 
      } else if (question % 3 === 2) {
        return data[1].tracks.items[randList[question % 3]].name; 
      } else {
        return null;
      };
    }

    if (question >= 0 && question < 3) {
      return qType1();
    } else if (question >= 3 && question < 6) {
      return qType2();
    } else if (question >= 6 && question < 7) {
      return qType3();
    } else {
      return qType4();
    }
  };

  return (
    <BtnWrap>
      <ItemBtn
        style={{ order: Math.ceil(Math.random() * 3) }}
        onClick={AnswerClick}
      >
        {FirstAnswer()}(정답)
      </ItemBtn>
      <ItemBtn
        style={{ order: Math.ceil(Math.random() * 3) }}
        onClick={NotAnswerClick}
      >
        {SecondAnswer()}
      </ItemBtn>
      <ItemBtn
        style={{ order: Math.ceil(Math.random() * 3) }}
        onClick={NotAnswerClick}
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
  position: relative;
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
    border: 2px solid ${PALLETS.WHITE};
    color: ${PALLETS.WHITE};
  }
`;

const AnswerImg = styled.img`
  position: absolute;
  top: -110px;
  left: 50%;
  transform: translate(-50%);
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
`;
