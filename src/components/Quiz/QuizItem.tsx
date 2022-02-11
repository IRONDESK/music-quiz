import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import { PALLETS } from '../../constants';

import axios from 'axios';

import { getAuth, getArtistAlbum } from '../../API/getAPI';

function QuizItem() {
  const quizLength = 10;
  const navigate = useNavigate();
  const [question, setQuestion] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  // 앨범의 수록곡 불러오기
  const [album, setAlbum] = useState<any>({});
  const [albumName, setAlbumName] = useState<string>('');
  const [albumRelease, setAlbumRelease] = useState<string>('');
  const [albumImg, setAlbumImg] = useState('');
  const [musicList, setMusicList] = useState([]);
  const [ranNumsList, setRanNumsList] = useState<number>(0);

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
      setAlbumName(res.data.name);
      setAlbumRelease(res.data.release_date);
      setAlbumImg(res.data.images[0].url);
      setMusicList(res.data.tracks.items);   
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
      localStorage.setItem('correct-amount', String(correct));
    } else {
      setQuestion(question + 1);
    }
  };

  const correctClick = () => {
    setCorrect(correct + 1);
  };

  const playSong = (e:any) => {
    setTimeout(() => {
      e.target.currentTime = 999999;
    }, 400);
  };

  useEffect(() => {
    setRanNumsList(Math.ceil(Math.random()*musicList.length));  
  }, [question])
  
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
      {question >= 6 && question < 7 ? (
      <>
        {albumImg ? <ItemImg src={albumImg} /> : <LoadingImg>Loading...</LoadingImg>}{' '}
        <QuizWrap>
          <AlbumNameTxt>{albumName}</AlbumNameTxt>
          <ItemTxt>이 앨범의 발매연월은?</ItemTxt>
        </QuizWrap>
      </>
      ) : null}
      {question >= 7 && question < 10 ? (
        <>
        <ReactAudioPlayer
          style={{width: '140px'}}
          src={musicList[ranNumsList]['preview_url']}
          onPlay={playSong}
          autoPlay={false}
          controls
        />
        <ItemTxt>이 노래의 제목은?
          {"랜덤숫자" + ranNumsList}<br />
          {musicList[ranNumsList]['preview_url']}<br />
          {musicList[ranNumsList]['name']}
        </ItemTxt>
        </>
      ) : null}

      <BtnWrap>
        <ItemBtn
          style={{order: Math.ceil(Math.random() * 3)}}
          type="button"
          onClick={() => {
            correctClick();
            btnClick();
          }}
        >
          {question >= 6 && question < 7 ? (
          <>
          {albumRelease.split("-")[0]+"년 " + Number(albumRelease.split("-")[1]) + "월"}
          </>
          ) : null}
          {question >= 7 && question < 10 ? (
          <>
          {musicList[ranNumsList]['name']}
          </>
          ) : null}
          (정답)
        </ItemBtn>
        <ItemBtn
          style={{order: Math.ceil(Math.random() * 3)}}
          type="button"
          onClick={btnClick}>
          {question >= 6 && question < 7 ? (
          <>
          {Number(albumRelease.split("-")[0]) + 1 + "년 " + Number(albumRelease.split("-")[1]) + "월"}
          </>
          ) : null}
          {question >= 7 && question < 10 ? (
          <>
          {musicList[(ranNumsList > 0 ? ranNumsList - 1 : ranNumsList + 1)]['name']}
          </>
          ) : null}
        </ItemBtn>
        <ItemBtn
          style={{order: Math.ceil(Math.random() * 3)}}
          type="button"
          onClick={btnClick}>
          {question >= 6 && question < 7 ? (
          <>
          {albumRelease.split("-")[0] + "년 " + (Number(albumRelease.split("-")[1]) + 1) + "월"}
          </>
          ) : null}
          {question >= 7 && question < 10 ? (
          <>
          {musicList[(ranNumsList > 1 ? ranNumsList - 2 : ranNumsList + 2)]['name']}
          </>
          ) : null}
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
  font-family: 'Pretendard';
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
  font-size: 22px;
  font-weight: 600;
`;

const QuizWrap = styled.article`
  text-align: center;
`;

const AlbumNameTxt = styled.p`
  display: inline-block;
  margin-bottom: 12px;
  padding: 0 10px;
  background-color: ${PALLETS.BLACK};
  color: ${PALLETS.WHITE};
  font-size: 17px;
  font-weight: 500;
  line-height: 32px;
  border: 2px solid ${PALLETS.WHITE};
  border-radius: 10px;
  opacity: 0.8;
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
