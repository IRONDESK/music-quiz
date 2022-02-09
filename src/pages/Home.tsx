import React, { useState } from 'react';
import { PALLETS } from '../constants';
import styled from 'styled-components';

import HeaderTitle from '../components/Home/HeaderTitle';
import ArtistBox from '../components/Home/ArtistBox';

function Home() {
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  function selectArtist (e: any) {
    const target = e.target.closest('label');
    if (target) {setSelectedArtist(target.dataset.spotifyid);}
  };

  return (
  <HomeWrap>
    <HomeHeader>
      <HeaderTitle />
    </HomeHeader>
    
    <HomeMain>
      <ArtistWrap onClick={selectArtist}>
        <ArtistBox
          SpotifyID = "3Nrfpe0tUJi4K4DXYWgMUX"
          Name = "방탄소년단"
          ImageLink = "https://lh3.googleusercontent.com/z2Nx3OKs17IJ72sR8tjk124xgfgGJPw80NeOfO9nAvQ34WFWFwqi-ndFQzQKpdZ4rdnGqBH7c0rVTrcaJF4vTHs"
        />
        <ArtistBox
          SpotifyID = "3HqSLMAZ3g3d5poNaI7GOU"
          Name = "아이유"
          ImageLink = "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg"
        />
        <ArtistBox
          SpotifyID = "4dpARuHxo51G3z768sgnrY"
          Name = "Adele"
          ImageLink = "https://pbs.twimg.com/media/FBqo7QvVEAI9fJT.jpg"
        />
        <ArtistBox
          SpotifyID = "7IrDIIq3j04exsiF3Z7CPg"
          Name = "빈지노"
          ImageLink = "https://w.namu.la/s/62b35913643bf17e02ba500198edf9c964038bdcc76b8b2d420fee20575404babddc8ec64f81add5a964f5dfe56c2ab3f8a72df68f27f357c4bf263d3828d2c19a4a49f8840092c3be410a39adcba265001eb5e8990751d0a97426267bd6b3ad"
        />
      </ArtistWrap>

      <SubmitButton>
        시작
      </SubmitButton>
    </HomeMain>
    
  </HomeWrap>
  );
}

const HomeWrap = styled.section`
  font-family: 'Pretendard';
  height: 100vh;
  background: ${PALLETS.GRAY};
`;
const HomeHeader = styled.header`
  display: flex;
  height: 30vh;
  align-items: flex-end;
  background: ${PALLETS.BLACK};
  color: #fff;
  `;
const HomeMain = styled.main`
  display: block;
  margin: 10px auto;
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
