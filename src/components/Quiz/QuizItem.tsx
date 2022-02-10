import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PALLETS } from '../../constants';

import axios from 'axios';

import { getAuth, getArtistAlbum } from '../../API/getAPI';

function QuizItem() {
  const quizLength = 10;
  const navigate = useNavigate();
  const [question, setQuestion] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  // 앨범의 수록곡 불러오기
  const [album, setAlbum] = useState({});
  const [albumImg, setAlbumImg] = useState('');
  const [musicList, setMusicList] = useState([]);
  const getAlbum = async (artistId: String) => {
    const access_token = await getAuth();
    const albumId = await getArtistAlbum(artistId);

    const api_url = `https://api.spotify.com/v1/albums/${albumId}`;
    try {
      const res = await axios.get(api_url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setAlbum(res.data);
      setAlbumImg(res.data.images[0].url);
      setMusicList(res.data.tracks.items);
      console.log(typeof res.data.images[0].url);
      console.log(res.data.images[0].url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const targetId:any = localStorage.getItem('artist-id');
    getAlbum(targetId);
  }, [question]);

  const btnClick = () => {
    if (question === quizLength - 1) {
      navigate('/result');
      localStorage.setItem('corret-amount', String(correct));
    } else {
      setQuestion(question + 1);
    }
  };

  const correctClick = () => {
    setCorrect(correct + 1);
  };

  return (
    <ItemWrap>
      <Correct>정답 갯수 : {correct}</Correct>
      <Progress max={quizLength} value={question} />
      {question >= 0 && question < 3 ? (
        <>
          {albumImg ? <ItemImg src={albumImg} /> : <LoadingImg>Loading...</LoadingImg>}{' '}
          <ItemTxt>문제 Lorem ipsum dolor sit amet.</ItemTxt>
        </>
      ) : null}
      {question >= 3 && question < 6 ? <></> : null}
      {question >= 6 && question < 7 ? <></> : null}
      {question >= 7 && question < 10 ? <></> : null}

      <BtnWrap>
        <ItemBtn
          style={{order: Math.ceil(Math.random() * 3)}}
          type="button"
          onClick={() => {
            correctClick();
            btnClick();
          }}
        >
          정답
        </ItemBtn>
        <ItemBtn
          style={{order: Math.ceil(Math.random() * 3)}}
          type="button"
          onClick={btnClick}>
          오답1
        </ItemBtn>
        <ItemBtn
          style={{order: Math.ceil(Math.random() * 3)}}
          type="button"
          onClick={btnClick}>
          오답2
        </ItemBtn>
      </BtnWrap>
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
`;

const Correct = styled.p`
  color: ${PALLETS.WHITE};
  position: absolute;
  top: -50px;
`;

const ItemImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const LoadingImg = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${PALLETS.WHITE};
  font-size: 24px;
  color: ${PALLETS.BLACK};
  opacity: 0.7;
`;

const ItemTxt = styled.p`
  color: ${PALLETS.WHITE};
`;

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
