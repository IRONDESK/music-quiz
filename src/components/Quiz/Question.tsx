import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import { PALLETS, WIDTH } from '../../constants';

const Question = ({ question, data, randList }: any) => {
  if (question >= 0 && question < 2) {
    return (
      <>
        <AlbumWrap>
          <AlbumNameTxt>{data[question % 4].name}</AlbumNameTxt>
          <AlbumImg src={data[question % 4].images[0].url} />
        </AlbumWrap>
        <ItemTxt>이 앨범에 포함되어 있는 수록곡은?</ItemTxt>
      </>
    );
  } else if (question >= 2 && question < 4) {
    return (
      <>
        <ItemTxt>
          <big>
            {data[question % 4].tracks.items[randList[question % 4]].name}
          </big>
          <br />이 수록곡이 포함되어 있는 앨범은?
        </ItemTxt>
      </>
    );
  } else if (question >= 4 && question < 5) {
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
        <AudioWrap>
          <ReactAudioPlayer
            style={{ width: '140px' }}
            src={
              data[question % 4].tracks.items[randList[question % 4]]
                .preview_url
            }
            onPlay={playSong}
            autoPlay={false}
            controls
          />
          <LicenseTxt>
            (이 음원은 Spotify Open API에서 제공하는 미리듣기입니다. )
          </LicenseTxt>
        </AudioWrap>
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
  @media screen and (max-width: ${WIDTH.TAB}) {
    width: 260px;
    height: 260px;
  }
`;

const AlbumImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
  @media screen and (max-width: ${WIDTH.TAB}) {
    width: 260px;
    height: 260px;
  }
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
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 25%,
    rgba(0, 0, 0, 1) 100%
  );
  color: ${PALLETS.WHITE};
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  box-sizing: border-box;
`;

const AudioWrap = styled.div`
  text-align: center;
`;

const LicenseTxt = styled.p`
  margin-top: 15px;
  text-align: center;
  color: ${PALLETS.WHITE};
  font-size: 12px;
  opacity: 0.6;
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
