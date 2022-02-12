import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import { PALLETS } from '../../constants';

const Question = ({ question, albumImg, albumName, musicList, rand }: any) => {
  if (question >= 0 && question < 3) {
    return (
      <>
        {albumImg ? (
          <ItemImg src={albumImg} />
        ) : (
          <LoadingImg>Loading...</LoadingImg>
        )}{' '}
        <ItemTxt>이 앨범에 포함되어 있는 수록곡은?</ItemTxt>
      </>
    );
  } else if (question >= 3 && question < 6) {
    return (
      <>
        {albumImg ? (
          <ItemImg src={albumImg} />
        ) : (
          <LoadingImg>Loading...</LoadingImg>
        )}{' '}
        <AlbumNameTxt>{albumName}</AlbumNameTxt>
        <ItemTxt>이 수록곡이 포함되어 있는 앨범은?</ItemTxt>
      </>
    );
  } else if (question >= 6 && question < 7) {
    return (
      <>
        {albumImg ? (
          <ItemImg src={albumImg} />
        ) : (
          <LoadingImg>Loading...</LoadingImg>
        )}{' '}
        <QuizWrap>
          <AlbumNameTxt>{albumName}</AlbumNameTxt>
          <ItemTxt>이 앨범의 발매연월은?</ItemTxt>
        </QuizWrap>
      </>
    );
  } else {
    return (
      <>
        <ReactAudioPlayer
          style={{ width: '140px' }}
          src={musicList[rand]['preview_url']}
          onPlay={playSong}
          autoPlay={false}
          controls
        />
        <ItemTxt>
          이 노래의 제목은?
          {'랜덤숫자' + rand}
          <br />
          {musicList[rand]['preview_url']}
          <br />
          {musicList[rand]['name']}
        </ItemTxt>
      </>
    );
  }
};

const playSong = (e: any) => {
  setTimeout(() => {
    e.target.currentTime = 999999;
  }, 400);
};

export default Question;

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
