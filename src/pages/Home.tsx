import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PALLETS, WIDTH } from '../constants';

import HeaderTitle from '../components/Home/HeaderTitle';
import ArtistBox from '../components/Home/ArtistBox';
import Footer from '../components/Layout/Footer';
import Advertisement from '../components/Layout/Advertisement';

function Home() {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const [selectedArtistName, setSelectedArtistName] = useState<string>("");
  const [modalControl, setModalControl] = useState<boolean>(false);

  function selectArtist(e: any) {
    const target = e.target.closest('label');
    if (target) {
      setSelectedArtist(target.dataset.spotifyid);
      setSelectedArtistName(target.dataset.artistname);
    }
  }

  function goStart() {
    if (selectedArtist) {
      navigate('/quiz');
      localStorage.setItem('artist-id', selectedArtist);
      localStorage.setItem('artist-name', selectedArtistName);
    } else {
      setModalControl(true);
    }
  }

  function setClose() {
    setModalControl(false);
  };

  const Modal = styled.article`
  display: ${ modalControl ? "flex" : "none" };
  position: fixed;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 400px;
  height: 200px;
  top: 50%;
  left: 50%;
  background-color: ${PALLETS.GREEN};
  font-size: 25px;
  font-weight: 600;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0 0 15px 3px ${PALLETS.GRAY};
  z-index: 1;
`;

  return (
  <Wrap>
    <Modal>
      아티스트를 선택해주세요.
      <CloseBtn onClick={setClose}>×</CloseBtn>
    </Modal>
    <Header>
      <HeaderTitle />
    </Header>
    
    <Contents>
      <ArtistWrap onClick={selectArtist}>
        <ArtistBox
          SpotifyID = "3Nrfpe0tUJi4K4DXYWgMUX"
          Name = "방탄소년단"
          ImageLink = "https://i.scdn.co/image/ab6761610000f17882a5d58059f81867b871d8b6"
        />
        <ArtistBox
          SpotifyID = "3HqSLMAZ3g3d5poNaI7GOU"
          Name = "아이유"
          ImageLink = "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg"
        />
        <ArtistBox
          SpotifyID = "4muJrGMndyYWqZtfk8OWy4"
          Name = "보아"
          ImageLink = "https://i.scdn.co/image/ab6761610000f178206c2ba8d14150ccc634765b"
        />
        <ArtistBox
          SpotifyID = "5snNHNlYT2UrtZo5HCJkiw"
          Name = "에픽하이"
          ImageLink = "https://i.scdn.co/image/ab6761610000f1787ab6a76808b6f77f5628d231"
        />
        <ArtistBox
          SpotifyID = "7f4ignuCJhLXfZ9giKT7rH"
          Name = "NCT127"
          ImageLink = "https://i.scdn.co/image/ab6761670000ecd41cfadde11f891e8889b15e4a"
        />
        <ArtistBox
          SpotifyID = "7jFUYMpMUBDL4JQtMZ5ilc"
          Name = "성시경"
          ImageLink = "https://i.scdn.co/image/ab6761610000e5ebb3c06b25c1c87dfcec00877d"
        />
        <ArtistBox
          SpotifyID = "2hRQKC0gqlZGPrmUKbcchR"
          Name = "SHINee"
          ImageLink = "https://i.scdn.co/image/ab67706c0000da84161330f59573a6b5bb402101"
        />
        <ArtistBox
          SpotifyID = "6dhfy4ByARPJdPtMyrUYJK"
          Name = "백예린"
          ImageLink = "https://i.scdn.co/image/ab67616d00001e0217ac1b81f7ed7da5d1ad98db"
        />
      </ArtistWrap>
        <AdWrap><Advertisement /></AdWrap>
      <MobileWrap>
        <SubmitButton onClick={goStart}>
          시작
        </SubmitButton>
        <Footer />
      </MobileWrap>
    </Contents>
  </Wrap>
  );
}

const Wrap = styled.section`
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: ${PALLETS.GRAY};
  font-family: 'Pretendard';
`;

const CloseBtn = styled.button`
  cursor: pointer;
  width: 38px;
  height: 38px;
  font-size: 33px;
  line-height: 37px;
  color: ${PALLETS.GREEN};
  border: none;
  border-radius: 100%;
  &:hover {
    background-color: ${PALLETS.GRAY};
  }
`;
const Header = styled.header`
  height: 30vh;
  background: ${PALLETS.BLACK};
  color: #fff;
`;
const Contents = styled.main`
  display: block;
  margin: 0 auto;
  padding: 25px 0;
  width: 768px;
  @media screen and (max-width: ${WIDTH.TAB}) {
    width: 100%;
  }
`;
const ArtistWrap = styled.article`
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: ${WIDTH.MID}) {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
  }
`;
const MobileWrap = styled.div`
  width: 100%;
  @media screen and (max-width: ${WIDTH.MID}) {
    position: fixed;
    padding-top: 20px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(30,30,30,0) 0%, rgba(30,30,30,0.8) 20%, rgba(30,30,30,1) 60%);
  }
`;
const AdWrap = styled.div`
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width: ${WIDTH.MID}) {
    margin-bottom: 0;
    padding-bottom: 190px;
  }
`;
const SubmitButton = styled.a`
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  width: 160px;
  height: 47px;
  background-color: ${PALLETS.WHITE};
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 1.76px;
  border-radius: 200px;
  transition: background-color .3s;
  &:hover {
    background-color: ${PALLETS.GREEN};
  }
`;

export default Home;
