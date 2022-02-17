import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PALLETS } from '../constants';

import HeaderTitle from '../components/Home/HeaderTitle';
import ArtistBox from '../components/Home/ArtistBox';
import Footer from '../components/Layout/Footer';

function Home() {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState<string>('');

  function selectArtist(e: any) {
    const target = e.target.closest('label');
    if (target) {
      setSelectedArtist(target.dataset.spotifyid);
    }
  }

  function goStart() {
    if (selectedArtist) {
      navigate('/quiz');
      localStorage.setItem('artist-id', selectedArtist);
    } else {
      window.alert('아티스트를 선택해주세요.');
    }
  }

  return (
    <Wrap>
      <Header>
        <HeaderTitle />
      </Header>

      <Contents>
        <ArtistWrap onClick={selectArtist}>
          <ArtistBox
            SpotifyID="3Nrfpe0tUJi4K4DXYWgMUX"
            Name="방탄소년단"
            ImageLink="https://i.scdn.co/image/ab6761610000f17882a5d58059f81867b871d8b6"
          />
          <ArtistBox
            SpotifyID="3HqSLMAZ3g3d5poNaI7GOU"
            Name="아이유"
            ImageLink="https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg"
          />
          <ArtistBox
            SpotifyID="4dpARuHxo51G3z768sgnrY"
            Name="Adele"
            ImageLink="https://pbs.twimg.com/media/FBqo7QvVEAI9fJT.jpg"
          />
          <ArtistBox
            SpotifyID="4muJrGMndyYWqZtfk8OWy4"
            Name="보아"
            ImageLink="https://i.scdn.co/image/ab6761610000f178206c2ba8d14150ccc634765b"
          />
          <ArtistBox
            SpotifyID="5snNHNlYT2UrtZo5HCJkiw"
            Name="에픽하이"
            ImageLink="https://i.scdn.co/image/ab6761610000f1787ab6a76808b6f77f5628d231"
          />
          <ArtistBox
            SpotifyID="4nvFFLtv7ZqoTr83387uK4"
            Name="다이나믹듀오"
            ImageLink="https://i.scdn.co/image/ab6761610000e5ebf58590979d60df6fb6d6a837"
          />
          <ArtistBox
            SpotifyID="7f4ignuCJhLXfZ9giKT7rH"
            Name="NCT127"
            ImageLink="https://i.scdn.co/image/ab6761670000ecd41cfadde11f891e8889b15e4a"
          />
          <ArtistBox
            SpotifyID="7jFUYMpMUBDL4JQtMZ5ilc"
            Name="성시경"
            ImageLink="https://i.scdn.co/image/ab6761610000e5ebb3c06b25c1c87dfcec00877d"
          />
          <ArtistBox
            SpotifyID="1HY2Jd0NmPuamShAr6KMms"
            Name="Lady Gaga"
            ImageLink="https://i.scdn.co/image/ab6761610000f178749ba770a33230206f8fe159"
          />
          <ArtistBox
            SpotifyID="2hRQKC0gqlZGPrmUKbcchR"
            Name="SHINee"
            ImageLink="https://i.scdn.co/image/ab67706c0000da84161330f59573a6b5bb402101"
          />
        </ArtistWrap>

        <SubmitButton onClick={goStart}>시작</SubmitButton>
        <Footer />
      </Contents>
    </Wrap>
  );
}

const Wrap = styled.section`
  font-family: 'Pretendard';
  height: 100%;
  background: ${PALLETS.GRAY};
`;
const Header = styled.header`
  height: 30vh;
  background: ${PALLETS.BLACK};
  color: #fff;
`;
const Contents = styled.main`
  display: block;
  margin: 0 auto;
  padding: 20px 0;
  width: 768px;
`;
const ArtistWrap = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const SubmitButton = styled.a`
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  width: 160px;
  height: 47px;
  background-color: ${PALLETS.WHITE};
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
  border-radius: 100px;
`;

export default Home;
