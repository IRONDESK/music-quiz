import React, { useEffect, useState } from 'react';
import { PALLETS } from '../../constants';
import styled from 'styled-components';

function ResultContents() {
    const [title, setTitle] = useState<string | null>(null);
    const [detail, setDetail] = useState<string | null>(null);
    const myPoint:any = localStorage.getItem('correct-amount');

    useEffect(():any => {
        setTitle(PointMsg);
    }, []);

    function PointMsg ():any {
        if ( myPoint == 10 ) {
            return ("이게 되네?");
        } else if ( myPoint >= 8 ) {
            return ("당신을 최고라고 임명함");
        } else if ( myPoint >= 6 ) {
            return ("당신을 쫌 한다고 임명함");
        } else if ( myPoint >= 4 ) {
            return ("팬심 부족");
        } else if ( myPoint >= 1 ) {
            return (<>그냥 평범한 시민<br />팬도 아니고 안티도 아닌 당신</>);
        } else if ( myPoint == 0 ) {
            return ("팬.... 맞죠?");
        }
    };
    
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