import React from 'react';
import styled from 'styled-components';

function Advertisement() {
  return (
    <KakaoAd>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit="DAN-vdMgEFsiSEFaY68c"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
    </KakaoAd>
  );
}

export default Advertisement;

const KakaoAd = styled.div`
  display: inline-block;
  width: 320px;
  height: 100px;
`;
