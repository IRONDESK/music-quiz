import React from 'react';
import styled from 'styled-components';
import { PALLETS } from '../constants';

import QuizItem from '../components/Quiz/QuizItem';

function Quiz() {
  return (
    <QuizWrap>
      <QuizItem />
    </QuizWrap>
  );
}

export default Quiz;

const QuizWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${PALLETS.GRAY};
  display: flex;
  justify-content: center;
  align-items: center;
`;
