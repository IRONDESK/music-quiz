import React, { useEffect, useState } from 'react';
import { PALLETS } from '../../constants';
import styled from 'styled-components';

function ResultContents({ Point }:any) {
    const [title, setTitle] = useState<string | null>(null);
    const [detail, setDetail] = useState<string | null>(null);

    useEffect(():any => {
        if ( Point = 10 ) {
            setTitle("이게 되네?");
            setDetail("10점을 받네요... 축하드립니다👏👏");
        } else if ( Point >= 8 ) {
            setTitle("당신을 최고라고 임명함");
            setDetail("이 사람은 정말 팬심이 대단하다.");
        } else if ( Point >= 6 ) {
            setTitle("당신을 쫌 한다고 임명함");
            setDetail("6점 이상");
        } else if ( Point >= 4 ) {
            setTitle("팬심 부족");
            setDetail("4점 이상");
        } else if ( Point >= 1 ) {
            setTitle("그냥 평범한 시민");
            setDetail("1점 이상");
        } else if ( Point = 0 ) {
            setTitle("팬.... 맞죠?");
            setDetail("0점");
        }
    }, [Point]);
    
    return (
    <Wrap>
        <TitleWrap>{title}</TitleWrap>
        <DetailWrap>{detail}</DetailWrap>
    </Wrap>
    );
}

const Wrap = styled.div`
    display: block;
`;

const TitleWrap = styled.h3`
    display: block;
    font-weight: 700;
    font-size: 47px;
    color: ${PALLETS.WHITE};
    text-align: center;
`;
const DetailWrap = styled.p`
    display: block;
    margin: 25px 0;
    font-weight: 300;
    font-size: 22px;
    color: ${PALLETS.WHITE};
    text-align: center;
`;

export default ResultContents;