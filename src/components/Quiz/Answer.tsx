import React from 'react';
import styled from 'styled-components';
import { PALLETS, WIDTH } from '../../constants';
import { useNavigate } from 'react-router-dom';

import { getRandom } from '../../API/getAlbumID';

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
  const quizLength: number = 7;
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
    if (question && question >= 0 && question < 2) {
      return data[question % 4].tracks.items[randList[question % 4]].name;
    } else if (question >= 2 && question < 4) {
      return (
        <>
          <AnswerImg src={data[question % 4].images[0].url} />
          {data[question % 4].name}
        </>
      );
    } else if (question >= 4 && question < 5) {
      return (
        data[0].release_date.split('-')[0] +
        '년 ' +
        Number(data[0].release_date.split('-')[1]) +
        '월'
      );
    } else {
      return data[question % 4].tracks.items[randList[question % 4]].name;
    }
  };

  const SecondAnswer = () => {
    function qType1() {
      if (question % 4 === 0) {
        return data[1].tracks.items[getRandom(data[1].tracks.items.length)]
          .name;
      } else if (question % 4 === 1) {
        return data[2].tracks.items[getRandom(data[2].tracks.items.length)]
          .name;
      } else {
        return null;
      }
    }

    function qType2() {
      if (question % 4 === 2) {
        return (
          <>
            <AnswerImg src={data[3].images[0].url} />
            {data[3].name}
          </>
        );
      } else if (question % 4 === 3) {
        return (
          <>
            <AnswerImg src={data[0].images[0].url} />
            {data[0].name}
          </>
        );
      } else {
        return null;
      }
    }

    function qType3() {
      return (
        data[0].release_date.split('-')[0] +
        '년 ' +
        (Number(data[0].release_date.split('-')[1] - 1) !== 0
          ? Number(data[0].release_date.split('-')[1] - 1)
          : 12) +
        '월'
      );
    }

    function qType4() {
      if (question % 4 === 1) {
        return data[3].tracks.items[getRandom(data[3].tracks.items.length)]
          .name;
      } else if (question % 4 === 2) {
        return data[0].tracks.items[getRandom(data[0].tracks.items.length)]
          .name;
      } else {
        return null;
      }
    }

    if (question >= 0 && question < 2) {
      return qType1();
    } else if (question >= 2 && question < 4) {
      return qType2();
    } else if (question >= 4 && question < 5) {
      return qType3();
    } else {
      return qType4();
    }
  };

  const ThirdAnswer = () => {
    function qType1() {
      if (question % 4 === 0) {
        return data[2].tracks.items[getRandom(data[2].tracks.items.length)]
          .name;
      } else if (question % 4 === 1) {
        return data[3].tracks.items[getRandom(data[3].tracks.items.length)]
          .name;
      } else {
        return null;
      }
    }

    function qType2() {
      if (question % 4 === 2) {
        return (
          <>
            <AnswerImg src={data[1].images[0].url} />
            {data[1].name}
          </>
        );
      } else if (question % 4 === 3) {
        return (
          <>
            <AnswerImg src={data[2].images[0].url} />
            {data[2].name}
          </>
        );
      } else {
        return null;
      }
    }

    function qType3() {
      return (
        Number(data[0].release_date.split('-')[0]) -
        1 +
        '년 ' +
        Number(data[0].release_date.split('-')[1]) +
        '월'
      );
    }

    function qType4() {
      if (question % 4 === 1) {
        return data[2].tracks.items[getRandom(data[2].tracks.items.length)]
          .name;
      } else if (question % 4 === 2) {
        return data[3].tracks.items[getRandom(data[3].tracks.items.length)]
          .name;
      } else {
        return null;
      }
    }

    if (question >= 0 && question < 2) {
      return qType1();
    } else if (question >= 2 && question < 4) {
      return qType2();
    } else if (question >= 4 && question < 5) {
      return qType3();
    } else {
      return qType4();
    }
  };

  return (
    <BtnWrap>
      <ItemBtn
        style={{
          order: Math.ceil(Math.random() * 3),
          marginTop: question >= 2 && question < 4 ? '110px' : '',
        }}
        onClick={AnswerClick}
      >
        {FirstAnswer()}
      </ItemBtn>
      <ItemBtn
        style={{
          order: Math.ceil(Math.random() * 3),
          marginTop: question >= 2 && question < 4 ? '110px' : '',
        }}
        onClick={NotAnswerClick}
      >
        {SecondAnswer()}
      </ItemBtn>
      <ItemBtn
        style={{
          order: Math.ceil(Math.random() * 3),
          marginTop: question >= 2 && question < 4 ? '110px' : '',
        }}
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
  @media screen and (max-width: ${WIDTH.TAB}) {
    padding: 0 20px;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
  }
`;

const ItemBtn = styled.button`
  cursor: pointer;
  position: relative;
  margin: 0 12px;
  padding: 0 7px;
  height: 50px;
  flex: 1;
  background-color: ${PALLETS.WHITE};
  font-size: 19px;
  font-weight: 500;
  font-family: 'Pretendard';
  border: none;
  border-radius: 200px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -webkit-text-fill-color: ${PALLETS.BLACK};
  transition: all 0.3s;
  &:hover {
    background-color: ${PALLETS.GREEN};
    color: ${PALLETS.BLACK};
    img {
      border: 5px solid ${PALLETS.GREEN};
    }
  }
  @media screen and (max-width: ${WIDTH.TAB}) {
    flex: none;
    &:hover {
      background-color: ${PALLETS.WHITE};
      color: inherit;
      img {
        border: none;
      }
    }
  }
`;

const AnswerImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -115px);
  width: 100px;
  height: 100px;
  border-radius: 5px;
  box-sizing: border-box;
`;
