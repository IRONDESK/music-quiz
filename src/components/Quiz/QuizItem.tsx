import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PALLETS, WIDTH } from '../../constants';
import axios from 'axios';

import { getAuth, getArtistAlbum } from '../../API/getAlbumID';
import Question from './Question';
import Answer from './Answer';

function QuizItem() {
  const quizLength: number = 7;
  const [question, setQuestion] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  // API GET
  const [data, setData] = useState<any>([]);
  const [randList, setRandList] = useState<any>([]);

  const getAlbum = async (artistId: string) => {
    const access_token: string = await getAuth();
    const albumId: any = await getArtistAlbum(artistId);

    for (let i = 0; i < 4; i++) {
      const api_url: string = `https://api.spotify.com/v1/albums/${albumId[i]}`;

      try {
        const res: any = await axios.get(api_url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        if (res.data.images.length === 0) {
          res.data.images.push({ url: 'icon/alterImg.png' });
        }
        const rand = Math.floor(Math.random() * res.data.tracks.items.length);
        setData((prevArray: any) => [...prevArray, res.data]);
        setRandList((prevArray: any) => [...prevArray, rand]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const targetId: any = localStorage.getItem('artist-id');
    getAlbum(targetId);
  }, []);

  if (data && data.length === 4) {
    return (
      <ItemWrap>
        <Correct>{correct ? 'Correct ' + correct : null}</Correct>
        <Progress max={quizLength} value={question} />
        <Question question={question} data={data} randList={randList} />
        <Answer
          question={question}
          setQuestion={setQuestion}
          correct={correct}
          setCorrect={setCorrect}
          data={data}
          randList={randList}
        />
      </ItemWrap>
    );
  } else {
    return null;
  }
}

export default QuizItem;

const ItemWrap = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Pretendard';
  @media screen and (max-width: ${WIDTH.TAB}) {
    height: 660px;
  }
`;

const Correct = styled.p`
  position: absolute;
  top: -50px;
  color: ${PALLETS.GREEN};
  font-size: 21px;
  font-weight: 500;
`;

const Progress = styled.progress`
  width: 500px;
  height: 17px;
  -webkit-appearance: none;
  @media screen and (max-width: ${WIDTH.TAB}) {
    width: 100%;
    padding: 0 30px;
  }

  ::-webkit-progress-bar {
    background-color: ${PALLETS.WHITE};
    border-radius: 20px;
  }

  ::-webkit-progress-value {
    background-color: ${PALLETS.GREEN};
    border-radius: 20px;
    transition: all 0.3s;
  }
`;
