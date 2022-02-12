import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PALLETS } from '../../constants';
import axios from 'axios';

import { getAuth, getArtistAlbum, getArtistOtherAlbum } from '../../API/getAPI';
import Question from './Question';
import Answer from './Answer';

function QuizItem() {
  const quizLength: number = 10;
  const [question, setQuestion] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  // API GET
  const [albumName, setAlbumName] = useState<string>('');
  const [albumRelease, setAlbumRelease] = useState<string>('');
  const [albumImg, setAlbumImg] = useState<string>('');
  const [musicList, setMusicList] = useState<any>([]);
  const [rand, setRand] = useState<number>(0);

  const getAlbum = async (artistId: string) => {
    const access_token: string = await getAuth();
    const albumId: string = await getArtistAlbum(artistId);
    const api_url: string = `https://api.spotify.com/v1/albums/${albumId}`;

    try {
      const res: any = await axios.get(api_url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setAlbumName(res.data.name);
      setAlbumRelease(res.data.release_date);
      setAlbumImg(res.data.images[0].url);
      setMusicList(res.data.tracks.items);
    } catch (err) {
      console.log(err);
    }
  };

  const [otherAlbum, setOtherAlbum] = useState<string[]>([]);
  const [otherMusic, setOtherMusic] = useState<string[]>([]);

  const getOtherAlbum = async (artistId: string) => {
    const access_token: string = await getAuth();
    const albumId: any = await getArtistOtherAlbum(artistId);
    setOtherAlbum([]);
    setOtherMusic([]);

    for (let i = 0; i < 2; i++) {
      const api_url: string = `https://api.spotify.com/v1/albums/${albumId[i]}`;
      try {
        const res = await axios.get(api_url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        const otherRand =
          Math.ceil(Math.random() * res.data.tracks.items.length) - 1;
        setOtherMusic((prevArray) => [
          ...prevArray,
          res.data.tracks.items[otherRand].name,
        ]);
        setOtherAlbum((prevArray) => [...prevArray, res.data.name]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const targetId: any = localStorage.getItem('artist-id');

    setRand(Math.ceil(Math.random() * musicList.length) - 1);
    getAlbum(targetId);
    getOtherAlbum(targetId);
  }, [question]);

  return (
    <ItemWrap>
      <Correct>정답 갯수 : {correct}</Correct>
      <Progress max={quizLength} value={question} />
      <Question
        question={question}
        albumImg={albumImg}
        albumName={albumName}
        musicList={musicList}
        rand={rand}
      />
      <Answer
        question={question}
        setQuestion={setQuestion}
        correct={correct}
        setCorrect={setCorrect}
        albumRelease={albumRelease}
        musicList={musicList}
        rand={rand}
      />
    </ItemWrap>
  );
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
