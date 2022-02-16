import React from 'react';
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
        data[0].release_date.split('-')[1] +
        '월'
      );
    } else {
      return data[question % 3].tracks.items[randList[question % 3]].name;
    }
  };

  // const SecondAnswer = () => {
  //   if (question >= 0 && question < 3) {
  //     return otherMusic.length > 0 ? otherMusic[0] : null;
  //   } else if (question >= 3 && question < 6) {
  //     return (
  //       <>
  //         {otherAlbum[0]}
  //         {otherImg ? (
  //           <AnswerImg src={otherImg[0]} />
  //         ) : (
  //           <LoadingImg>Loading...</LoadingImg>
  //         )}{' '}
  //       </>
  //     );
  //   } else if (question >= 6 && question < 7) {
  //     return (
  //       Number(albumRelease.split('-')[0]) +
  //       1 +
  //       '년 ' +
  //       Number(albumRelease.split('-')[1]) +
  //       '월'
  //     );
  //   } else {
  //     return musicList[rand > 0 ? rand - 1 : rand + 1]['name'];
  //   }
  // };

  // const ThirdAnswer = () => {
  //   if (question >= 0 && question < 3) {
  //     return otherMusic.length > 0 ? otherMusic[1] : null;
  //   } else if (question >= 3 && question < 6) {
  //     return (
  //       <>
  //         {otherAlbum[1]}
  //         {otherImg ? (
  //           <AnswerImg src={otherImg[1]} />
  //         ) : (
  //           <LoadingImg>Loading...</LoadingImg>
  //         )}{' '}
  //       </>
  //     );
  //   } else if (question >= 6 && question < 7) {
  //     return (
  //       albumRelease.split('-')[0] +
  //       '년 ' +
  //       (Number(albumRelease.split('-')[1]) + 1) +
  //       '월'
  //     );
  //   } else {
  //     return musicList[rand > 1 ? rand - 2 : rand + 2]['name'];
  //   }
  // };

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
        {/* {SecondAnswer()} */}
      </ItemBtn>
      <ItemBtn
        style={{ order: Math.ceil(Math.random() * 3) }}
        onClick={NotAnswerClick}
      >
        {/* {ThirdAnswer()} */}
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
