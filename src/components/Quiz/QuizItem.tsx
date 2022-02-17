import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PALLETS } from '../../constants';
import axios from 'axios';

import { getAuth, getArtistAlbum } from '../../API/getAlbumID';
import Question from './Question';
import Answer from './Answer';

function QuizItem() {
  const quizLength: number = 10;
  const [question, setQuestion] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  // API GET
  const [data, setData] = useState<any>([]);
  const [randList, setRandList] = useState<any>([]);
  const [trackLength, setTrackLength] = useState(0);

  const getAlbum = async (artistId: string) => {
    const access_token: string = await getAuth();
    const albumId: any = await getArtistAlbum(artistId);

    for (let i = 0; i < 3; i++) {
      const api_url: string = `https://api.spotify.com/v1/albums/${albumId[i]}`;

      try {
        const res: any = await axios.get(api_url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        // const rand = Math.floor(Math.random() * res.data.tracks.items.length);
        setTrackLength(res.data.tracks.items.length);
        setData((prevArray: any) => [...prevArray, res.data]);
        // setRandList((prevArray: any) => [...prevArray, rand]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  let targetArray:any = [];
  useEffect(() => {
    while (targetArray.length < 3) {
      targetArray.push(Math.floor(Math.random() * trackLength));
      let set:any = new Set(targetArray);
      setRandList( [...set]);
    };
  }, [data]);
  console.log("이거임", randList);
  

  useEffect(() => {
    const targetId: any = localStorage.getItem('artist-id');
    getAlbum(targetId);
  }, []);

  if (data.length === 3) {
    return (
      <ItemWrap>
        <Correct>정답 갯수 : {correct}</Correct>
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
`;

const Correct = styled.p`
  color: ${PALLETS.WHITE};
  position: absolute;
  top: -50px;
`;

const Progress = styled.progress`
  width: 500px;
  height: 10px;
  -webkit-appearance: none;

  ::-webkit-progress-bar {
    background-color: ${PALLETS.WHITE};
  }

  ::-webkit-progress-value {
    background-color: rgba(255, 0, 0, 0.8);
    transition: all 0.5s;
  }
`;
