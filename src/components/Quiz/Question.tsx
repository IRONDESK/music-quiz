import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import { PALLETS, WIDTH } from '../../constants';

const Question = ({ question, data, randList }: any) => {
  if (question >= 0 && question < 3) {
    return (
      <>
        <AlbumWrap>
          <AlbumNameTxt>{data[question % 3].name}</AlbumNameTxt>
          <AlbumImg src={data[question % 3].images[0].url} />
        </AlbumWrap>
        <ItemTxt>이 앨범에 포함되어 있는 수록곡은?</ItemTxt>
      </>
    );
  } else if (question >= 3 && question < 6) {
    return (
      <>
        <ItemTxt>
          <big>{data[question % 3].tracks.items[randList[question % 3]].name}</big><br />
          이 수록곡이 포함되어 있는 앨범은?
        </ItemTxt>
      </>
    );
  } else if (question >= 6 && question < 7) {
    return (
      <>
        <AlbumWrap>
          <AlbumNameTxt>{data[0].name}</AlbumNameTxt>
          <AlbumImg src={data[0].images[0].url} />
        </AlbumWrap>
        <QuizWrap>
          <ItemTxt>이 앨범의 발매연월은?</ItemTxt>
        </QuizWrap>
      </>
    );
  } else {
    return (
      <>
        <ReactAudioPlayer
          style={{ width: '140px' }}
          src={
            data[question % 3].tracks.items[randList[question % 3]].preview_url
          }
          onPlay={playSong}
          autoPlay={false}
          controls
        />
        <ItemTxt>이 노래의 제목은?</ItemTxt>
      </>
    );
  }
};

const playSong = (e: any) => {
  setTimeout(() => {
    e.target.currentTime = 9999999;
  }, 380);
};

export default Question;

const AlbumWrap = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
`;

const AlbumImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;
const AlbumNameTxt = styled.p`
  position: absolute;
  display: flex;
  padding: 15px 8px;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 50%;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 25%, rgba(0,0,0,1) 100%);
  color: ${PALLETS.WHITE};
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  box-sizing: border-box;
`;


const ItemTxt = styled.p`
  margin-bottom: 12px;
  color: ${PALLETS.WHITE};
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  line-height: 38px;
  big {
    font-size: 34px;
  }
`;

const QuizWrap = styled.article`
  text-align: center;
`;
